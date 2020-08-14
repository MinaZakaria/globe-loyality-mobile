import React, { Component } from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import CenterView from '../CenterView';
import ClickableOverlay from './';
import EditButton from '../EditButton';
import { withKnobs, boolean } from '@storybook/addon-knobs';

class Story extends Component {
  constructor() {
    super();
    this.state = { modalVisible: false };
  }
  render() {
    const show = () => this.setState({ modalVisible: true });
    const hide = () => this.setState({ modalVisible: false });
    return (
      <View>
        <ClickableOverlay
          visible={this.state.modalVisible}
          onPress={hide}
          disabled={boolean('disabled', false)}
        >
        </ClickableOverlay>
        <EditButton onPress={show} />
      </View>
    );
  }
}

storiesOf('General', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Clickable Overlay', () => <Story />);
