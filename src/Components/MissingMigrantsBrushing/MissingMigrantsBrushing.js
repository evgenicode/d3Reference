import React, { useState, useCallback, useEffect } from "react";
import { useWorldAtlas } from "./useWorldAtlas";
import { useData } from "./useData";

import { BubbleMap } from "./BubbleMap/BubbleMap";
import { DateHistogram } from "./DateHistogram/DateHistogram";

const width = 960;
const height = 500;
const dateHistogramSize = 0.2;

const xValue = (d) => d["Reported Date"];

export const MissingMigrantsBrushing = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();
  const [brushExtent, setBrushExtent] = useState();

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  const filteredData = brushExtent
    ? data.filter((d) => {
        const date = xValue(d);
        return date > brushExtent[0] && date < brushExtent[1];
      })
    : data;

  return (
    <svg width={width} height={height}>
      <BubbleMap data={filteredData} worldAtlas={worldAtlas} />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
          setBrushExtent={setBrushExtent}
          xValue={xValue}
        />
      </g>
    </svg>
  );
};
