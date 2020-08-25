import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

function UserCard({ user, actions }) {

  const renderActions = () => {
    return (
      <View style={styles.actionsContainer}>
        {actions}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      {renderActions()}
    </View >
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.any
};

export default UserCard;
