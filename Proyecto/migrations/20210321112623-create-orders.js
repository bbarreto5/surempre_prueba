'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OrderDate: {
        type: Sequelize.DATE
      },
      RequiredDate: {
        type: Sequelize.DATE
      },
      ShippedDate: {
        type: Sequelize.DATE
      },
      ShipVia: {
        type: Sequelize.INTEGER
      },
      Freight: {
        type: Sequelize.NUMERIC
      },
      ShipName: {
        type: Sequelize.TEXT
      },
      ShipAddress: {
        type: Sequelize.TEXT
      },
      ShipCity: {
        type: Sequelize.TEXT
      },
      ShipRegion: {
        type: Sequelize.TEXT
      },
      ShipPostalCode: {
        type: Sequelize.TEXT
      },
      ShipCountry: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Orders');
  }
};