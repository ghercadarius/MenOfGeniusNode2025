'use strict';
import {Model} from 'sequelize';

export default (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
            Cart.belongsToMany(models.Product, {through: 'CartProducts', foreignKey: 'cartId'});
            }
    }

    Cart.init({
        userId: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Cart',
    });

    return Cart;
}