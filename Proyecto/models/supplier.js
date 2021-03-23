'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supplier.hasMany(models.Product,{
        foreignKey: 'SupplierId',
      })
    }
  };
  Supplier.init({
    CompanyName: DataTypes.STRING,
    ContactName: DataTypes.STRING,
    ContactTitle: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    Region: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Country: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Fax: DataTypes.STRING,
    HomePage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};