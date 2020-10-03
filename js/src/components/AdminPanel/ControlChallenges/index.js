import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../assets/images';
import ChallengeCard from './ChallengeCard';
import GeneralButton from '../../Buttons/GeneralButton';


class ControlChallenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false
    };
  }

  componentDidMount() {
    this.props.fetchUsers()
      .then(() => {
        this.setState({ loading: false, error: null });
      })
      .catch((error) => {
        this.setState({ loading: false, error });
      });
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
        <Text style={styles.containerTitle}>Control Challenges</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
        >
          <Image source={images.profile} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView>
          {this.renderActive()}
          {this.renderInActive()}
        </ScrollView>
      </View>
    );
  }

  renderActive = () => {
    return (
      <View>
        <Text style={styles.titleText}>Active Users:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No Active Users</Text>}
          data={this.props.activeChallenges}
          renderItem={({ item }) =>
            <ChallengeCard
              user={item}
              actions={this.renderActiveActions(item.id)}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  renderInActive = () => {
    return (
      <View>
        <Text style={styles.titleText}>In-Active Challenges:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No In-Active Challenges</Text>}
          data={this.props.inActiveChallenges}
          renderItem={({ item }) =>
            <ChallengeCard
              user={item}
              actions={this.renderInActiveActions(item.id)}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  renderEmptyComponent = () => {
    return (
      <Text style={styles.emptyText}>
        No Active Challenges
      </Text>
    );
  };

  renderActiveActions = (challengeId) => {
    let buttons = [];
    buttons.push(
      <GeneralButton
        size='small'
        type='careful'
        title='Deactivate'
        onPress={() => this.props.deActivateChallenge(challengeId)}
      />
    );
    return buttons;
  }

  renderInActiveActions = (challengeId) => {
    let buttons = [];
    buttons.push(
      <GeneralButton
        size='small'
        type='friendly'
        title='Activate'
        onPress={() => this.props.activateChallenge(challengeId)}
      />
    );
    return buttons;
  }
}

ControlChallenges.propTypes = {
  navigation: PropTypes.object,
  fetchUsers: PropTypes.func,
  activeChallenges: PropTypes.array,
  inActiveChallenges: PropTypes.array,
  activateChallenge: PropTypes.func,
  deActivateChallenge: PropTypes.func
};

ControlChallenges.defaultProps = {
  activeChallenges: [],
  inActiveChallenges: [],
};

export default ControlChallenges;
