'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      season: {
        type: Sequelize.STRING
      },
      performer: {
        type: Sequelize.STRING
      },
      inform: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      videos: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Projects');
  }
};