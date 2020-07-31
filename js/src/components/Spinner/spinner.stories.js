import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import images from '../../../assets/images';
import Spinner from '.';

storiesOf('Elements', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Spinner', () => (
    <Spinner image={images.loading2} />
  ));
