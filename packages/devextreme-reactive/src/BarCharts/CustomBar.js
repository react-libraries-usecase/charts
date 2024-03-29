import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const imageSize = 50;
const labelOffset = 10;

const owner = 'facebook';
const repository = 'react';

const getPath = (x, width, y, y1) => `M ${x} ${y1}
   L ${width + x} ${y1}
   L ${width + x} ${y + 30}
   L ${x + width / 2} ${y}
   L ${x} ${y + 30}
   Z`;

const labelStyle = { fill: '#BBDEFB' };

const BarWithLabel = ({
  arg,
  barWidth,
  maxBarWidth,
  val,
  startVal,
  color,
  value,
  style
}) => {
  const width = maxBarWidth * barWidth;
  return (
    <>
      <path
        d={getPath(arg - width / 2, width, val, startVal)}
        fill={color}
        style={style}
      />
      <Chart.Label
        x={arg}
        y={(val + startVal) / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        style={labelStyle}
      >
        {value}
      </Chart.Label>
    </>
  );
};

const Grid = props => <ValueAxis.Grid {...props} strokeDasharray="10 5" />;

const makeAxisLabel = data => {
  const loginToAvatar = new Map();
  data.forEach(({ login, avatar_url: url }) => {
    loginToAvatar.set(login, url);
  });
  return props => {
    const { text, x, y } = props;
    // Though "xlinkHref" is deprecated it is used because Safari does not support "href".
    return (
      <>
        <image
          xlinkHref={loginToAvatar.get(text)}
          width={imageSize}
          height={imageSize}
          transform={`translate(${x - imageSize / 2} ${y - labelOffset})`}
        />
        <ArgumentAxis.Label {...props} y={y + imageSize} />
      </>
    );
  };
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  getData() {
    const { data: dataState } = this.state;
    if (!dataState) {
      fetch(`https://api.github.com/repos/${owner}/${repository}/contributors`)
        .then(response => response.json())
        .then(data => {
          const slice = data.slice(0, 8);
          this.setState({
            data: slice,
            AxisLabel: makeAxisLabel(slice)
          });
        })
        .catch(() => this.setState({ data: false }));
    }
  }

  render() {
    const { data: chartData, AxisLabel } = this.state;

    return (
      <Paper>
        {chartData ? (
          <Chart data={chartData}>
            <ArgumentAxis labelComponent={AxisLabel} showTick={false} />
            <ValueAxis gridComponent={Grid} />

            <BarSeries
              name="Contributions"
              valueField="contributions"
              argumentField="login"
              pointComponent={BarWithLabel}
            />
            <Title
              text={`Contributions commits to master ${owner}/${repository} repository`}
            />
            <Animation />
          </Chart>
        ) : (
          <h1>No data</h1>
        )}
      </Paper>
    );
  }
}
