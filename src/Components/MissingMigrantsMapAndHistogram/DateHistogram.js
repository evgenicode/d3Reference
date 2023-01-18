import {
  scaleLinear,
  scaleTime,
  max,
  timeFormat,
  extent,
  bin,
  timeMonths,
  sum,
} from "d3";

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };

export const Marks = ({
  binnedData,
  xScale,
  yScale,

  tooltipFormat,
  innerHeight,
}) =>
  binnedData.map((d) => (
    <rect
      className="mark"
      x={xScale(d.x0)}
      y={yScale(d.totalDeadAndMissing)}
      width={xScale(d.x1) - xScale(d.x0)}
      height={innerHeight - yScale(d.totalDeadAndMissing)}
    >
      <title>{tooltipFormat(d.totalDeadAndMissing)}</title>
    </rect>
  ));

export const DateHistogram = ({ data }) => {
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
    <g transform={`translate(${margin.left},${margin.top})`}>
      <Marks
        binnedData={binnedData}
        xScale={xScale}
        yScale={yScale}
        tooltipFormat={(d) => d}
        circleRadius={2}
        innerHeight={innerHeight}
      />
    </g>
  );
};
