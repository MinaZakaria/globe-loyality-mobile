import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import CenterView from '../../CenterView';
import images from '../../../../assets/images';
import GeneralButton from './';

const icons = [images.print, null];
const onPress = () => { };
storiesOf('Elements', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('General Button', () => (
    <View style={styles.container}>
      <GeneralButton
        title={text('Title', 'Print')}
        icon={select('Icon', icons, null)}
        activeIcon={boolean('Active Icon', false)}
        type={select('Type', ['friendly', 'careful', 'primary', null], null)}
        size={select('Size', ['small', 'large', null], null)}
        disabled={boolean('Disabled', false)}
        onPress={onPress}
      />
    </View>
  ))
  .add('Small Active Icon', () => (
    <GeneralButton
      icon={images.print}
      activeIcon
      size='small'
      title='Cash'
      onPress={onPress}
    />
  ))
  .add('Small Disabled', () => (
    <GeneralButton
      disabled={true}
      size='small'
      title='disabled'
      onPress={onPress}
    />
  ))
  .add('Large Careful Button', () => (
    <GeneralButton
      title='Careful Button'
      size='large'
      type='careful'
      onPress={onPress}
    />
  ));

const styles = StyleSheet.create({
  container: {
    width: 500
  }
});
