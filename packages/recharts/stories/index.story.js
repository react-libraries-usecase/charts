import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

// import notes with promise
import NotePromise from './../notes/Basic';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import SimpleAreaChart from "../src/AreaChart/SimpleAreaChart";
import StackedAreaChart from "../src/AreaChart/StackedAreaChart";
import TinyAreaChart from "../src/AreaChart/TinyAreaChart";
import PercentAreaChart from "../src/AreaChart/PercentAreaChart";
import CardinalAreaChart from "../src/AreaChart/CardinalAreaChart";
import AreaChartConnectNulls from "../src/AreaChart/AreaChartConnectNulls";
import SynchronizedAreaChart from "../src/AreaChart/SynchronizedAreaChart";
import AreaChartFillByValue from "../src/AreaChart/AreaChartFillByValue";
import LineBarAreaComposedChart from "../src/ComposedChart/LineBarAreaComposedChart";
import SameDataComposedChart from "../src/ComposedChart/SameDataComposedChart";
import VerticalComposedChart from "../src/ComposedChart/VerticalComposedChart";
import ComposedChartWithAxisLabels from "../src/ComposedChart/ComposedChartWithAxisLabels";
import SimpleScatterChart from "../src/ScatterChart/SimpleScatterChart";
import ThreeDimScatterChart from "../src/ScatterChart/ThreeDimScatterChart";
import JointLineScatterChart from "../src/ScatterChart/JointLineScatterChart";
import BubbleChart from "../src/ScatterChart/BubbleChart";
import ScatterChartWithLabels from "../src/ScatterChart/ScatterChartWithLabels";
import MultipleYAxesScatterChart from "../src/ScatterChart/MultipleYAxesScatterChart";
import ScatterChartWithCells from "../src/ScatterChart/ScatterChartWithCells";
import TwoLevelPieChart from "../src/PieChart/TwoLevelPieChart";
import StraightAnglePieChart from "../src/PieChart/StraightAnglePieChart";
import TwoSimplePieChart from "../src/PieChart/TwoSimplePieChart";
import CustomActiveShapePieChart from "../src/PieChart/CustomActiveShapePieChart";
import PieChartWithCustomizedLabel from "../src/PieChart/PieChartWithCustomizedLabel";
import PieChartWithPaddingAngle from "../src/PieChart/PieChartWithPaddingAngle";
import AreaResponsiveContainer from "../src/ResponsiveContainer/AreaResponsiveContainer";
import ComposedResponsiveContainer from "../src/ResponsiveContainer/ComposedResponsiveContainer";
import PieResponsiveContainer from "../src/ResponsiveContainer/PieResponsiveContainer";

// wait for notes promise then show story
NotePromise.then(notes =>
  storiesOf('Recharts', module)
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    //
    // .add('with a button', () => (
    //   <button disabled={boolean('Disabled', false)} >
    //     {text('Label', 'Hello Storybook')}
    //   </button>
    // ))

    // LINE
    .add(
      'LineChart/Simple',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/Simple'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/Tiny',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/Tiny'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/Dashed',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/Dashed'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/Vertical',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/Vertical'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/Biaxial',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/Biaxial'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/VerticalWithDomain',
      () => {
        const Basic = lazy(() =>
          import('./../src/LineChart/VerticalWithDomain')
        );
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/LineChartConnectedNull',
      () => {
        const Basic = lazy(() =>
          import('./../src/LineChart/LineChartConnectedNull')
        );
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/xAxisPadding',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/xAxisPadding'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/ReferenceLine',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/ReferenceLine'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/CustomDotLine',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/CustomDotLine'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/CustomLabel',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/CustomLabel'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/SyncedCharts',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/SyncedCharts'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/HighlightAndZoom',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/HighlightAndZoom'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/MultiSeries',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/MultiSeries'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/AxisInterval',
      () => {
        const Basic = lazy(() => import('./../src/LineChart/AxisInterval'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

    // AREA
    .add(
      'AreaChart/SimpleAreaChart',
      () => {
        const Basic = lazy(() => import('./../src/AreaChart/SimpleAreaChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'AreaChart/StackedAreaChart',
      () => {
        const Basic = lazy(() => import('./../src/AreaChart/StackedAreaChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'AreaChart/TinyAreaChart',
      () => {
        const Basic = lazy(() => import('./../src/AreaChart/TinyAreaChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'AreaChart/PercentAreaChart',
      () => {
        const Basic = lazy(() => import('./../src/AreaChart/PercentAreaChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'AreaChart/AreaChartConnectNulls',
      () => {
        const Basic = lazy(() => import('./../src/AreaChart/AreaChartConnectNulls'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'AreaChart/SynchronizedAreaChart',
      () => {
        const Basic = lazy(() => import('./../src/AreaChart/SynchronizedAreaChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'AreaChart/AreaChartFillByValue',
      () => {
        const Basic = lazy(() => import('./../src/AreaChart/AreaChartFillByValue'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )


    // BAR CHARTS
    .add(
      'BarChart/TinyBarChart',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/TinyBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/SimpleBarChart',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/SimpleBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/StackedBarChart',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/StackedBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/MixBarChart',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/MixBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/CustomShapeBarChart',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/CustomShapeBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/PositiveAndNegativeBarChart',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/PositiveAndNegativeBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/BrushBarChart',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/BrushBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/BarChartWithCustomizedEvent',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/BarChartWithCustomizedEvent'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/BarChartWithMinHeight',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/BarChartWithMinHeight'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/BarChartStackedBySign',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/BarChartStackedBySign'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/BiaxialBarChart',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/BiaxialBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/BarChartHasBackground',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/BarChartHasBackground'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarChart/BarChartWithMultiXAxis',
      () => {
        const Basic = lazy(() => import('./../src/BarChart/BarChartWithMultiXAxis'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

//  COMPOSED
    .add(
      'ComposedChart/LineBarAreaComposedChart',
      () => {
        const Basic = lazy(() => import('./../src/ComposedChart/LineBarAreaComposedChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ComposedChart/SameDataComposedChart',
      () => {
        const Basic = lazy(() => import('./../src/ComposedChart/SameDataComposedChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ComposedChart/VerticalComposedChart',
      () => {
        const Basic = lazy(() => import('./../src/ComposedChart/VerticalComposedChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ComposedChart/ComposedChartWithAxisLabels',
      () => {
        const Basic = lazy(() => import('./../src/ComposedChart/ComposedChartWithAxisLabels'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

//  SCATTER
    .add(
      'ScatterChart/SimpleScatterChart',
      () => {
        const Basic = lazy(() => import('./../src/ScatterChart/SimpleScatterChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ScatterChart/ThreeDimScatterChart',
      () => {
        const Basic = lazy(() => import('./../src/ScatterChart/ThreeDimScatterChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ScatterChart/JointLineScatterChart',
      () => {
        const Basic = lazy(() => import('./../src/ScatterChart/JointLineScatterChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ScatterChart/BubbleChart',
      () => {
        const Basic = lazy(() => import('./../src/ScatterChart/BubbleChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ScatterChart/ScatterChartWithLabels',
      () => {
        const Basic = lazy(() => import('./../src/ScatterChart/ScatterChartWithLabels'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ScatterChart/MultipleYAxesScatterChart',
      () => {
        const Basic = lazy(() => import('./../src/ScatterChart/MultipleYAxesScatterChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ScatterChart/ScatterChartWithCells',
      () => {
        const Basic = lazy(() => import('./../src/ScatterChart/ScatterChartWithCells'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

// PIE
    .add(
      'PieChart/TwoLevelPieChart',
      () => {
        const Basic = lazy(() => import('./../src/PieChart/TwoLevelPieChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'PieChart/StraightAnglePieChart',
      () => {
        const Basic = lazy(() => import('./../src/PieChart/StraightAnglePieChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'PieChart/TwoSimplePieChart',
      () => {
        const Basic = lazy(() => import('./../src/PieChart/TwoSimplePieChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'PieChart/CustomActiveShapePieChart',
      () => {
        const Basic = lazy(() => import('./../src/PieChart/CustomActiveShapePieChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'PieChart/PieChartWithCustomizedLabel',
      () => {
        const Basic = lazy(() => import('./../src/PieChart/PieChartWithCustomizedLabel'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'PieChart/PieChartWithPaddingAngle',
      () => {
        const Basic = lazy(() => import('./../src/PieChart/PieChartWithPaddingAngle'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

// RADAR
    .add(
      'RadarChart/SimpleRadarChart',
      () => {
        const Basic = lazy(() => import('./../src/RadarChart/SimpleRadarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'RadarChart/SpecifiedDomainRadarChart',
      () => {
        const Basic = lazy(() => import('./../src/RadarChart/SpecifiedDomainRadarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

//  RADIAL BAR
    .add(
      'RadialBarChart/SimpleRadialBarChart',
      () => {
        const Basic = lazy(() => import('./../src/RadialBarChart/SimpleRadialBarChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

//  TREEMAP
    .add(
      'TreeMap/SimpleTreemap',
      () => {
        const Basic = lazy(() => import('./../src/TreeMap/SimpleTreemap'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'TreeMap/CustomContentTreemap',
      () => {
        const Basic = lazy(() => import('./../src/TreeMap/CustomContentTreemap'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

//  Tooltip
    .add(
      'Tooltip/CustomContentOfTooltip',
      () => {
        const Basic = lazy(() => import('./../src/Tooltip/CustomContentOfTooltip'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

//  LEGEND
    .add(
      'Legend/LegendEffectOpacity',
      () => {
        const Basic = lazy(() => import('./../src/Legend/LegendEffectOpacity'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

//  RESPONSIVE CONTAINER
    .add(
      'ResponsiveContainer/AreaResponsiveContainer',
      () => {
        const Basic = lazy(() => import('./../src/ResponsiveContainer/AreaResponsiveContainer'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ResponsiveContainer/ComposedResponsiveContainer',
      () => {
        const Basic = lazy(() => import('./../src/ResponsiveContainer/ComposedResponsiveContainer'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'ResponsiveContainer/PieResponsiveContainer',
      () => {
        const Basic = lazy(() => import('./../src/ResponsiveContainer/PieResponsiveContainer'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

);
