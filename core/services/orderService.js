import db from "../../models/index.js";
import {OrderStatusEnum} from "../../models/enums/orderStatusEnum.js";
import cartOrderRepository from "../repositories/cartProductRepository.js";
import productRepository from "../repositories/productRepository.js";

export const createOrder = async (userId) => {
    const cart = await db.Cart.findOne({
        where: {userId}
    });

    const cartProducts = await db.CartProducts.findAll({
        where: {cartId: cart.id}
    });

    const products = await Promise.all(cartProducts.map(async (cartProduct) => {
        return await db.Product.findByPk(cartProduct.productId);
    }));

    const allCreatedOrders = await Promise.all(products.map(async (product) => {
            return await db.Order.create({
                userId,
                productId: product.id,
                status: OrderStatusEnum.PENDING,
            });
        }
    ));

    await cartOrderRepository.removeAllProductsFromCart(cart.id);

    return allCreatedOrders;

}

export const getAllOffersReceived = async (userId) => {
    const myProducts = await db.Product.findAll({
        where: {userId},
        attributes: ['id'], // Fetch only the necessary fields
    });

    const productIds = myProducts.map(product => product.id);

    return await db.Order.findAll({
        where: {productId: productIds},
        include: [
            {model: db.User, as: 'user'}, // Include user details
            {model: db.Product, as: 'product'} // Include product details
        ]
    });

}

export const respondToOffer = async (userId, orderId, response) => {
    const order = await db.Order.findByPk(orderId);

    if (!order) {
        throw new Error('Order not found');
    }

    const product = await db.Product.findByPk(order.productId);

    if (product.userId !== userId) {
        throw new Error('You are not the owner of this product');
    }

    if (order.status !== OrderStatusEnum.PENDING) {
        throw new Error('This order is not pending');
    }

    order.status = response ? OrderStatusEnum.CONFIRMED : OrderStatusEnum.CANCELLED;

    if(response) {
        await productRepository.destroyProduct(product.id);
    }

    await order.save();

    return order;
}