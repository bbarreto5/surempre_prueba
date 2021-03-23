'use strict';
const csv = require('csvtojson');
const csvFilePath='../Datos/CustomerCustomerDemo.csv';

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
     if (jsonArray.length === 0) return;
     await queryInterface.sequelize.query(`ALTER SEQUENCE public."CustomerCustomerDemos_id_seq" RESTART WITH ${jsonArray.length+1};`);
     return queryInterface.bulkInsert('CustomerCustomerDemos', jsonArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('CustomerCustomerDemos', null, {});
  }
};
