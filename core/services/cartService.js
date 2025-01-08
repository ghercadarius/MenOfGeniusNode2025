import db from "../../models/index.js";
import productRepository from "../repositories/productRepository.js";
import {handleError} from "../utils/handleError.js";

export const addProductToMyCart = async (userId, productId) => {
    await productRepository.getById(productId);

    const cart = await db.Cart.findOne({
        where: {userId},
    });

    //verify if the product is already in the cart
    const cartProduct = await db.CartProducts.findOne({
        where: {
            cartId: cart.id,
            productId,
        },
    });

    if(cartProduct)
        handleError("You already have this product in your cart", 'BAD_REQUEST');
     await db.CartProducts.create({
        cartId: cart.id,
        productId,
    });

    return cart;
}