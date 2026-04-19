'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orphan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orphan.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sponsorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orphan',
  });
  return Orphan;
};