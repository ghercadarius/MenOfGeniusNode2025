'use strict';
import {Model} from 'sequelize';

export default (sequelize, DataTypes) => {
    class Chat extends Model {
        static associate(models) {
            Chat.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
            Chat.belongsTo(models.Product, {foreignKey: 'productId', as: 'product'});
            Chat.belongsToMany(models.Message, {through: 'ChatMessages', foreignKey: 'chatId'});
        }
    }

    Chat.init({
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Chat',
    });
    return Chat;
}