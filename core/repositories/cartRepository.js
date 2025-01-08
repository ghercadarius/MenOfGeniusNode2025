import db from "../../models/index.js";

class CartRepository {
    static async getCartByUserId(userId) {
        return await db.Cart.findOne({
            where: {userId},
        });
    }
}

export default CartRepository;