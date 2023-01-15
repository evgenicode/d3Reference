export const ColorLegend = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 7,
  tickTextOffset = 20,
}) =>
  colorScale.domain().map((domainValue, index) => (
    <g className="tick" transform={`translate(0,${index * tickSpacing})`}>
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy="0.32em">
        {domainValue}
      </text>
    </g>
  ));
