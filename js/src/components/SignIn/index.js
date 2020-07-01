import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  ActivityIndicator, View, Text, TextInput,
  TouchableOpacity, Image, KeyboardAvoidingView, Platform
} from 'react-native';
import styles from './style';
import images from '../../../assets/images';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: ''
    };
  }
  render() {
    const { t } = this.props;
    const { loading } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyBoard}
        keyboardVerticalOffset={100}
      >
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Image source={images.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.loginText}>{t('title')}</Text>
            </View>
            <TextInput
              autoFocus={true}
              style={styles.textInput}
              placeholder={t('emailPlaceholder')}
              onChangeText={this.onChangeEmail}
              autoCapitalize='none'
              value={this.state.email}
            />
            <TextInput
              style={styles.textInput}
              placeholder={t('passwordPlaceholder')}
              secureTextEntry={true}
              onChangeText={this.onChangePassword}
              autoCapitalize='none'
              value={this.state.password}
            />
            <Text style={styles.error}>{this.state.error}</Text>
            <TouchableOpacity
              style={styles.textContainer}
              activeOpacity={1}
              onPress={this.props.onCreateAccountClicked}
            >
              <Text style={styles.loginText}>{t('createAccount')}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={1}
            disabled={loading}
            onPress={this.onSubmitClicked}
          >
            {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Text style={styles.buttonText}>{t('loginButton')}</Text>}
          </TouchableOpacity>
          <View style={styles.keyBoard} />
        </View>
      </KeyboardAvoidingView>
    );
  }

  onChangeEmail = email => {
    this.setState({ email: email.replace(/\s/g, '') });
  }

  onChangePassword = password => {
    this.setState({ password });
  }

  onSubmitClicked = () => {
    this.setState({ loading: true });
    const { email, password } = this.state;
    this.props.onSubmitClicked(email, password)
      .then(() => {
        this.setState({ error: '', loading: false });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }
}

SignIn.propTypes = {
  t: PropTypes.func.isRequired,
  onSubmitClicked: PropTypes.func,
  onCreateAccountClicked: PropTypes.func,
};

export default withTranslation('login')(SignIn);
