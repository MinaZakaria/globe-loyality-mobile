import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import images from '../../../../assets/images';
import SubmittionCard from './SubmittionCard';
import GeneralButton from '../../Buttons/GeneralButton';
import { FRIENDLY, CAREFUL, UNIQUE } from '../../../constants/views/buttonTypes';
import { NEW, APPROVED, DECLINED, REJECTED } from '../../../constants/ChallengeSubmittionStatueses';
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
          {this.renderCollection(NEW)}
          {this.renderCollection(APPROVED)}
          {this.renderCollection(REJECTED)}
          {this.renderCollection(DECLINED)}
        </ScrollView>
      </View>
    );
  }

  renderCollection = (submittionStatus) => {
    return (
      <View>
        <Text style={styles.titleText}>{this.getTitle(submittionStatus)}</Text>
        <FlatList
          ListEmptyComponent={() => <Text style={styles.emptyText}>{this.getEmptyTitle(submittionStatus)}</Text>}
          data={this.getData(submittionStatus)}
          renderItem={({ item }) =>
            <SubmittionCard
              submittion={item}
              actions={this.getButtons(submittionStatus, item.id)}
              onChangeComment={comment => this.setComment(comment, item.id)}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  getTitle = (submittionStatus) => {
    switch (submittionStatus) {
      case NEW:
        return 'New Challenges Submittions:';
      case APPROVED:
        return 'Approved Challenges Submittions:';
      case DECLINED:
        return 'Declined Challenges Submittions:';
      case REJECTED:
        return 'Rejected Challenges Submittions:';
    }
  }

  getEmptyTitle = (submittionStatus) => {
    switch (submittionStatus) {
      case NEW:
        return 'No new submitting on challenges';
      case APPROVED:
        return 'No submitting on challenges approved yet';
      case DECLINED:
        return 'No submitting on challenges declined yet';
      case REJECTED:
        return 'No submitting on challenges rejected yet';
    }
  }

  getData = (submittionStatus) => {
    const { newSubmittions, approvedSubmittions, rejectedSubmittions, declinedSubmittions } = this.props;

    switch (submittionStatus) {
      case NEW:
        return newSubmittions;
      case APPROVED:
        return approvedSubmittions;
      case DECLINED:
        return rejectedSubmittions;
      case REJECTED:
        return declinedSubmittions;
    }
  }

  getButtons = (submittionStatus, itemId) => {
    switch (submittionStatus) {
      case NEW:
        return this.renderNewActions(itemId);
      case APPROVED:
        return this.renderApprovedActions(itemId);
      case DECLINED:
        return this.renderDeclinedActions(itemId);
      case REJECTED:
        return this.renderRejectedActions(itemId);
    }
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
