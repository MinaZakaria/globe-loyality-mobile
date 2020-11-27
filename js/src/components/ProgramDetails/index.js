import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../assets/images';
import ChallengeCard from '../Challenges/ChallengeCard';

class ProgramDetails extends Component {

  componentDidMount() {
    this.props.fetchChallenges();
  }

  render() {
    const { program, challenges } = this.props;

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Image source={images.programs[program.id]} style={styles.image} />
        <FlatList
          ListEmptyComponent={this.renderEmptyComponent}
          data={challenges}
          renderItem={this.renderChallenge}
          keyExtractor={this.challengesKeyExtractor}
        />
      </View>
    );
  }

  renderHeader = () => {
    const { navigation, program } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image source={images.arrows.back} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>{program.name}</Text>
      </View>
    );
  };

  renderEmptyComponent = () => {
    return (
      <Text style={styles.emptyText}>
        No Active Challenges
      </Text>
    );
  };

  renderChallenge = ({ item }) => {
    return <ChallengeCard challenge={item} onChallengePress={this.onChallengePress} />;
  };

  challengesKeyExtractor = item => item.id.toString();

  onChallengePress = (challengeId) => {
    const { navigation, program } = this.props;
    navigation.navigate('SubmitChallenge', { challengeId, programId: program.id });
  }
}

ProgramDetails.propTypes = {
  navigation: PropTypes.object,
  program: PropTypes.object,
  challenges: PropTypes.array,
  fetchChallenges: PropTypes.func
};

ProgramDetails.defaultProps = {
};

export default ProgramDetails;
