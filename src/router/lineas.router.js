const { dbConsult } = require("../../db/dbConstructor");

const router = require("express").Router();

router.get("/serial/:serial", async function (req, res) {
  const serialNumber = req.params.serial;
  const number = await new dbConsult().serial(serialNumber).connect();
  if (number.length) {
    res.status(200).json(number);
  } else {
    res.status(404);
  }
});

router.get("/number/:number", async function (req, res) {
  const number = req.params.number;
  const serial = await new dbConsult().number(number).connect();
  if (serial.length) {
    res.status(200).json(serial);
  } else {
    res.status(404);
  }
});

module.exports = router;
