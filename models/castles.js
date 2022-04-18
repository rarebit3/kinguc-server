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
    }
  }
  Castles.init({
    name: DataTypes.STRING,
    forTypes: DataTypes.STRING,
    servantCount: DataTypes.INTEGER,
    incomePerCastle: DataTypes.INTEGER,
    country: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Castles',
    tableName: 'castles'
  });
  return Castles;
};