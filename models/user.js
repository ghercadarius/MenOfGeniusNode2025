'use strict';
import {Model} from 'sequelize';

export default (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsToMany(models.Role, {through: 'UserRoles', foreignKey: 'userId'});
        }
    }

    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};