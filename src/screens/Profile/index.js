import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {logOut} from '../../redux/userSlice';

import styles from './styles';

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.view}>
      <Text onPress={() => dispatch(logOut())} style={styles.sideItem}>
        Log Out
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
