export const AxisBottom = ({
  xScale,
  innerHeight,
  tickFormat,
  tickOffset = 3,
}) =>
  xScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)}, 0)`}
    >
      <line y2={innerHeight} />
      {/*since default is 0 the line above is same as <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="black" /> */}
      <text
        style={{ textAnchor: "middle" }}
        dy="0.71em"
        y={innerHeight + tickOffset}
      >
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
