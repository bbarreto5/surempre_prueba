'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerDemographic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CustomerDemographic.init({
    CustomerDesc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CustomerDemographic',
  });
  return CustomerDemographic;
};