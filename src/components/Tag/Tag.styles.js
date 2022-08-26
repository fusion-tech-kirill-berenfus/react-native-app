import {StyleSheet} from 'react-native';

const getStyles = tagColor =>
  StyleSheet.create({
    tag: {
      overflow: 'hidden',
      marginTop: 5,
      marginRight: 5,
      borderRadius: 5,
      paddingVertical: 4,
      paddingHorizontal: 15,
      backgroundColor: tagColor,
      fontSize: 12,
      textTransform: 'uppercase',
      color: 'white',
    },
  });

export default getStyles;
