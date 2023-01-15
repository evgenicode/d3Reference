export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
  colorScale,
  colorValue,
}) =>
  data.map((d) => (
    <circle
      className="markColorScale"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
      fill={colorScale(colorValue(d))}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
