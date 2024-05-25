'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Students', 'gender', {
      type: Sequelize.STRING,
      defaultValue: null
    });

    await queryInterface.changeColumn('Students', 'school', {
      type: Sequelize.STRING,
      defaultValue: null
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Students', 'gender', {
      type: Sequelize.STRING,
    });

    await queryInterface.changeColumn('Students', 'school', {
      type: Sequelize.STRING,
    });
  }
};
