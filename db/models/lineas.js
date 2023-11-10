'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lineas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lineas.init({
    Numero_de_serie: DataTypes.INTEGER,
    Tipo_de_Equipo: DataTypes.STRING,
    Agencia: DataTypes.STRING,
    Proveedor_celular: DataTypes.STRING,
    Numero_de_datos: DataTypes.INTEGER,
    Numero_de_voz: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lineas',
  });
  return Lineas;
};