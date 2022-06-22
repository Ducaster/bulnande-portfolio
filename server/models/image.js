module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      url: DataTypes.STRING,
      project_id: DataTypes.INTEGER,
    },
    {}
  );
  Image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.Project, {
      foreignKey: "id",
    });
  };
  return Image;
};
