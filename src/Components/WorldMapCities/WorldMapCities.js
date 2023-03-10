import React, { useState, useCallback, useEffect } from "react";
import { scaleSqrt, max } from "d3";
//import {  } from "d3";
import { useWorldAtlas } from "./useWorldAtlas";
import { useCities } from "./useCities";
import { Marks } from "./Marks";

const width = 960;
const height = 500;

export const WorldMapCities = () => {
  const worldAtlas = useWorldAtlas();
  const cities = useCities();

  if (!worldAtlas || !cities) {
    return <pre>Loading...</pre>;
  }

  const sizeValue = (d) => d.population;
  const maxRadius = 10;

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius]);

  return (
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        cities={cities}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
};
