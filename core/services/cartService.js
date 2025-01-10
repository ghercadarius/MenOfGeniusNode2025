import productRepository from "../repositories/productRepository.js";
import {handleError} from "../utils/handleError.js";
import cartRepository from "../repositories/cartRepository.js";
import cartProductRepository from "../repositories/cartProductRepository.js";

export const createCart = async (userId) => {
    return await cartRepository.createCart(userId);
}


export const addProductToCart = async (userId, productId) => {
    // Verify the product exists and retrieve the cart in parallel
    const [product, cart] = await Promise.all([
        productRepository.getById(productId),
        cartRepository.getCartByUserId(userId)
    ]);

    if (product.userId === userId) {
        handleError("You can't add your own product to your cart", 'BAD_REQUEST');
    }

    // Check if the product is already in the cart
    const cartProduct = await cartProductRepository.getCartProduct(cart.id, productId);
    if (cartProduct) {
        handleError("You already have this product in your cart", 'BAD_REQUEST');
    }

    // Add the product to the cart
    await cartProductRepository.addProductToCart(cart.id, productId);

    return cart;
}

export const removeProductFromCart = async (userId, productId) => {
    // Verify the product exists and retrieve the cart in parallel
    const [productExists, cart] = await Promise.all([
        productRepository.getById(productId),
        cartRepository.getCartByUserId(userId)
    ]);

    // Check if the product is in the cart
    const cartProduct = await cartProductRepository.getCartProducts(cart.id, productId);
    if (!cartProduct) {
        throw handleError("This product is not in your cart", 'BAD_REQUEST');
    }

    // Remove the product from the cart
    await cartProductRepository.removeProductFromCart(cart.id, productId);

    return cart;
}

export const getUserCart = async (userId) => {
    //return all product from current users cart
    return await cartRepository.getCartByUserId(userId);
}

export const removeAllProductsFromCart = async (userId) => {
    //remove all products from current users cart
    const cart = await cartRepository.getCartByUserId(userId);
    await cartProductRepository.removeAllProductsFromCart(cart.id);

    return cart;
}