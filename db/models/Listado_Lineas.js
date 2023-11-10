const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ListadoLineas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListadoLineas.init(
    {
      Numero_de_serie: DataTypes.INTEGER,
      Tipo_de_Equipo: DataTypes.STRING,
      Agencia: DataTypes.STRING,
      Proveedor_celular: DataTypes.STRING,
      Prefijo_de_datos: DataTypes.INTEGER,
      Numero_de_datos: DataTypes.INTEGER,
      Prefijo_de_datos: DataTypes.INTEGER,
      Numero_de_voz: DataTypes.INTEGER,
      pri_sec: DataTypes.INTEGER,
      date_created: DataTypes.DATE,
      date_updated: DataTypes.DATE,
    },
    {
      // options
      sequelize,
      modelName: "ListadoLineas",
      tableName: "Lineas",
      createdAt: "date_created",
      underscore: true,
      timestamps: false,
    }
  );
  FooBar.removeAttribute("id");
  return FooBar;
};
