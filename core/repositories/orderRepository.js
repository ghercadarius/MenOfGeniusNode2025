import db from "../../models/index.js";

class OrderRepository{
    static async createOrder(userId, product){
        return await db.Order.create({
            userId,
            product,
        });
    }
}

export default OrderRepository;