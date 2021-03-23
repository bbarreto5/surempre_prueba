'use strict';
const csv = require('csvtojson');
const csvFilePath='../Datos/Order.csv'

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
     let jsonArray = await csv().fromFile(csvFilePath);

     jsonArray = jsonArray.map(order =>{
      if (order.ShippedDate == ""){
        return {
          ...order,
          ShippedDate: null,
        }
      }
      return order;
     })
     await queryInterface.sequelize.query(`ALTER SEQUENCE public."Orders_id_seq" RESTART WITH ${jsonArray.length+1};`);
     return queryInterface.bulkInsert('Orders', jsonArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Orders', null, {});
  }
};
