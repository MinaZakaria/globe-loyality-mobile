import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';
import GeneralButton from '../Buttons/GeneralButton';
import SubmittionCard from '../AdminPanel/ControlSubmitions/SubmittionCard';
import { LARGE } from '../../constants/views/buttonSizes';
import { FRIENDLY } from '../../constants/views/buttonTypes';

class Profile extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.fetchMe();
      this.props.fetchSubmittions();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderMainInfo()}
        {this.renderPoints()}
        {this.renderChallenges()}
      </View>
    );
  }

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image source={images.menu} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Challenges')}
        >
          <Image source={images.home} />
        </TouchableOpacity>
      </View>
    );
  };

  renderMainInfo = () => {
    const { currentUser } = this.props;
    return (
      <View style={styles.mainInfo}>
        <Image source={images.profile2} />
        <View style={styles.mainText}>
          <Text>{currentUser ? currentUser.name : null}</Text>
          <Text>{currentUser && currentUser.role ? currentUser.role.name : null}</Text>
        </View>
      </View>
    );
  };

  renderPoints = () => {
    const { currentUser } = this.props;
    return (
      <View>
        <Text style={styles.points}>Points: {currentUser ? currentUser.points : null}</Text>
      </View>
    );
  };

  renderChallenges = () => {
    const { challengeSubmittions } = this.props;
    console.log('challengeSubmittions', challengeSubmittions);
    return (
      <View style={styles.challengesContainer}>
        <Text style={styles.titleText}>Your challenges</Text>
        <FlatList
          ListEmptyComponent={() => this.renderEmptyComponent()}
          data={challengeSubmittions}
          renderItem={({ item }) =>
            <SubmittionCard
              submittion={item}
              profile
            // actions={this.getButtons(submittionStatus, item.id)}
            // onChangeComment={comment => this.setComment(comment, item.id)}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  renderEmptyComponent = () => {
    const { currentUser, navigation } = this.props;
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          {`Hey ${currentUser.name}, You didn't submit any challenge yet. To collect points please start submitting challenges`}
        </Text>
        <GeneralButton
          size={LARGE}
          type={FRIENDLY}
          title='Go here to start'
          onPress={() => navigation.navigate('Programs')}
        />
      </View>
    );
  };
}

Profile.propTypes = {
  navigation: PropTypes.object,
  currentUser: PropTypes.object,
  fetchMe: PropTypes.func,
  fetchSubmittions: PropTypes.func,
  challengeSubmittions: PropTypes.array
};

Profile.defaultProps = {
  challengeSubmittions: []
};

export default Profile;
