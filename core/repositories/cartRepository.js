import db from "../../models/index.js";

class CartRepository {
    static async getCartByUserId(userId) {
        return await db.Cart.findOne({
            where: {userId},
        });
    }

    static async createCart(userId) {
        return await db.Cart.create({
            userId,
        });
    }
}

export default CartRepository;