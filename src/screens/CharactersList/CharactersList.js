import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useCharacters} from '../../hooks/useCharacters';
import {useCharacter} from '../../hooks/useCharacter';
import {useCurrentUser} from '../../hooks/useCurrentUser';

import styles, {styledLabels} from './CharactersList.styles';

import {
  notificationListener,
  requestUserPermission,
} from '../../utils/pushHandler';
import {useGlobalModalContext} from '../../components/GlobalModalContext';

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
        renderItem={({item}) => <Item navigation={navigation} data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const Item = ({navigation, data}) => {
  const {id, name, origin, gender, status, species, image} = data;

  const {showModal} = useGlobalModalContext();

  const {deleteCharacterById} = useCharacter(id);

  const getLabelStyle = param => {
    switch (param) {
      case 'Alive':
        return styledLabels.aliveLabel;
      case 'Dead':
        return styledLabels.deadLabel;

      case 'Human':
        return styledLabels.humanLabel;
      case 'Alien':
        return styledLabels.alienLabel;

      case 'Male':
        return styledLabels.maleLabel;
      case 'Female':
        return styledLabels.femaleLabel;
      default:
        return styles.label;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('Article', {
          name,
          origin,
          image,
          id,
        })
      }
      style={styles.itemView}>
      <Image source={{uri: image}} style={styles.itemImage} />

      <View style={styles.itemContent}>
        <View>
          <View style={styles.titleLabel}>
            <Text style={styles.title}>{name}</Text>
            <Pressable
              onPress={() =>
                showModal({
                  type: 'error',
                  title: `Delete ${name}`,
                  description:
                    'Are you shure you want to delete this character?',
                  onConfirm: deleteCharacterById,
                })
              }>
              <MaterialCommunityIcons
                name="delete-circle"
                color="#9e0600"
                size={24}
              />
            </Pressable>
          </View>
          <Text style={styles.author}>{origin}</Text>
        </View>
        <View style={styles.labelView}>
          <Text style={getLabelStyle(status)}>{status}</Text>
          <Text style={getLabelStyle(species)}>{species}</Text>
          <Text style={getLabelStyle(gender)}>{gender}</Text>
        </View>
        <View style={styles.commentsView}>
          <Text style={styles.comments}>0 Comments</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharactersList;
