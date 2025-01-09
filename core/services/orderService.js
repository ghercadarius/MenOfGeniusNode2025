import CartRepository from "../repositories/cartRepository.js";
import orderRepository from "../repositories/orderRepository.js";
import CartService from "../repositories/cartProductRepository.js";

export const createOrder = async (userId) => {
    const cart = await CartRepository.getCartByUserId(userId);

    const products = await CartService.getCartProducts(cart.id);

    if (!cart || !products) {
        throw new Error("Cart is empty");
    }

    let allOrderProducts = [];
    for (const product of products) {
        allOrderProducts.add(
            await orderRepository.createOrder(userId, product));
    }
    await CartService.removeAllProductsFromCart(userId);

    return allOrderProducts;
}