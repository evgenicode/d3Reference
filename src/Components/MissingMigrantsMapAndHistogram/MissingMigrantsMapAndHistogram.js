import React, { useState, useCallback, useEffect } from "react";
import { useWorldAtlas } from "./useWorldAtlas";
import { useData } from "./useData";

import { BubbleMap } from "./BubbleMap";
import { DateHistogram } from "./DateHistogram";

const width = 960;
const height = 500;

export const MissingMigrantsMapAndHistogram = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <BubbleMap data={data} worldAtlas={worldAtlas} />
      <DateHistogram data={data} />
    </svg>
  );
};
