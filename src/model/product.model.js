const { Sequelize, DataTypes, Model } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

// const sequelize = new Sequelize("2PieceInfo", "root", "Surely0101", {
//   host: "10.173.5.17",
//   port: 3307,
//   dialect: "mysql",
// });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("All authentication pass");
//   } catch (err) {
//     console.error("Authentication failed", err);
//   }
// }

// testConnection();

class Product extends Model {}

Product.init(
  {
    product_Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false,
    },
    is_stock: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

module.exports = Product;
