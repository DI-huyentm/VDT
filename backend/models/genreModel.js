module.exports = (sequelize, DataTypes, Model) => {
  class Genre extends Model {}
  Genre.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Genre", // We need to choose the model name
      timestamps: false,
    }
  );
  return Genre;
};
