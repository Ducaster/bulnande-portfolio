module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define(
    "Portfolio",
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      desc: DataTypes.STRING,
    },
    {}
  );

  return Portfolio;
};
