import db from "../../models/index.js";
import {OrderStatusEnum} from "../../models/enums/orderStatusEnum.js";
import cartOrderRepository from "../repositories/cartProductRepository.js";
import productRepository from "../repositories/productRepository.js";
import {handleError} from "../utils/handleError.js";

export const createOrder = async (userId) => {
    const cart = await db.Cart.findOne({
        where: {userId}
    });

    const cartProducts = await db.CartProducts.findAll({
        where: {cartId: cart.id}
    });

    const products = await Promise.all(cartProducts.map(async (cartProduct) => {
        return await productRepository.getByPk(cartProduct.productId);
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
        handleError('Order not found');
    }

    const product = await productRepository.getByPk(order.productId);

    if (product.userId !== userId) {
        handleError('You are not the owner of this product');
    }

    if (order.status !== OrderStatusEnum.PENDING) {
        handleError('This order is not pending');
    }

    order.status = response ? OrderStatusEnum.CONFIRMED : OrderStatusEnum.CANCELLED;

    if (response) {
        await productRepository.setInactiveStatus(product.id);
    }

    await order.save();

    if (response) {
        setTimeout(async () => {
            const updatedOrder = await db.Order.findByPk(orderId);
            if (updatedOrder && updatedOrder.status === OrderStatusEnum.CONFIRMED) {
                updatedOrder.status = OrderStatusEnum.DELIVERING;
                await updatedOrder.save();
                console.log(`Order ${orderId} status updated to DELIVERING.`);
            }
        }, 60000); // 60000ms = 1 minut
    }

    return order;
}

export const getMyOrders = async (userId) => {
    return await db.Order.findAll({
        where: {userId},
        include: [
            {model: db.User, as: 'user'},
            {model: db.Product, as: 'product'}
        ]
    });
}

export const confirmOrder = async (userId, orderId) => {
    const order = await db.Order.findByPk(orderId);

    if (!order) {
        handleError('Order not found');
    }

    if (order.userId !== userId) {
        handleError('You are not the owner of this order');
    }

    if (order.status !== OrderStatusEnum.DELIVERING) {
        handleError('This order is not delivering');
    }

    order.status = OrderStatusEnum.COMPLETED;

    await order.save();

    return order;
}