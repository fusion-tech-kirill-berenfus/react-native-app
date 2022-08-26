import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useCharacter} from '../../../hooks/useCharacter';
import {useGlobalModalContext} from '../../../components/GlobalModalContext/GlobalModalContext';

import Tag from '../../../components/Tag';

import styles, {tagColors} from './ListItem.styles';

const ListItem = ({data}) => {
  const {id, name, origin, gender, status, species, image} = data;

  const {showModal} = useGlobalModalContext();

  const {deleteCharacterById} = useCharacter(id);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('Character', {
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
          <Tag text={status} color={tagColors[status]} />
          <Tag text={gender} color={tagColors[gender]} />
          <Tag text={species} color={tagColors[species]} />
        </View>
        <View style={styles.commentsView}>
          <Text style={styles.comments}>0 Comments</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
