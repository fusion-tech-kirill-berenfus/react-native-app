import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  ScrollView,
  Text,
  Pressable,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import styles from './Article.styles';

const Article = ({route}) => {
  const {name, origin, image} = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <SwiperFlatList
          showPagination
          paginationDefaultColor="#bdbdbd"
          paginationActiveColor="#4f4f4f"
          paginationStyleItem={{width: 8, height: 8}}
          index={0}>
          <View style={styles.child}>
            <Image style={styles.image} source={{uri: image}} />
          </View>
        </SwiperFlatList>
      </View>
      <ScrollView style={styles.contentView}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.author}>{origin}</Text>
        <View style={styles.buttonsView}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Like</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Comment</Text>
          </Pressable>
        </View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{'\n\n'}Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.{'\n\n'}Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Article;
