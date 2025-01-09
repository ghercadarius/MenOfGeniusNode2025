import db from "../../models/index.js";
import {OrderStatusEnum} from "../../models/enums/orderStatusEnum.js";
import cartOrderRepository from "../repositories/cartProductRepository.js";
import {promise} from "bcrypt/promises.js";

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