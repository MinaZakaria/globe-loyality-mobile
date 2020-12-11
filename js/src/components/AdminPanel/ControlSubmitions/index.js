import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../assets/images';
import SubmittionCard from './SubmittionCard';
import GeneralButton from '../../Buttons/GeneralButton';
import { FRIENDLY, CAREFUL, UNIQUE } from '../../../constants/views/buttonTypes';
import { SMALL } from '../../../constants/views/buttonSizes';

class ControlSubmitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {},
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
    this.setState({ refreshing: true, comments: {} });

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
              onChangeComment={comment => this.setComment(comment, item.id)}
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
    let buttons = [];
    buttons.push(this.approveButton(id));
    buttons.push(this.declineButton(id));
    buttons.push(this.rejectButton(id));
    return buttons;
  }

  renderApprovedActions = () => {
    let buttons = [];
    return buttons;
  }

  renderRejectedActions = (id) => {
    let buttons = [];
    buttons.push(this.declineButton(id));
    return buttons;
  }

  renderDeclinedActions = () => {
    let buttons = [];
    return buttons;
  }

  approveButton = id => {
    const comment = this.getComment(id);
    return (
      <GeneralButton
        size={SMALL}
        type={FRIENDLY}
        title='Approve'
        onPress={() => this.props.approveSubmittion(id, comment)}
      />
    );
  };

  declineButton = id => {
    const comment = this.getComment(id);
    return (
      <GeneralButton
        size={SMALL}
        type={UNIQUE}
        title='Decline'
        onPress={() => this.props.declineSubmittion(id, comment)}
      />
    );
  };

  rejectButton = id => {
    const comment = this.getComment(id);
    return (
      <GeneralButton
        size={SMALL}
        type={CAREFUL}
        title='Reject'
        onPress={() => this.props.rejectSubmittion(id, comment)}
      />
    );
  };

  getComment = id => {
    const { comments } = this.state;

    return comments[id];  //eslint-disable-line
  };

  setComment = (comment, id) => {
    const { comments } = this.state;

    this.setState({
      comments: {
        ...comments,
        [id]: comment
      }
    });
  };
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
