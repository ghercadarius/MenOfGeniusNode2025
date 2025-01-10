'use strict';
import {Model} from 'sequelize';
import {RoleEnum} from "./enums/roleEnum.js";

export default (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            Role.belongsToMany(models.User, {through: 'UserRoles', foreignKey: 'roleId'});
        }
    }

    Role.init({
        name: {
            type: DataTypes.ENUM(...Object.values(RoleEnum)),
            allowNull: false,
            defaultValue: RoleEnum.USER,
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Role',
    });

    return Role;
};
