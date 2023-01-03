export const AxisLeft = ({ yScale, innerWidth }) =>
  yScale.domain().map((tickValue) => (
    <g className="tick">
      <line x2={innerWidth} />
      <text
        key={tickValue}
        style={{ textAnchor: "end" }}
        x={-3}
        dy="0.32em"
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    </g>
  ));
