import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import CenterView from '../../CenterView';
import images from '../../../../assets/images';
import SideButton from '.';
import { LARGE, SMALL } from '../../../constants/views/buttonSizes';

const sizes = [LARGE, SMALL];

storiesOf('Elements', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Side Button', () => (
    <View>
      <SideButton
        disabled={boolean('disabled', false)}
        isActive={boolean('isActive', true)}
        icon={images.orders}
        text={text('Button Title', 'Orders')}
        size={select('size', sizes, LARGE)}
        onPress={() => console.log('pressed')} // eslint-disable-line no-console
      />
    </View>
  ));
