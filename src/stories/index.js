import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Sidebar from '../components/sidebar';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Sidebar', module)
  .add('with text', () => <Sidebar onClick={action('clicked')}>Hello Sidebar</Sidebar>);
