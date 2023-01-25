import React, { useState, useEffect } from "react";
import { useData } from "./useData";
import { LineChart } from "./LineChart";

const width = window.innerWidth;
const height = window.innerHeight;

export const CoronavirusLineChart = () => {
  const data = useData();
  return data ? (
    <LineChart data={data} width={width} height={height} />
  ) : (
    <div>Loading...</div>
  );
};
