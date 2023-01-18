import React, { useState, useCallback, useEffect } from "react";
import {
  csv,
  scaleLinear,
  scaleTime,
  max,
  timeFormat,
  extent,
  bin,
  timeMonths,
  sum,
} from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

export const MissingMigrants = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d["Reported Date"];
  const xAxisLabel = "Time";

  const yValue = (d) => d["Total Dead and Missing"];
  const yAxisLabel = "Total Dead and Missing";

  const xAxisTickFormat = timeFormat("%m/%d/%Y");

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const [binStart, binStop] = xScale.domain();

  const binnedData = bin()
    .value(xValue)
    .domain(xScale.domain())
    .thresholds(timeMonths(binStart, binStop))(data)
    .map((array) => ({
      totalDeadAndMissing: sum(array, yValue),
      x0: array.x0,
      x1: array.x1,
    }));

  const yScale = scaleLinear()
    .domain([0, max(binnedData, (d) => d.totalDeadAndMissing)])
    .range([innerHeight, 0]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          binnedData={binnedData}
          xScale={xScale}
          yScale={yScale}
          tooltipFormat={(d) => d}
          circleRadius={2}
          innerHeight={innerHeight}
        />
      </g>
    </svg>
  );
};
