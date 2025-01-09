'use strict';
import {Model} from 'sequelize';
import {OrderStatusEnum} from "./enums/orderStatusEnum.js";

export default (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
            Order.belongsTo(models.Product, {foreignKey: 'productId', as: 'product'});
        }
    }

    Order.init({
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        status: {
            type: DataTypes.ENUM(...Object.values(OrderStatusEnum)),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Order',
    });

    return Order;
}