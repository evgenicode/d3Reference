import React, { useState, useCallback } from "react";
import { MouseCircle } from "./Components/MouseCircle.js";
import { CSSData } from "./Components/CSSData.js";
import { WorldPopulation } from "./Components/PopulationBarchart/WorldPopulation";
import { IrisScatterplot } from "./Components/ScatterplotIris/IrisScatterplot";
import { Linechart } from "./Components/Linechart/Linechart.js";
import { WorldMap } from "./Components/WorldMap/WorldMap.js";
import { Select } from "./Components/SelectComponents/Select.js";
import { ScatterplotMenus } from "./Components/ScatterplotMenus/ScatterplotMenus.js";
import { ScatterplotColors } from "./Components/ScatterplotColors/ScatterplotColors.js";
import { ScatterplotInteractiveColors } from "./Components/ScatterplotInteractiveColors/ScatterplotInteractiveColors.js";
import { WorldMapCities } from "./Components/WorldMapCities/WorldMapCities.js";
import { MissingMigrants } from "./Components/MissingMigrants/MissingMigrants.js";
import { MissingMigrantsMap } from "./Components/MissingMigrantsMap/MissingMigrantsMap.js";

function App() {
  return (
    <div className="App">
      <MissingMigrantsMap />
      <MissingMigrants />
      <WorldMapCities />
      <ScatterplotInteractiveColors />
      <ScatterplotColors />
      <ScatterplotMenus />

      <WorldMap />
      <Linechart />
      <WorldPopulation />
      <IrisScatterplot />
      {/* <Select /> */}
      {/* <CSSData /> */}
      {/* <HelloVegaLite /> */}
      {/* <MouseCircle /> */}
    </div>
  );
}

export default App;
