import axios from "axios";
import React, { useState } from "react";
import Serials from "./Serials";
// import { fa } from "@faker-js/faker";
import Numbers from "./Numbers";
// import Background from "./../img/Background.jpg";

// import "../assets/Background.jpeg";

const URLBackgroundImg =
  "https://images.unsplash.com/photo-1604856420566-576ba98b53cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const MODES = {
  serial: "serial",
  number: "number",
};

const Index = () => {
  const [mode, setMode] = useState(true);

  return (
    <div className={`flex`}>
      {/* <button type="button" onClick={() => setMode(!mode)}>
        {mode ? "serial" : "number"}
      </button> */}
      {/* <img src={Background} /> */}
      {mode ? (
        <Numbers click={setMode} />
      ) : (
        <Serials isSerial={mode} click={setMode} />
      )}
    </div>
  );
};

export default Index;
