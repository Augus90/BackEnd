import axios from "axios";
import React, { useState } from "react";
import { getNumberFromSerial } from "../../common/API";
import IconChange from "../../common/iconChange";

const Numbers = ({ click }) => {
  const [responceInfo, setResponceInfo] = useState();
  const [form, setForm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`${baseURL}/serial/${form}`);
    // const response = await axios.get(`${baseURL}/number/${form}`);
    const number = await getNumberFromSerial(form);

    if (!number) {
      alert("Invalid number");
    }

    setResponceInfo(number);
    console.log(number);
  };

  return (
    <div className="flex max-w-[900px]">
      <form
        onSubmit={handleSubmit}
        className="h-[50vh] w-full  bg-white/75 rounded-xl shadow-black shadow-2xl  md:grid md:grid-cols-2 flex flex-col justify-between self-center"
      >
        <div className="flex flex-col h-1/2 md:h-full ">
          <h3 className="absolute text-blue-600 font-bold p-4 text-3xl">
            Telefono
          </h3>
          <div className="flex h-full p-2 ">
            <div className="h-full flex self-center gap-4">
              <input
                type="text"
                placeholder="Numero"
                onChange={(e) => setForm(e.target.value)}
                className="px-5 mx-4 w-40 h-1/4 self-center sm:h-14 sm:self-center text-blue-700 font-bold font-mono rounded-md border-blue-500 focus:ring-indigo-600"
              ></input>
              <button className="m-4 h-14 px-6 self-center rounded-lg border border-blue-300 text-white bg-blue-800">
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="h-1/2 md:h-full rounded-e-xl shadow-lg shadow-black bg-blue-700 flex flex-col p-4">
          {/* <div className=" p-4 h-full flex flex-col gap-4"> */}
          <h3 className="absolute text-white font-bold text-3xl">Serie</h3>
          <div className="h-full flex flex-col justify-center gap-4">
            <div className="flex justify-center align-middle gap-4">
              <p className="self-center w-1/4 font-semibold">Serie</p>
              <input
                type="number"
                disabled
                placeholder="Serie"
                value={responceInfo && responceInfo[0]["Numero de serie"]}
                className="self-center p-2 w-2/4 font-mono rounded-md "
              ></input>
            </div>
            <div className="flex justify-center gap-4 align-middle">
              <p className="self-center w-1/4 font-semibold">Proveedor</p>
              <input
                type="text"
                disabled
                placeholder="Proveedor"
                value={responceInfo && responceInfo[0]["Proveedor celular"]}
                className="self-center p-2 w-2/4 font-mono rounded-md"
              ></input>
            </div>
          </div>
          {/* </div> */}
        </div>
      </form>
      <button
        className="relative text-blue-700 md:text-white bottom-48 right-12"
        onClick={() => click((mode) => (mode = false))}
      >
        <IconChange />
      </button>
    </div>
  );
};

export default Numbers;
