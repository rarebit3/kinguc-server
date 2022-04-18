'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
       
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      passwordDigest: {
        type: Sequelize.STRING,
        allowNull: false
      },
      magicEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        
        validate: {
          isEmail: true
        }
      },
      highAbility: {
        type: Sequelize.BOOLEAN,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};