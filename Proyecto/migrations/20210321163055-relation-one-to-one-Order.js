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
      queryInterface.addColumn(
        'Orders', // name of Source model
        'ShipperId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Shippers', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      ),
      queryInterface.addColumn(
        'Orders', // name of Source model
        'EmployeeId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Employees', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      ),
      queryInterface.addColumn(
        'Orders', // name of Source model
        'CustomerId', // name of the key we're adding 
        {
          type: Sequelize.STRING,
          references: {
            model: 'Customers', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
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
      queryInterface.removeColumn(
        'Orders', // name of Source model
        'ShipperId' // key we want to remove
      ),
      queryInterface.removeColumn(
        'Orders', // name of Source model
        'EmployeeId' // key we want to remove
      ),
      queryInterface.removeColumn(
        'Orders', // name of Source model
        'CustomerId' // key we want to remove
      )
    ]
  }
};
