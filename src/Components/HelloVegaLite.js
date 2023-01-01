import React from "react";
import VegaLite from "react-vega-lite";
import data from "../Data/acousticData";

const spec = {
  desription: "Acoustic data",
  mark: "line",
  encoding: {
    x: { field: "time", type: "temporal", timeUnit: "milliseconds" },
    y: { field: "radians", type: "quantitative" },
  },
};

export const HelloVegaLite = () => {
  return <VegaLite spec={spec} data={{ values: data }} />;
};
