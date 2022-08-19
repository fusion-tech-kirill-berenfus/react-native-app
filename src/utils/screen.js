import {Dimensions} from 'react-native';

export const getPortraint = () => {
  const dim = Dimensions.get('screen');

  return dim.height >= dim.width;
};
