import React, { Component } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import CenterView from '../CenterView';
import Dropdown from './';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../styles';

let data = [
  { id: 1, name: 'Banana' },
  { id: 2, name: 'Mango' },
  { id: 3, name: 'Pear' },
  { id: 4, name: 'koko' },
  { id: 5, name: 'nono' },
  { id: 6, name: 'Pear' },
  { id: 7, name: 'zatoon' }
];

class Story extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Dropdown
            data={data}
            label='this is a text'
            labelKey='name'
            onChange={this.onChangeText}
            optional={boolean('optional', true)}
          />
          <Dropdown
            data={data}
            label='Dropdown'
            labelKey='name'
            onChange={this.onChangeText}
            optional={boolean('optional', false)}
          />
          <Dropdown
            data={data}
            error='error goes here'
            label='Dropdown'
            labelKey='name'
            onChange={this.onChangeText}
            optional={boolean('optional', false)}
          />
          <Dropdown
            data={data}
            label='Dropdown'
            labelKey='name'
            disabled={true}
            onChange={this.onChangeText}
            optional={boolean('optional', false)}
          />
        </View>
      </View>
    );
  }

  onChangeText = value => {
    console.log(value);// eslint-disable-line no-console
  }
}

storiesOf('General', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Dropdown', () => <Story />);

const styles = StyleSheet.create({
  container: {
    width: 500,
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    alignItems: 'center',
    padding: 50
  },
  view: {
    width: 280,
    height: 500,
    justifyContent: 'space-between'
  }
});
