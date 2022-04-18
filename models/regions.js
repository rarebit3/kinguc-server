'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Regions.belongsTo(models.User, {
        as: 'ruled_by',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Regions.hasMany(models.Castles, {
        as: 'castles',
        foreignKey: 'regionId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Regions.init({
    Type: DataTypes.STRING,
    name: DataTypes.STRING,
    population: DataTypes.INTEGER,
    numberOfNobles: DataTypes.INTEGER,
    capitalCity: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Regions',
    tableName: 'regions'
  });
  return Regions;
};