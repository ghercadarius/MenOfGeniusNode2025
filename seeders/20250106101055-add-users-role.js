'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const fetchIds = async (tableName) => {
            const results = await queryInterface.sequelize.query(
                `SELECT id
                 FROM ${tableName};`
            );
            return results[0];
        };

        const users = await fetchIds('Users');

        const userRoles = users
            .filter(
                user => ![101, 102].includes(user.id)
            ).map(user => ({
                userId: user.id,
                roleId: 2,
            }));

        userRoles.push({userId: 101, roleId: 1}); // Admin
        userRoles.push({userId: 102, roleId: 2}); // User


        await queryInterface.bulkInsert('UserRoles', userRoles, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserRoles', null, {});
    }
};
