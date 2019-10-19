import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentScale,
  ValueScale,
  EventTracker,
  HoverState,
  Animation
} from '@devexpress/dx-react-chart';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  ScatterSeries,
  Tooltip,
  ZoomAndPan,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { format } from 'd3-format';

import { lifeBirth } from './../life-birth';

const groupingField = 'country';
const seriesField = 'year';
const argField = 'birthRate';
const valField = 'lifeExp';
const argLabel = 'Birth Rate';
const valLabel = 'Life Expectancy';

const getArgField = name => `${argField}_${name}`;
const getValField = name => `${valField}_${name}`;

const groupData = source => {
  const items = [];
  const mapping = {};
  const seriesList = new Set();
  source.forEach(raw => {
    const key = raw[groupingField];
    let item = mapping[key];
    if (!item) {
      item = { [groupingField]: key };
      items.push(item);
      mapping[key] = item;
    }
    const series = raw[seriesField];
    seriesList.add(series);
    item[getArgField(series)] = raw[argField];
    item[getValField(series)] = raw[valField];
  });
  return { data: items, seriesNames: Array.from(seriesList) };
};

const { data, seriesNames } = groupData(lifeBirth);
const series = seriesNames.map(name => (
  <ScatterSeries
    key={name}
    name={name}
    argumentField={getArgField(name)}
    valueField={getValField(name)}
  />
));

const adjustDomain = ([start, end]) => [Math.floor(start), Math.ceil(end)];

const formatTooltipValue = format('.2f');

const tooltipLabelCellStyle = {
  style: {
    opacity: 0.6,
    paddingTop: 0,
    paddingBottom: 0
  }
};
const TooltipLabelCell = withStyles(tooltipLabelCellStyle)(
  ({ classes, className, ...props }) => (
    <Typography className={classNames(classes.style, className)} {...props} />
  )
);
const tooltipValueCellStyle = {
  style: {
    paddingTop: 0,
    paddingBottom: 0
  }
};
const TooltipValueCell = withStyles(tooltipValueCellStyle)(
  ({ classes, className, ...props }) => (
    <Typography className={classNames(classes.style, className)} {...props} />
  )
);
const tooltipSplitterStyle = theme => ({
  style: {
    opacity: 0.6,
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5)
  }
});
const TooltipSplitter = withStyles(tooltipSplitterStyle)(
  ({ classes, className, ...props }) => (
    <hr className={classNames(classes.style, className)} {...props} />
  )
);
const tooltipHeaderStyle = theme => ({
  style: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 500
  }
});
const TooltipHeader = withStyles(tooltipHeaderStyle)(
  ({ classes, className, ...props }) => (
    <Typography className={classNames(classes.style, className)} {...props} />
  )
);

const ResetButton = withStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}))(({ classes, ...props }) => (
  <Button
    variant="outlined"
    color="primary"
    className={classes.button}
    {...props}
  >
    Reset
  </Button>
));

const TooltipContent = ({ targetItem }) => {
  const item = data[targetItem.point];
  const arg = formatTooltipValue(item[getArgField(targetItem.series)]);
  const val = formatTooltipValue(item[getValField(targetItem.series)]);
  return (
    <div>
      <TooltipHeader>{`${item.country} ${targetItem.series}`}</TooltipHeader>
      <TooltipSplitter />
      <table>
        <tbody>
          <tr>
            <td>
              <TooltipLabelCell>{argLabel}</TooltipLabelCell>
            </td>
            <td>
              <TooltipValueCell>{arg}</TooltipValueCell>
            </td>
          </tr>
          <tr>
            <td>
              <TooltipLabelCell>{valLabel}</TooltipLabelCell>
            </td>
            <td>
              <TooltipValueCell>{val}</TooltipValueCell>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      viewport: null
    };
    this.changeViewport = viewport => this.setState({ viewport });
    this.resetViewport = () => this.setState({ viewport: null });
  }

  render() {
    const { data: chartData, viewport } = this.state;
    return (
      <>
        <ResetButton onClick={this.resetViewport} />
        <Paper>
          <Chart data={chartData}>
            <ArgumentScale modifyDomain={adjustDomain} />
            <ValueScale modifyDomain={adjustDomain} />
            <ArgumentAxis />
            <ValueAxis />

            {series}

            <EventTracker />
            <HoverState />
            <Tooltip contentComponent={TooltipContent} />

            <ZoomAndPan
              viewport={viewport}
              onViewportChange={this.changeViewport}
              interactionWithValues="both"
            />
            <Title text={`${valLabel} vs. ${argLabel}`} />
            <Legend />
            <Animation />
          </Chart>
        </Paper>
      </>
    );
  }
}
