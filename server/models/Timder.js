const { BOOLEAN } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const ArbresTinder = sequelize.define(
    "arbres_tinder",
    {
      id_arbre: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name_tree: {
        type: DataTypes.STRING(50),
        required: true,
      },
      specie: {
        type: DataTypes.STRING(500),
        required: true,
      },
      age: {
        type: DataTypes.NUMBER,
        required: true,
      },
      description: {
        type: DataTypes.TEXT,
        required: true,
      },
      image_url: {
        type: DataTypes.STRING(200),
        required: true,
      },
      liked: {
        type: DataTypes.TINYINT(1),
        defaultValue: null,
      },
    },
    { timestamps: false, freezeTableName: true }
  );

  return ArbresTinder;
};
