import productRepository from "../repositories/productRepository.js";
import {handleError} from "../utils/handleError.js";
import cartRepository from "../repositories/cartRepository.js";
import cartProductRepository from "../repositories/cartProductRepository.js";

export const createCart = async (userId) => {
    return await cartRepository.createCart(userId);
}


export const addProductToCart = async (userId, productId) => {
    // Verify the product exists and retrieve the cart in parallel
    const [productExists, cart] = await Promise.all([
        productRepository.getById(productId),
        cartRepository.getCartByUserId(userId)
    ]);

    // Check if the product is already in the cart
    const cartProduct = await cartProductRepository.getCartProducts(cart.id, productId);
    if (cartProduct) {
        throw handleError("You already have this product in your cart", 'BAD_REQUEST');
    }

    // Add the product to the cart
    await cartProductRepository.addProductToCart(cart.id, productId);

    return cart;
}