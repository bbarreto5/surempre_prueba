'use strict';
const csv = require('csvtojson');
const csvFilePath='../Datos/Employee.csv'

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

     jsonArray = jsonArray.map(employee =>{
       if (employee.ReportsTo == ""){
         return {
           ...employee,
           ReportsTo: null,
         }
       }
       return employee;
     })
     await queryInterface.sequelize.query(`ALTER SEQUENCE public."Employees_id_seq" RESTART WITH ${jsonArray.length+1};`);
     return queryInterface.bulkInsert('Employees', jsonArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Employees', null, {});
  }
};
