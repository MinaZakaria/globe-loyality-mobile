import React, { Component } from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import CenterView from '../CenterView';
import TextInput from '.';
import { colors } from '../../styles';

class Story extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput label='Text input' optional={true} />
        <TextInput label='Label' />
        <TextInput label='Label' disabled={true} />
        <TextInput label='Label' error='hey man this is wrong' />
      </View>
    );
  }
}

storiesOf('General', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('TextInput', () => <Story />);

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 500,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.surface
  }
});
