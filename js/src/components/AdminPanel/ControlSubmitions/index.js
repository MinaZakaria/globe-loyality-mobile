import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../assets/images';
import SubmittionCard from './SubmittionCard';
import GeneralButton from '../../Buttons/GeneralButton';


class ControlSubmitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
      error: null,
      loading: false,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.fetchSubmittions()
      .then(() => {
        this.setState({ loading: false, error: null });
      })
      .catch((error) => {
        this.setState({ loading: false, error });
      });
  }

  onRefresh() {
    this.setState({ refreshing: true });

    this.props.fetchSubmittions()
      .then(() => {
        this.setState({ refreshing: false });
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
        <Text style={styles.containerTitle}>Challenges Submittions</Text>
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
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} />
          }
        >
          {this.renderNew()}
          {this.renderApproved()}
          {this.renderRejected()}
          {this.renderDeclined()}
        </ScrollView>
      </View>
    );
  }

  renderNew = () => {
    return (
      <View>
        <Text style={styles.titleText}>New Challenges Submittions:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No New Submittions</Text>}
          data={this.props.newSubmittions}
          renderItem={({ item }) =>
            <SubmittionCard
              submittion={item}
              actions={this.renderNewActions(item.id)}
              onChangeComment={comment => this.setState({ comment })}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  renderApproved = () => {
    return (
      <View>
        <Text style={styles.titleText}>Approved Challenges Submittions:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No Approved Submittions</Text>}
          data={this.props.approvedSubmittions}
          renderItem={({ item }) =>
            <SubmittionCard
              submittion={item}
              actions={this.renderApprovedActions(item.id)}
              onChangeComment={comment => this.setState({ comment })}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  renderRejected = () => {
    return (
      <View>
        <Text style={styles.titleText}>Rejected Challenges Submittions:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No Rejected Submittions</Text>}
          data={this.props.rejectedSubmittions}
          renderItem={({ item }) =>
            <SubmittionCard
              submittion={item}
              actions={this.renderRejectedActions(item.id)}
              onChangeComment={comment => this.setState({ comment })}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  renderDeclined = () => {
    return (
      <View>
        <Text style={styles.titleText}>Declined Challenges Submittions:</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>No Declined Submittions</Text>}
          data={this.props.declinedSubmittions}
          renderItem={({ item }) =>
            <SubmittionCard
              submittion={item}
              actions={this.renderDeclinedActions(item.id)}
              onChangeComment={comment => this.setState({ comment })}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  renderNewActions = (id) => {
    const { comment } = this.state;
    let buttons = [];
    buttons.push(
      <GeneralButton
        size='small'
        type='friendly'
        title='Approve'
        onPress={() => this.props.approveSubmittion(id, comment)}
      />
    );
    buttons.push(
      <GeneralButton
        size='small'
        type='careful'
        title='Decline'
        onPress={() => this.props.declineSubmittion(id, comment)}
      />
    );
    buttons.push(
      <GeneralButton
        size='small'
        type='careful'
        title='Reject'
        onPress={() => this.props.rejectSubmittion(id, comment)}
      />
    );
    return buttons;
  }

  renderApprovedActions = (id) => {
    let buttons = [];
    // buttons.push(
    //   <GeneralButton
    //     size='small'
    //     type='careful'
    //     title='Block'
    //     onPress={() => this.props.blockUser(id)}
    //   />
    // );
    return buttons;
  }

  renderRejectedActions = (id) => {
    const { comment } = this.state;

    let buttons = [];
    buttons.push(
      <GeneralButton
        size='small'
        type='friendly'
        title='Approve'
        onPress={() => this.props.approveSubmittion(id, comment)}
      />
    );
    buttons.push(
      <GeneralButton
        size='small'
        type='careful'
        title='Decline'
        onPress={() => this.props.declineSubmittion(id, comment)}
      />
    );
    return buttons;
  }

  renderDeclinedActions = (id) => {
    const { comment } = this.state;

    let buttons = [];
    buttons.push(
      <GeneralButton
        size='small'
        type='friendly'
        title='Approve'
        onPress={() => this.props.approveSubmittion(id, comment)}
      />
    );
    buttons.push(
      <GeneralButton
        size='small'
        type='careful'
        title='Decline'
        onPress={() => this.props.declineSubmittion(id, comment)}
      />
    );
    return buttons;
  }
}

ControlSubmitions.propTypes = {
  navigation: PropTypes.object,
  fetchSubmittions: PropTypes.func,

  newSubmittions: PropTypes.array,
  approvedSubmittions: PropTypes.array,
  rejectedSubmittions: PropTypes.array,
  declinedSubmittions: PropTypes.array,

  approveSubmittion: PropTypes.func,
  rejectSubmittion: PropTypes.func,
  declineSubmittion: PropTypes.func
};

ControlSubmitions.defaultProps = {
  newSubmittions: [],
  approvedSubmittions: [],
  rejectedSubmittions: [],
  declinedSubmittions: [],
};

export default ControlSubmitions;
