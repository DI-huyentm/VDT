'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Students', 'createdAt');
    await queryInterface.removeColumn('Students', 'updatedAt');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Students', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('Students', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  }
};
