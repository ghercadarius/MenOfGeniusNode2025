'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        chatId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
            model: 'Chats',
            key: 'id'
            }
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
            model: 'Users',
            key: 'id'
            }
        },
        message: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Messages')
  }
};
