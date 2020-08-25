import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../assets/images';
import UserCard from './UserCard';
import GeneralButton from '../../Buttons/GeneralButton';


class ControlUsers extends Component {
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
        <Text style={styles.containerTitle}>Control Users</Text>
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
          {this.renderPending()}
          {this.renderActive()}
          {this.renderInActive()}
        </ScrollView>
      </View>
    );
  }

  renderPending = () => {
    return (
      <View>
        <Text style={styles.titleText}>Pending Users:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No Pending Users</Text>}
          data={this.props.pendingUsers}
          renderItem={({ item }) =>
            <UserCard
              user={item}
              actions={this.renderPendingActions(item.id)}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  renderActive = () => {
    return (
      <View>
        <Text style={styles.titleText}>Active Users:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No Active Users</Text>}
          data={this.props.activeUsers}
          renderItem={({ item }) =>
            <UserCard
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
        <Text style={styles.titleText}>In-Active Users:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No In-Active Users</Text>}
          data={this.props.inActiveUsers}
          renderItem={({ item }) =>
            <UserCard
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

  renderPendingActions = (userId) => {
    let buttons = [];
    buttons.push(
      <GeneralButton
        size='small'
        type='friendly'
        title='Approve'
        onPress={() => this.props.approveUser(userId)}
      />
    );
    buttons.push(
      <GeneralButton
        size='small'
        type='careful'
        title='Reject'
        onPress={() => this.props.blockUser(userId)}
      />
    );
    return buttons;
  }

  renderActiveActions = (userId) => {
    let buttons = [];
    buttons.push(
      <GeneralButton
        size='small'
        type='careful'
        title='Block'
        onPress={() => this.props.blockUser(userId)}
      />
    );
    return buttons;
  }

  renderInActiveActions = (userId) => {
    let buttons = [];
    buttons.push(
      <GeneralButton
        size='small'
        type='friendly'
        title='Approve'
        onPress={() => this.props.approveUser(userId)}
      />
    );
    return buttons;
  }
}

ControlUsers.propTypes = {
  navigation: PropTypes.object,
  fetchUsers: PropTypes.func,
  pendingUsers: PropTypes.array,
  activeUsers: PropTypes.array,
  inActiveUsers: PropTypes.array,
  approveUser: PropTypes.func,
  blockUser: PropTypes.func
};

ControlUsers.defaultProps = {
  pendingUsers: [],
  activeUsers: [],
  inActiveUsers: [],
};

export default ControlUsers;
