import * as orderRepository from "./orderService.js";
import CartRepository from "../repositories/cartRepository.js";
import {OrderStatusEnum} from "../../models/enums/orderStatusEnum.js";

export const createOrder = async (userId) => {
    const cart = await CartRepository.getCartByUserId(userId);

    if (!cart || cart.products.length === 0) {
        throw new Error("Cart is empty");
    }

    return await Promise.all(
        cart.products.map(async (product) => {
            return await orderRepository.createOrder({
                userId: userId,
                productId: product.id,
                status: OrderStatusEnum.PENDING,
            });
        })
    );
}