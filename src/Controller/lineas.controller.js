const { dbConsult } = require("../../db/dbConstructor");
const lineasService = require("../Service/lineas.service");

const getSerialFromNumber = async function (req, res) {
  const {
    params: { serial: serialNumber },
  } = req;

  const number = await lineasService.getSerialFromNumber(serialNumber);

  if (number.length) {
    res.status(200).send({ eqipment: number });
  } else {
    res.status(404);
  }
};

const getNumberFromSerial = async function (req, res) {
  const {
    params: { number },
  } = req;

  const allNumbers = await lineasService.getNumberFromSerial(number);

  if (allNumbers) {
    res.status(200).send({ equipment: allNumbers });
  } else {
    res.status(404);
  }
};

module.exports = { getSerialFromNumber, getNumberFromSerial };
