'use strict';
const {faker} = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const generateTimestamps = () => ({
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const categories = ['T_SHIRTS','SHIRTS','PANTS','JEANS','SHORTS',
      'DRESSES', 'SKIRTS','SWEATERS','HOODIES','JACKETS','COATS','SNEAKERS',
      'BOOTS', 'SANDALS','FORMAL_SHOES','CASUAL_SHOES','SLIPPERS','FLIP_FLOPS'];


    const randomUserId = () => Math.floor(Math.random() * 100) + 1;

    faker.image.imageUrl = () => {
      const width = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
      const height = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
      const category = categories[Math.floor(Math.random() * categories.length)];
      return `https://placeimg.com/${width}/${height}/${category}`;
    };


    const mockProducts = Array.from({ length: 100 }, () => ({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      urlPhoto: faker.image.imageUrl(),
      category: faker.helpers.arrayElement(categories),
      userId: randomUserId(),
      ...generateTimestamps(),
    }));

    await queryInterface.bulkInsert('Products', mockProducts, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
