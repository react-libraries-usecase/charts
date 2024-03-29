import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { energyConsumption as data } from './../data-virtualization';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row'
  }
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap'
  }
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(
  legendLabelBase
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={2400} />

          <BarSeries
            name="Hydro-electric"
            valueField="hydro"
            argumentField="country"
          />
          <BarSeries name="Oil" valueField="oil" argumentField="country" />
          <BarSeries
            name="Natural gas"
            valueField="gas"
            argumentField="country"
          />
          <BarSeries name="Coal" valueField="coal" argumentField="country" />
          <BarSeries
            name="Nuclear"
            valueField="nuclear"
            argumentField="country"
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          />
          <Title text="Energy Consumption in 2004 (Millions of Tons, Oil Equivalent)" />
          <Stack
            stacks={[
              {
                series: [
                  'Hydro-electric',
                  'Oil',
                  'Natural gas',
                  'Coal',
                  'Nuclear'
                ]
              }
            ]}
          />
        </Chart>
      </Paper>
    );
  }
}
