'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{
        foreignKey: 'CategoryId',
      })
      Product.belongsTo(models.Supplier,{
        foreignKey: 'SupplierId',
      })
    }
  };
  Product.init({
    ProductName: DataTypes.STRING,
    QuantityPerUnit: DataTypes.STRING,
    UnitPrice: DataTypes.NUMERIC,
    UnitsInStock: DataTypes.INTEGER,
    UnitsOnOrder: DataTypes.INTEGER,
    ReorderLevel: DataTypes.INTEGER,
    Discontinued: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};