import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

// import notes with promise
import NotePromise from './../notes/Basic';

// wait for notes promise then show story
NotePromise.then(notes =>
  storiesOf('Recharts', module).add(
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
