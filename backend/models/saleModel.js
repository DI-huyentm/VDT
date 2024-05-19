module.exports = (sequelize, DataTypes, Model) => {
  class Sale extends Model {}
  Sale.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
      },
      total: {
        type: DataTypes.FLOAT,
        // allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        // allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
      },
    },
    {
      // Other model options go here
      hooks: {
        beforeCreate: (sale, options) => {
          sale.date = new Date(); // Set the date to the current time
        },
      },

      sequelize, // We need to pass the connection instance
      modelName: "Sale", // We need to choose the model name
      timestamps: false,
    }
  );
  return Sale;
};
