'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return [queryInterface.addColumn(
        'Products', // name of Source model
        'CategoryId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      ),
      queryInterface.addColumn(
        'Products', // name of Source model
        'SupplierId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Suppliers', // name of Target model
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
        'Products', // name of Source model
        'CategoryId' // key we want to remove
      ),
      queryInterface.removeColumn(
        'Products', // name of Source model
        'SupplierId' // key we want to remove
      )
    ]
  }
};
