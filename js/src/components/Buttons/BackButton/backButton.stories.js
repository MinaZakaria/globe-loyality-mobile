import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../../CenterView';
import BackButton from './';

const onPress = () => { };
storiesOf('Elements', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Back Button', () => (
    <BackButton
      onPress={onPress}
    />
  ));
