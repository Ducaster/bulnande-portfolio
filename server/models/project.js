"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      date: DataTypes.STRING,
      category: DataTypes.STRING,
      season: DataTypes.STRING,
      performer: DataTypes.STRING,
      inform: DataTypes.STRING,
      images: DataTypes.STRING,
      videos: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
