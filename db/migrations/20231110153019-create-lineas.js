'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lineas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Numero_de_serie: {
        type: Sequelize.INTEGER
      },
      Tipo_de_Equipo: {
        type: Sequelize.STRING
      },
      Agencia: {
        type: Sequelize.STRING
      },
      Proveedor_celular: {
        type: Sequelize.STRING
      },
      Numero_de_datos: {
        type: Sequelize.INTEGER
      },
      Numero_de_voz: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lineas');
  }
};