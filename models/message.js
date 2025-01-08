'use strict';
import {Model} from 'sequelize';

export default (sequelize, DataTypes) => {
    class Message extends Model {
        static associate(models) {
            Message.belongsTo(models.Chat, {foreignKey: 'chatId', as: 'chat'});
            Message.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
        }
    }

    Message.init({
        chatId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        message: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Message',
    });
    return Message;
}