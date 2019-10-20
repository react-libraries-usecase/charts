import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

// import notes with promise
import NotePromise from './../notes/Basic';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

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
        const Basic = lazy(() => import('./../src/LineChart/VerticalWithDomain'));
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
        const Basic = lazy(() => import('./../src/LineChart/LineChartConnectedNull'));
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



    .add(
      'Basic',
      () => {
        const Basic = lazy(() => import('./../src/AreaChart'));
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Basic />
          </Suspense>
        );
      },
      { notes }
    )
);
