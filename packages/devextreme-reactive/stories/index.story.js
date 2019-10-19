import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

// import notes with promise
import NotePromise from './../notes/Basic';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

// wait for notes promise then show story
NotePromise.then(notes =>
  storiesOf('Devextreme', module)
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    //
    // .add('with a button', () => (
    //   <button disabled={boolean('Disabled', false)} >
    //     {text('Label', 'Hello Storybook')}
    //   </button>
    // ))

    .add(
      'AreaCharts/SimpleArea',
      () => {
        const Basic = lazy(() => import('./../src/AreaCharts/SimpleArea'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

    .add(
      'AreaCharts/SplineArea',
      () => {
        const Basic = lazy(() => import('./../src/AreaCharts/SplineArea'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

    .add(
      'AreaCharts/StackedArea',
      () => {
        const Basic = lazy(() => import('./../src/AreaCharts/StackedArea'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'AreaCharts/StepArea',
      () => {
        const Basic = lazy(() => import('./../src/AreaCharts/StepArea'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'AreaCharts/StreamGraph',
      () => {
        const Basic = lazy(() => import('./../src/AreaCharts/StreamGraph'));
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
      'BarCharts/Simple',
      () => {
        const Basic = lazy(() => import('./../src/BarCharts/SimpleBar'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarCharts/SideBySide',
      () => {
        const Basic = lazy(() => import('./../src/BarCharts/SideBySide'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarCharts/SideBySideStacked',
      () => {
        const Basic = lazy(() => import('./../src/BarCharts/SideBySideStacked'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarCharts/Stacked',
      () => {
        const Basic = lazy(() => import('./../src/BarCharts/StackedBar'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarCharts/FullStacked',
      () => {
        const Basic = lazy(() => import('./../src/BarCharts/FullStacked'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarCharts/Custom',
      () => {
        const Basic = lazy(() => import('./../src/BarCharts/CustomBar'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarCharts/SeriesInteraction',
      () => {
        const Basic = lazy(() => import('./../src/BarCharts/SeriesInteraction'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'BarCharts/Rotated',
      () => {
        const Basic = lazy(() => import('./../src/BarCharts/RotatedBar'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

    // LINE CHARTS
    .add(
      'LineChart/Simple',
      () => {
        const Basic = lazy(() => import('./../src/LineCharts/Simple'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/Spline',
      () => {
        const Basic = lazy(() => import('./../src/LineCharts/Spline'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'LineChart/StepLine',
      () => {
        const Basic = lazy(() => import('./../src/LineCharts/StepLine'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

    // POINT CHARTS
    .add(
      'PointCharts/Simple',
      () => {
        const Basic = lazy(() => import('./../src/PointCharts/Simple'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )

    // PIE CHARTS
    .add(
      'PieCharts/Pie',
      () => {
        const Basic = lazy(() => import('./../src/PieCharts/Pie'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'PieCharts/Doughnut',
      () => {
        const Basic = lazy(() => import('./../src/PieCharts/Doughnut'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )


    // ADVANCED
    .add(
      'Advanced/Zoom',
      () => {
        const Basic = lazy(() => import('./../src/Advanced/Zoom'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
    .add(
      'Advanced/Export',
      () => {
        const Basic = lazy(() => import('./../src/Advanced/Export'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
);
