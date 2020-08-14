import React, { Component } from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import Popup from '../Popup';
import GeneralButton from '../GeneralButton';
import { View, Text, StyleSheet } from 'react-native';
import { withKnobs } from '@storybook/addon-knobs';
import OverlayModal from './';

class Story extends Component {
  overlayModalControls = {
    show: () => { },
    hide: () => { },
  }

  render() {
    return (
      <View>
        <GeneralButton
          title='Open Overlay'
          size='large'
          onPress={this.showOverlayModal}
        />
        <OverlayModal
          trigger={this.overlayModalTrigger}
        >
          <Popup
            title={'Open Daily Balance'}
            actions={<GeneralButton
              title='Close'
              type='careful'
              onPress={this.hideOverlayModal}
            />}
            onClosePress={this.hideOverlayModal}
            disableClose={false}
            size={'small'}
          >
            <Text style={styles.text}>
              Please Open Daily Balance First to be able to creat OrderPlease Open Daily Balance First to be able to creat Order
            </Text>
          </Popup>
        </OverlayModal>
      </View>
    );
  }

  overlayModalTrigger = ({ show, hide }) => {
    this.overlayModalControls = {
      show, hide
    };
  }

  showOverlayModal = () => {
    this.overlayModalControls.show();
  }

  hideOverlayModal = () => {
    this.overlayModalControls.hide();
  }
}

storiesOf('OverlayModal', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Open Overlay', () => (
    <Story />
  ));

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
});
