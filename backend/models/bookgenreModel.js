module.exports = (sequelize, DataTypes, Model) => {
  class BookGenre extends Model {}
  BookGenre.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "BookGenre", // We need to choose the model name
      timestamps: false,
    }
  );
  return BookGenre;
};
