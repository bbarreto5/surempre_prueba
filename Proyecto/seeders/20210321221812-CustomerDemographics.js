'use strict';
const csv = require('csvtojson');
const csvFilePath='../Datos/CustomerDemographic.csv';

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
     return queryInterface.bulkInsert('CustomerDemographics', jsonArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('CustomerDemographics', null, {});
  }
};
