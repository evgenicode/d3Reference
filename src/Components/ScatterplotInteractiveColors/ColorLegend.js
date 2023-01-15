export const ColorLegend = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 7,
  tickTextOffset = 20,
  onHover,
  hoveredValue,
  fadeOpacity,
}) =>
  colorScale.domain().map((domainValue, index) => (
    <g
      className="tick"
      transform={`translate(0,${index * tickSpacing})`}
      onMouseEnter={() => {
        onHover(domainValue);
      }}
      onMouseOut={() => {
        onHover(null);
      }}
      opacity={hoveredValue && domainValue !== hoveredValue ? fadeOpacity : 1}
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy="0.32em">
        {domainValue}
      </text>
    </g>
  ));
