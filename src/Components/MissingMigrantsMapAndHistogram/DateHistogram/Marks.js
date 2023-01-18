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
