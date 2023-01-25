import React from "react";
import { scaleTime, extent, scaleLinear, max, line } from "d3";

const xValue = (d) => d.date;
const yValue = (d) => d.deathTotal;

export const LineChart = ({ data, width, height }) => {
  const xScale = scaleTime()
    .domain(extent(data, (d) => d.date))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain([0, max(data, (d) => d.deathTotal)])
    .range([height, 0]);

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)));

  console.log(yScale.domain());

  return (
    <svg width={width} height={height}>
      <path className="LinechartPath" d={lineGenerator(data)} />
    </svg>
  );
};
