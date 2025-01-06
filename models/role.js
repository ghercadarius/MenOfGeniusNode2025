'use strict';
import {Model} from 'sequelize';

export default (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            Role.belongsToMany(models.User, {through: 'UserRoles', foreignKey: 'roleId'});
        }
    }

    Role.init({
        name: {
            type: DataTypes.ENUM,
            values: ['admin', 'user'],
            allowNull: false,
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Role',
    });

    return Role;
};
