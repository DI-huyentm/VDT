'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      // define association here
    }
  }

  Student.init({
    name: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      defaultValue: null // Set default value to null
    },
    school: {
      type: DataTypes.STRING,
      defaultValue: null // Set default value to null
    }
  }, {
    sequelize,
    modelName: 'Student',
    timestamps: false // Disable createdAt and updatedAt fields
  });

  return Student;
};
