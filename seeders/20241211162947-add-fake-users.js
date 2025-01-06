'use strict';
const {faker} = require('@faker-js/faker');
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const generateTimestamps = () => ({
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const mockUsers = Array.from({length: 100}, () => ({
            username: faker.internet.username(),
            password: faker.internet.password(),
            ...generateTimestamps(),
        }));

        const adminPassword = await bcrypt.hash('admin', 5);
        const userPassword = await bcrypt.hash('user', 5);
        const predefinedUsers = [
            {username: 'admin', password: adminPassword},
            {username: 'user', password: userPassword},
        ].map(user => ({
            ...user,
            ...generateTimestamps(),
        }));

        const allUsers = [...mockUsers, ...predefinedUsers];

        await queryInterface.bulkInsert('Users', allUsers, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
