'use strict';

const csv = require('csvtojson');
const csvFilePath='../Datos/Supplier.csv'

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
     await queryInterface.sequelize.query(`ALTER SEQUENCE public."Suppliers_id_seq" RESTART WITH ${jsonArray.length+1};`);
     return queryInterface.bulkInsert('Suppliers', jsonArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Suppliers', null, {});
  }
};
