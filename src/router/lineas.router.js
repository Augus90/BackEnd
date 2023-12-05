const { dbConsult } = require("../../db/dbConstructor");
const lineasController = require("../Controller/lineas.controller");
// const { request } = require("../app/app");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

router.get("/serial/:serial", lineasController.getSerialFromNumber);

router.get("/number/:number", lineasController.getNumberFromSerial);

router.post("/user/generateToken", (req, res) => {
  // Validate User Here
  // Then generate JWT Token

  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
  };

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});

router.get("/user/validateToken", (req, res) => {
  // Tokens are generally passed in the header of the request
  // Due to security reasons.

  // let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Not Authorized" });
  }

  try {
    // const token = req.header(tokenHeaderKey);

    // Bearer <token>>
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
});

module.exports = router;
