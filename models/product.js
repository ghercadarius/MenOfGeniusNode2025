'use strict';
import {Model} from 'sequelize';
import {ProductCategoryEnum} from "./enums/productCategoryEnum.js";

export default (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
            Product.belongsToMany(models.Cart, {through: 'CartProducts', foreignKey: 'productId'});
            }
    }

    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        urlPhoto: DataTypes.STRING,
        category: {
            type: DataTypes.ENUM(...Object.values(ProductCategoryEnum)),
            allowNull: false,
        },
        userId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
}