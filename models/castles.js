'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Castles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Castles.belongsTo(models.Regions, {
        as: 'location',
        foreignKey: 'regionId',
        onDelete: 'CASACDE',
        onUpdate: 'CASCADE'
      })
      ,
      Castles.belongsTo(models.User, {
        as: 'owned_by',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Castles.init({
    name: DataTypes.STRING,
    forTypes: DataTypes.STRING,
    servantCount: DataTypes.INTEGER,
    incomePerCastle: DataTypes.INTEGER,
    country: DataTypes.STRING,
    image: DataTypes.STRING,
    regionId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'regions',
        key: 'id'
      }
    },
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
    modelName: 'Castles',
    tableName: 'castles'
  });
  return Castles;
};