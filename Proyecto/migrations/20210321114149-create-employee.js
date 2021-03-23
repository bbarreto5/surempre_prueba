'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LastName: {
        type: Sequelize.TEXT
      },
      FirstName: {
        type: Sequelize.TEXT
      },
      Title: {
        type: Sequelize.TEXT
      },
      TitleOfCourtesy: {
        type: Sequelize.TEXT
      },
      BirthDate: {
        type: Sequelize.DATE
      },
      HireDate: {
        type: Sequelize.DATE
      },
      Address: {
        type: Sequelize.TEXT
      },
      City: {
        type: Sequelize.STRING
      },
      Region: {
        type: Sequelize.STRING
      },
      PostalCode: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      HomePhone: {
        type: Sequelize.STRING
      },
      Extension: {
        type: Sequelize.TEXT
      },
      Photo: {
        type: Sequelize.BLOB
      },
      Notes: {
        type: Sequelize.TEXT
      },
      PhotoPath: {
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
    await queryInterface.dropTable('Employees');
  }
};