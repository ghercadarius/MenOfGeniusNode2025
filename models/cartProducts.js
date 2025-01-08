'use strict';
import {Model as CartProduct, Model} from 'sequelize';

export default (sequelize, DataTypes) => {
    class CartProducts extends Model {
        static associate(models) {
            }
    }

    CartProducts.init({
        cartId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'CartProducts',
        timestamps: false
    });

    return CartProducts;
}