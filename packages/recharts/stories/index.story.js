import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

// import notes with promise
import NotePromise from './../notes/Basic';
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
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

