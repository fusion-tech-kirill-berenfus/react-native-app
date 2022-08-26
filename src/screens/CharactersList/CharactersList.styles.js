import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    height: '100%',
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#dbdbdb',
  },
  sideItem: {
    position: 'absolute',
    right: 35,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
