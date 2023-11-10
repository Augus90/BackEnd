const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("product_test", "root", "clb151539", {
  host: "192.168.0.4",
  port: 3306,
  dialect: "mysql",
});

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
