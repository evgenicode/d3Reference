import React, { useState, useCallback, useEffect } from "react";
import { scaleSqrt, max } from "d3";
//import {  } from "d3";
import { useWorldAtlas } from "./useWorldAtlas";
import { useData } from "./useData";
import { Marks } from "./Marks";

const width = 960;
const height = 500;

export const MissingMigrantsMap = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  const sizeValue = (d) => d["Total Dead and Missing"];
  const maxRadius = 10;

  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)])
    .range([0, maxRadius]);

  return (
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        data={data}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
};
