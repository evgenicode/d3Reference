import React, { useState, useCallback, useEffect } from "react";
import * as d3 from "d3";
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

  return (
    <svg width={width} height={height}>
      <Marks worldAtlas={worldAtlas} cities={cities} />
    </svg>
  );
};
