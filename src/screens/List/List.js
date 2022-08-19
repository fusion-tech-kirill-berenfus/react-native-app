import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCharacters} from '../../redux/listSlice';
import {logOut} from '../../redux/userSlice';

import styles, {styledLabels} from './List.styles';

const List = ({navigation}) => {
  const {list} = useSelector(state => state.listReducer);
  const {username} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
        <Text>{username}</Text>
        <Text onPress={() => dispatch(logOut())} style={styles.sideItem}>
          Log Out
        </Text>
      </View>
      <FlatList
        data={list}
        renderItem={({item}) => <Item navigation={navigation} data={item} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <Text>icon</Text>
        <Text>icon</Text>
        <Text>icon</Text>
        <Text>icon</Text>
        <Text onPress={() => navigation.navigate('Camera')}>Cam</Text>
      </View>
    </SafeAreaView>
  );
};

const Item = ({navigation, data}) => {
  const {name, origin, gender, status, species, image} = data;

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
        })
      }
      style={styles.itemView}>
      <Image source={{uri: image}} style={styles.itemImage} />

      <View style={styles.itemContent}>
        <View>
          <Text style={styles.title}>{name}</Text>
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
