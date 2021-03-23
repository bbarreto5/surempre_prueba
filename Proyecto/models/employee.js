'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Employee.init({
    LastName: DataTypes.TEXT,
    FirstName: DataTypes.TEXT,
    Title: DataTypes.TEXT,
    TitleOfCourtesy: DataTypes.TEXT,
    BirthDate: DataTypes.DATE,
    HireDate: DataTypes.DATE,
    Address: DataTypes.TEXT,
    City: DataTypes.STRING,
    Region: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Country: DataTypes.STRING,
    HomePhone: DataTypes.STRING,
    Extension: DataTypes.TEXT,
    Photo: DataTypes.BLOB,
    Notes: DataTypes.TEXT,
    PhotoPath: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};