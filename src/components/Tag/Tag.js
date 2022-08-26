import React from 'react';
import {Text} from 'react-native';

import getStyles from './Tag.styles';

const Tag = ({text, color}) => {
  const styles = getStyles(color);

  return <Text style={styles.tag}>{text}</Text>;
};

export default Tag;
