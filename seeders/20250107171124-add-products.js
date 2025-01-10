
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //   const generateTimestamps = () => ({
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    // });
    //
    // const mockProducts = Array.from({length: 100}, () => ({
    //     name: faker.commerce.productName(),
    //     price: parseFloat(faker.commerce.price({min: 1})),
    //     description: faker.commerce.productDescription(),
    //     urlPhoto: "google.com",
    //     category: ProductCategoryEnum[Object.keys(ProductCategoryEnum)[faker.number.int({min: 0, max: Object.keys(ProductCategoryEnum).length - 1})]],
    //     userId: faker.number.int({min: 1, max: 100}),
    //     ...generateTimestamps(),
    // }));
    // const predefinedProducts = [
    //   {
    //     name: 'Product 1',
    //     price: 100,
    //     description: 'Description of product 1',
    //     urlPhoto: 'google.com',
    //     category: ProductCategoryEnum.BOOTS,
    //     userId: 102
    //   },
    //   {
    //     name: 'Product 2',
    //     price: 200,
    //     description: 'Description of product2',
    //     urlPhoto: 'google.com',
    //     category: ProductCategoryEnum.HOODIES,
    //     userId: 102
    //   },
    // ].map(product => ({
    //     ...product,
    //     ...generateTimestamps(),
    // }));
    //
    // const allProducts = [...mockProducts, ...predefinedProducts];
    // await queryInterface.bulkInsert('Products', allProducts, {});
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('Products', null, {});
  }
};
