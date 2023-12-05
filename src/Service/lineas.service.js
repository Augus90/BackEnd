const { dbConsult } = require("../../db/dbConstructor");

const getSerialFromNumber = async (serialNumber) => {
  const number = await new dbConsult().serial(serialNumber).connect();

  return number;
};

const getNumberFromSerial = async (number) => {
  try {
    const serial = await new dbConsult().number(number).connect();
    if (serial) {
      const allNumbers = await new dbConsult()
        .serial(serial[0]["Numero de serie"])
        .connect();
      return allNumbers;
    } else return null;
  } catch (error) {
    return null;
  }
};

module.exports = { getSerialFromNumber, getNumberFromSerial };
