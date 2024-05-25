const { Sequelize, DataTypes, Model, QueryTypes, Op } = require("sequelize");
const sequelize = new Sequelize("vdt", "root", "1", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

// Connecting to MySQL Database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.QueryTypes = QueryTypes;
db.Op = Op;

// Include Models
db.Student = require("./studentModel")(sequelize, DataTypes, Model);



// // Define the relations between many models
// None

db.sequelize.sync();

module.exports = db;
