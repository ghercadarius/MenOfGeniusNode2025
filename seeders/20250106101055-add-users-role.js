'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const users = await queryInterface.sequelize.query(
            `SELECT id
             from Users;`
        );
        const roles = await queryInterface.sequelize.query(
            `SELECT id
             from Roles;`
        );
        const userRoles = users[0].map(user => {
            return {
                userId: user.id,
                roleId: 2,
            }
        });

        await queryInterface.bulkInsert('UserRoles', userRoles, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
