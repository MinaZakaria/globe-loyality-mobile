/* eslint-disable react-native/no-color-literals */
import React from 'react';
import CenterView from '../CenterView';
import { storiesOf } from '@storybook/react-native';
import { Text, StyleSheet, TextInput } from 'react-native';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import Popup from './';
import ConfirmPopup from './ConfirmPopup';
import { colors, fonts } from '../../styles';
import GeneralButton from '../GeneralButton';

const sizeSelect = ['small', 'large'];
const errorPostionSelect = ['top', 'bottom'];
storiesOf('Popup', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Default Popup', () => (
    <Popup
      title={text('Title', 'Title')}
      size={select('Size', sizeSelect, 'small')}
      warning={boolean('Warning', false)}
    >
      <Text style={styles.text}>
        You can’t order without opened Daily balance you can request from your manger
      </Text>
    </Popup>
  ))
  .add('Warning Popup', () => (
    <Popup
      title={text('Title', 'Warning')}
      size={select('Size', sizeSelect, 'small')}
      warning={boolean('Warning', true)}
    >
      <Text style={styles.text}>
        You can’t close the daily balance while there is open shifts, please close shifts first.
        You can’t close the daily balance while there is open shifts,
        please close shifts first. You can’t close the daily balance while there is open shifts,
        please close shifts first. You can’t close the daily balance
        while there is open shifts, please close shifts first
      </Text>
    </Popup>
  ))
  .add('Action Popup', () => (
    <Popup
      title={text('Title', 'Open Daily Balance')}
      actions={<DailyBalancePageButton />}
      size={select('Size', sizeSelect, 'small')}
      warning={boolean('Warning', false)}
      error='Some Thing goes wrong'
    >
      <Text style={styles.text}>
        Please Open Daily Balance First to be able to creat OrderPlease Open Daily Balance First to be able to creat Order
      </Text>
    </Popup>
  ))
  .add('Multiple Actions Popup', () => (
    <Popup
      title={text('Title', 'Are you sure you want to delete?')}
      actions={[<DeleteButton key='left' />, <DoneButton key='done' />]}
      size={select('Size', sizeSelect, 'small')}
      warning={boolean('Warning', false)}
      isLoading={boolean('Loading', false)}
    />
  ))
  .add('Popup with Input', () => (
    <Popup
      title={text('Title', 'Hall')}
      subTitle="sub title"
      size={select('Size', sizeSelect, 'small')}
      actions={[<DeleteButton key='left' />, <DoneButton key='done' />]}
      warning={boolean('Warning', false)}
    >
      <TextInput
        style={styles.textInput}
        placeholder="Hall Name"
      />
    </Popup>
  ))
  .add('Popup with subTitle and error', () => (
    <Popup
      title={text('Title', 'Title')}
      size={select('Size', sizeSelect, 'small')}
      subTitle='SubTitle'
      error='some error goes here'
    >
      <Text style={styles.text}>
        You can’t order without opened Daily balance you can request from your manger
      </Text>
    </Popup>
  ))
  .add('Popup error position', () => (
    <Popup
      title={text('Title', 'Title')}
      size={select('Size', sizeSelect, 'small')}
      subTitle='Sub Title'
      error='some error goes here some error goes here some error goes here some error goes here'
      errorPosition={select('errorPosition', errorPostionSelect, 'top')}
    >
      <Text style={styles.text}>
        You can’t order without opened Daily balance you can request from your manger
      </Text>
    </Popup>
  ))
  .add('Confirm Popup', () => (
    <ConfirmPopup
      title={text('Title', 'Are you sure?')}
      size={select('Size', sizeSelect, 'small')}
      onPrimaryPress={() => console.log('Primary Pressed')} // eslint-disable-line no-console
      onCarefulPress={() => console.log('Careful Pressed')} // eslint-disable-line no-console
      primaryTitle={text('Primary Title', 'Done')}
      carefulTitle={text('Secondary Title', 'Delete')}
      warning={boolean('Warning', false)}
    >
      <Text style={styles.text}>
        Deleting can not be undone
      </Text>
    </ConfirmPopup>
  ));

const DeleteButton = () => (
  <GeneralButton
    title='Delete'
    type='careful'
    size='large'
    onPress={() => console.log()} // eslint-disable-line no-console
  />
);

const DoneButton = () => (
  <GeneralButton
    title='Done'
    size='large'
    onPress={() => console.log()} // eslint-disable-line no-console
  />
);

const DailyBalancePageButton = () => (
  <GeneralButton
    title='Go to Daily Balance Page'
    type='friendly'
    onPress={() => console.log()} // eslint-disable-line no-console
  />
);

const styles = StyleSheet.create({
  text: {
    color: colors.primarySub,
    textAlign: 'center'
  },
  textInput: {
    width: 420,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D5D5D5',
    textAlign: 'center',
    color: colors.primary,
    ...fonts.body
  }
});
