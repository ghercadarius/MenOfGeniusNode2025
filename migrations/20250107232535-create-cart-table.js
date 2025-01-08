'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Carts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('CartProducts', {
            cartId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Carts',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            productId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Products',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            }
        }, {
            timestamps: false
        });

        await queryInterface.addConstraint('CartProducts', {
            fields: ['cartId', 'productId'],
            type: 'primary key',
            name: 'cart_products_pkey'
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('CartProducts');
        await queryInterface.dropTable('Carts');
    }
};
