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
      queryInterface.addConstraint('CustomerCustomerDemos', {
        fields: ['CustomerDemoId'],
        type: 'FOREIGN KEY',
        name: 'FK_CustomerCustomerDemos_CustomerDemographics_1',
        references: {
          table: 'CustomerDemographics',
          field: 'id',
        }
      }),
      queryInterface.addConstraint('CustomerCustomerDemos', {
        fields: ['CustomerId'],
        type: 'FOREIGN KEY',
        name: 'FK_CustomerCustomerDemos_Customers_1',
        references: {
          table: 'Customers',
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
      queryInterface.removeConstraint('CustomerCustomerDemos', 'FK_CustomerCustomerDemos_CustomerDemographics_1'),
      queryInterface.removeConstraint('CustomerCustomerDemos', 'FK_CustomerCustomerDemos_Customers_1'),
    ]
  }
};
