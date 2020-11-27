import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import styles from './style';
import images from '../../../../assets/images';
import ImageCropper from '../../ImageCropper';
import GeneralButton from '../../Buttons/GeneralButton';

class SubmitElDa7ee7 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submittion: {
        points: 0,
        image: null
      },
      error: null,
      success: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderChallengeInfo()}
        {this.renderForm()}
      </View>
    );
  }

  renderHeader() {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image source={images.arrows.back} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Submit El Da7ee7</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Programs')}
        >
          <Image source={images.profile} />
        </TouchableOpacity>
      </View>
    );
  }

  renderChallengeInfo() {
    const { challenge } = this.props;
    return (
      <View style={styles.challengeInfo}>
        <Text>{challenge.name}</Text>
        <Text>{challenge.description}</Text>
      </View>
    );
  }

  renderForm() {
    const { submittion } = this.state;
    return (
      <View style={styles.formContainer}>
        {submittion.points === 0 || submittion.points === 100 ? this.renderImageCropper(100) : undefined}
        {submittion.points === 0 || submittion.points === 90 ? this.renderImageCropper(90) : undefined}
        {submittion.points === 0 || submittion.points === 80 ? this.renderImageCropper(80) : undefined}
        {this.renderError()}
        {this.renderSuccess()}
        {this.renderSubmitButton()}
      </View>
    );
  }

  renderImageCropper(points) {
    return (
      <ImageCropper
        width={100}
        height={100}
        cropping={false}
        multiple={false}
        onChangeImage={image => this.onChangeImage(image, points)}
        defaultValue={this.state.submittion.image}
        buttonName={`${points} Points`}
      />
    );
  }

  onChangeImage(image, points) {
    this.setState({ submittion: { image, points } });
  }

  renderError() {
    const { error } = this.state;
    const { t } = this.props;
    return error && (
      <Text style={styles.errorText}>
        {t([`errors.${error.type}`, `common:errors.${error.type}`], error.details)}
      </Text>
    );
  }

  renderSuccess() {
    const { success } = this.state;
    return success && (
      <Text style={styles.successText}>
        {success}
      </Text>
    );
  }

  renderSubmitButton() {
    return (
      <GeneralButton
        size='large'
        type='primary'
        title='Submit'
        onPress={() => this.onSubmit()}
      />
    );
  }

  onSubmit() {
    this.props.onSubmit(this.state.submittion)
      .then(() => {
        this.setState({ success: 'You submitted correctly' });
        setTimeout(() => {
          this.props.navigation.navigate('Programs');
        }, 2000);
      })
      .catch((error) => {
        this.setState({ error });
      });
  }
}

SubmitElDa7ee7.propTypes = {
  navigation: PropTypes.object,
  challenge: PropTypes.func,
  onSubmit: PropTypes.func,
  t: PropTypes.func.isRequired,
};

SubmitElDa7ee7.defaultProps = {
};

export default withTranslation('submit')(SubmitElDa7ee7);
