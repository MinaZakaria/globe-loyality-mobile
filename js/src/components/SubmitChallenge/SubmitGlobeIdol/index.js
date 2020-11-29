import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import styles from './style';
import images from '../../../../assets/images';
import GeneralButton from '../../Buttons/GeneralButton';
import { LARGE } from '../../../constants/views/buttonSizes';
import { FRIENDLY } from '../../../constants/views/buttonTypes';

class SubmitGlobeIdol extends Component {

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
        <Text style={styles.containerTitle}>Submit Globe Idol</Text>
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
        {submittion.points === 0 || submittion.points === 50 ? this.renderChoice(50, 'Top Twenty') : undefined}
        {submittion.points === 0 || submittion.points === 100 ? this.renderChoice(100, 'Top Ten') : undefined}
        {submittion.points === 0 || submittion.points === 200 ? this.renderChoice(200, '3rd place') : undefined}
        {submittion.points === 0 || submittion.points === 250 ? this.renderChoice(250, '2nd place') : undefined}
        {submittion.points === 0 || submittion.points === 300 ? this.renderChoice(300, '1st place') : undefined}
        {this.renderError()}
        {this.renderSuccess()}
        {this.renderSubmitButton()}
      </View>
    );
  }

  renderChoice(points, title) {
    return (
      <View style={styles.choiceContainer}>
        <GeneralButton
          size={LARGE}
          type={FRIENDLY}
          title={title}
          onPress={() => this.onChoice(points)}
        />
      </View>
    );
  }

  onChoice(points, image = null) {
    this.setState({ submittion: { points, image } });
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
    const { submittion } = this.state;
    if (submittion.points) {
      return (
        <View>
          <Text style={styles.normalText}>{`You will win ${submittion.points} Points`}</Text>
          <GeneralButton
            size='xlarge'
            type='primary'
            title='Submit'
            onPress={() => this.onSubmit()}
          />
        </View>
      );
    }
  }

  onSubmit() {
    this.setState({ success: null, error: null });

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

SubmitGlobeIdol.propTypes = {
  navigation: PropTypes.object,
  challenge: PropTypes.func,
  onSubmit: PropTypes.func,
  t: PropTypes.func.isRequired,
};

SubmitGlobeIdol.defaultProps = {
};

export default withTranslation('submit')(SubmitGlobeIdol);
