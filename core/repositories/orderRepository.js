import db from "../../models/index.js";

class OrderRepository{
    static async createOrder(order){
        return db.Order.create(order);
    }
}