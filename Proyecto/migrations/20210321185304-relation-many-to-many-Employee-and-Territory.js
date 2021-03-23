'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return [
      queryInterface.addConstraint('EmployeeTerritories', {
        fields: ['EmployeeId'],
        type: 'FOREIGN KEY',
        name: 'FK_EmployeeTerritories_Employee_1',
        references: {
          table: 'Employees',
          field: 'id',
        }
      }),
      queryInterface.addConstraint('EmployeeTerritories', {
        fields: ['TerritoryId'],
        type: 'FOREIGN KEY',
        name: 'FK_EmployeeTerritories_Territories_1',
        references: {
          table: 'Territories',
          field: 'id',
        }
      }),
    ]
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return [
      queryInterface.removeConstraint('EmployeeTerritories', 'FK_EmployeeTerritories_Employee_1'),
      queryInterface.removeConstraint('EmployeeTerritories', 'FK_EmployeeTerritories_Territories_1'),
    ]
  }
};
