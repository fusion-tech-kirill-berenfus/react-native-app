import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import {useCharacters} from '../../hooks/useCharacters';
import {useCurrentUser} from '../../hooks/useCurrentUser';

import ListItem from './ListItem/ListItem';

import styles from './CharactersList.styles';

import {
  notificationListener,
  requestUserPermission,
} from '../../utils/pushHandler';

const CharactersList = ({navigation}) => {
  const {characters} = useCharacters();
  const {username, logOutUser} = useCurrentUser();
  useEffect(() => {
    // setCharacters();

    const init = async () => {
      await requestUserPermission();

      notificationListener(navigation);

      await RNBootSplash.hide({fade: true});
    };

    init();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
        <Text>{username}</Text>
        <Text onPress={logOutUser} style={styles.sideItem}>
          Log Out
        </Text>
      </View>
      <FlatList
        data={characters}
        renderItem={({item}) => (
          <ListItem navigation={navigation} data={item} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default CharactersList;
