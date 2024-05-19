module.exports = (sequelize, DataTypes, Model) => {
  class SaleDetail extends Model {}
  SaleDetail.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      sale_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "SaleDetail", // We need to choose the model name
      timestamps: false,
    }
  );
  return SaleDetail;
};
