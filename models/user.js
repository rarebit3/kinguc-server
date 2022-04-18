'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Regions, {
        as: 'ruler_of',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      User.hasMany(models.Castles, {
        as: 'owner_of',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    } ,
    passwordDigest:{
      type: DataTypes.STRING,
      allowNull: false
    } ,
    magicEmail:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    } ,
    highAbility: {
      type: DataTypes.BOOLEAN,
      
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};