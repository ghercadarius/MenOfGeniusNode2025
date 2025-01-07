'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Roles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.ENUM('admin', 'user'),
                allowNull: false,
            }
        }, {
            timestamps: false
        });

        await queryInterface.createTable('UserRoles', {
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Roles',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            }
        }, {
            timestamps: false
        });

        await queryInterface.addConstraint('UserRoles', {
            fields: ['userId', 'roleId'],
            type: 'primary key',
            name: 'user_roles_pkey'
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('UserRoles');
        await queryInterface.dropTable('Roles');
    }
};
