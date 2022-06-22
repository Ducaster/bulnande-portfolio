module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      date: DataTypes.STRING,
      category: DataTypes.STRING,
      season: DataTypes.STRING,
      performer: DataTypes.STRING,
      inform: DataTypes.STRING,
      videos: DataTypes.STRING,
    },
    {}
  );
  Project.associate = function (models) {
    // associations can be defined here
    Project.hasMany(models.Image, {
      foreignKey: "project_id",
    });
  };
  return Project;
};
