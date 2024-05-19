module.exports = (sequelize, DataTypes, Model) => {
  class Book extends Model {}
  Book.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },      
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      }      
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Book", // We need to choose the model name
      timestamps: false,
    }
  );
  return Book;
};
