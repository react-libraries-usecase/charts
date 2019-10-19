import {addDecorator, configure,storiesOf} from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withKnobs } from '@storybook/addon-knobs'
// import { withSmartKnobs } from 'storybook-addon-smart-knobs'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

const req = require.context('../packages', true, /.story.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

// addDecorator(withInfo);

// addDecorator(withSmartKnobs);
addDecorator(withKnobs);

configure(loadStories, module);
