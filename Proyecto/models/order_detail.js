'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order_Detail.init({
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    UnitPrice: DataTypes.NUMERIC,
    Quantity: DataTypes.INTEGER,
    Discount: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'Order_Detail',
  });
  return Order_Detail;
};