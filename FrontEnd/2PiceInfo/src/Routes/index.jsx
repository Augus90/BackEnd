import axios from "axios";
import React, { useState } from "react";
import Serials from "./Serials";
// import { fa } from "@faker-js/faker";
import Numbers from "./Numbers";

const MODES = {
  serial: "serial",
  number: "number",
};

const Index = () => {
  const [mode, setMode] = useState(true);

  return (
    <div className="flex ">
      {/* <button type="button" onClick={() => setMode(!mode)}>
        {mode ? "serial" : "number"}
      </button> */}
      {mode ? (
        <Numbers click={setMode} />
      ) : (
        <Serials isSerial={mode} click={setMode} />
      )}
    </div>
  );
};

export default Index;
