'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    OrderDate: DataTypes.DATE,
    RequiredDate: DataTypes.DATE,
    ShippedDate: DataTypes.DATE,
    ShipVia: DataTypes.INTEGER,
    Freight: DataTypes.NUMERIC,
    ShipName: DataTypes.TEXT,
    ShipAddress: DataTypes.TEXT,
    ShipCity: DataTypes.TEXT,
    ShipRegion: DataTypes.TEXT,
    ShipPostalCode: DataTypes.TEXT,
    ShipCountry: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};