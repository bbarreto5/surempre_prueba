'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProductName: {
        type: Sequelize.STRING
      },
      QuantityPerUnit: {
        type: Sequelize.STRING
      },
      UnitPrice: {
        type: Sequelize.NUMERIC
      },
      UnitsInStock: {
        type: Sequelize.INTEGER
      },
      UnitsOnOrder: {
        type: Sequelize.INTEGER
      },
      ReorderLevel: {
        type: Sequelize.INTEGER
      },
      Discontinued: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};