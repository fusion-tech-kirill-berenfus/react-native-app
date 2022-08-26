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
import {useSelector, useDispatch} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {fetchCharacters, deleteItem} from '../../redux/listSlice';
import {logOut} from '../../redux/userSlice';

import styles, {styledLabels} from './List.styles';

import {
  notificationListener,
  requestUserPermission,
} from '../../utils/pushHandler';
import {useGlobalModalContext} from '../../components/GlobalModalContext';

const List = ({navigation}) => {
  const {characters} = useSelector(state => state.charactersReducer);
  const {username} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());

    const init = async () => {
      await requestUserPermission();

      notificationListener(navigation);

      await RNBootSplash.hide({fade: true});
    };

    init();
  }, [dispatch, navigation]);

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
        <Text>{username}</Text>
        <Text onPress={() => dispatch(logOut())} style={styles.sideItem}>
          Log Out
        </Text>
      </View>
      <FlatList
        data={characters}
        renderItem={({item}) => (
          <Item navigation={navigation} data={item} dispatch={dispatch} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const Item = ({navigation, data, dispatch}) => {
  const {id, name, origin, gender, status, species, image} = data;

  const {showModal} = useGlobalModalContext();

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
                  onConfirm: () => dispatch(deleteItem(id)),
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

export default List;
