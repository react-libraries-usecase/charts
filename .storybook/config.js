  import {addDecorator, configure,storiesOf} from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withKnobs } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'


import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light',

  brandTitle: 'Charts storybook',
  brandUrl: 'https://google.com',
  brandImage: 'https://placehold.it/350x150',
});

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    theme: customTheme,
  },
});

const req = require.context('../packages', true, /.story.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}


addDecorator(withKnobs);
addDecorator(withSmartKnobs);

configure(loadStories, module);
