'use strict';
import {Model} from 'sequelize';

export default (sequelize, DataTypes) => {
    class UserRoles extends Model {
        static associate(models) {
            // define association here
        }
    }

    UserRoles.init({
        userId: DataTypes.INTEGER,
        roleId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'UserRoles',
        timestamps: false
    });
    return UserRoles;
}