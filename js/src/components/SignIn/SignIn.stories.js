import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import SignIn from '.';

storiesOf('SignIn', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Form', () => {
    return (
      <SignIn
        onSubmitClicked={() => {
          return new Promise((resolve, reject) => { //eslint-disable-line no-unused-vars
            setTimeout(() => reject('Wrong username or password'), 1000);
          });
        }}
        onCreateAccountClicked={() => console.log('Create account clicked!')}  //eslint-disable-line no-console
      />
    );
  });
