import React, { useState, useCallback } from "react";
import { MouseCircle } from "./Components/MouseCircle.js";
import { CSSData } from "./Components/CSSData.js";
import { HelloVegaLite } from "./Components/HelloVegaLite.js";
import { WorldPopulation } from "./Components/PopulationBarchart/WorldPopulation.js";

function App() {
  return (
    <div className="App">
      <WorldPopulation />
      {/* <CSSData /> */}
      {/* <HelloVegaLite /> */}
      {/* <MouseCircle /> */}
    </div>
  );
}

export default App;
