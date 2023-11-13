import axios from "axios";

const baseURL = "http://localhost:3001/api/v1";

export const getSerialFromNumber = async (number) => {
  const serial = await axios
    .get(`${baseURL}/serial/${number}`)
    .catch((err) => err);

  return serial.data;
};

export const getNumberFromSerial = async (serial) => {
  const number = await axios
    .get(`${baseURL}/number/${serial}`)
    .catch((err) => err);

  return number.data;
};
