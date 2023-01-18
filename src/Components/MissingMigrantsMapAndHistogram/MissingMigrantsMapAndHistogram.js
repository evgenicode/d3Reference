import React, { useState, useCallback, useEffect } from "react";
import { useWorldAtlas } from "./useWorldAtlas";
import { useData } from "./useData";

import { BubbleMap } from "./BubbleMap/BubbleMap";
import { DateHistogram } from "./DateHistogram/DateHistogram";

const width = 960;
const height = 500;
const dateHistogramSize = 0.2;

export const MissingMigrantsMapAndHistogram = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <BubbleMap data={data} worldAtlas={worldAtlas} />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
        />
      </g>
    </svg>
  );
};
