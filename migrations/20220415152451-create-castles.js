'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('castles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      forTypes: {
        type: Sequelize.STRING
      },
      servantCount: {
        type: Sequelize.INTEGER
      },
      incomePerCastle: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      regionId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('castles');
  }
};