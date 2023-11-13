const { text } = require("express");
const { obtenerSerials, rowsName } = require("./connectDb");
// import { obtenerSerials } from "./connectDb.js";

class dbConsult {
  constructor(consult = new String("empty")) {
    this.consult = consult;
    this.values = "";
    this.info = {};
  }

  // searchBy() {
  //   return new searchBy(this.consult);
  // }

  serial(params) {
    this.consult = rowsName.serie;
    this.values = params;
    return this;
  }

  number(params) {
    this.consult = rowsName.numeroDeDatos;
    this.values = params;
    return this;
  }

  async connect() {
    // return number();
    this.info = await obtenerSerials(this.consult, this.values);
    // console.log(this.values);
    return this.info;
  }
}

// async function test() {
//   const dbSerial = await new dbConsult().serial("35634120").connect();
//   const dbNumber = await new dbConsult().number("").connect();

//   if (dbSerial.length && dbNumber.length) {
//     console.log("Number", dbSerial[0][rowsName.numeroDeDatos]);
//     console.log("Serial", dbNumber);
//   } else {
//     console.error("Vacio de datos");
//   }

//   // console.log("Serial", dbNumber[0][rowsName.serie]);
// }

// test();

exports.dbConsult = dbConsult;
