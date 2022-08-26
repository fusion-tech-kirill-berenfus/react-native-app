import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useCurrentUser} from '../../hooks/useCurrentUser';

import styles from './styles';

const Profile = () => {
  const {logOutUser} = useCurrentUser();

  return (
    <SafeAreaView style={styles.view}>
      <Text onPress={logOutUser} style={styles.sideItem}>
        Log Out
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
