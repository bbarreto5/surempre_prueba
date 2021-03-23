'use strict';
const csv = require('csvtojson');
const csvFilePath='../Datos/Product.csv'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const jsonArray = await csv().fromFile(csvFilePath);
     await queryInterface.sequelize.query(`ALTER SEQUENCE public."Products_id_seq" RESTART WITH ${jsonArray.length+1};`);
     return queryInterface.bulkInsert('Products', jsonArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Products', null, {});
  }
};
