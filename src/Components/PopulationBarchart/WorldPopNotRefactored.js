import React, { useState, useCallback, useEffect } from "react";
import * as d3 from "d3";
import { csv, arc, pie, scaleBand, scaleLinear, max } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";
const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };

export const WorldPopulation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = parseFloat(d["2020"]); // d.Population = +d["2020"];
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  console.log(xScale.ticks());

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {xScale.ticks().map((tickValue) => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
            <line y2={innerHeight} stroke="black" />
            {/*since default is 0 the line above is same as <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="black" /> */}
            <text
              style={{ textAnchor: "middle" }}
              dy="0.71em"
              y={innerHeight + 3}
            >
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map((tickValue) => (
          <text
            key={tickValue}
            style={{ textAnchor: "end" }}
            x={-3}
            dy="0.32em"
            y={yScale(tickValue) + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        ))}
        {data.map((d) => (
          <rect
            key={d.Country}
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  );
};
