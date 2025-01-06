'use strict';
import {Model} from 'sequelize';

export default (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
        }
    }

    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        userId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
}