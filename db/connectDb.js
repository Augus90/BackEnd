const mysql = require("mysql2/promise"); // Importa la librería mysql2
const dotenv = require("dotenv");
dotenv.config();

const rowsName = {
  serie: "Numero de Serie",
  equipo: "Tipo de Equipo",
  agencia: "Agencia",
  proveedor: "Proveedor celular",
  prefijoDeDatos: "Prefijo de datos",
  numeroDeDatos: "Numero de datos",
  prefijoDeVoz: "Prefijo de voz",
  numeroDeVoz: "Numero de voz",
  isPrimario: `pri=1/sec=0`,
};

console.log(
  "HOST",
  `Host: ${process.env.DB_HOST}:${process.env.DB_PORT} user: ${process.env.DB_USER}:${process.env.DB_PASS}`
);

async function obtenerSerials(campo, valor) {
  // Configuración de la conexión a la base de datos
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "Localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
  });

  try {
    // Realiza la consulta para obtener todos los registros de la tabla "Listar_lineas"
    const [rows, fields] = await connection.query(
      `SELECT * FROM ${process.env.DB_TABLE} WHERE \`${campo}\` = ?`,
      [valor]
    );

    let numero = [];
    // Recorre los resultados y muestra los serials
    for (const row of rows) {
      // console.log(
      //   `El equipo con serie ${valor} tiene nuemero ${
      //     row[rowsName.numeroDeDatos]
      //   }`
      // ); // Asumiendo que la columna se llama "serial"
      numero.push(row);
    }
    return numero;
  } catch (error) {
    console.error("Error al obtener los registros:", error);
  } finally {
    // Cierra la conexión a la base de datos
    connection.end();
  }
}

exports.obtenerSerials = obtenerSerials;
exports.rowsName = rowsName;

// Llama a la función para obtener los serials
// obtenerSerials("35634102");
