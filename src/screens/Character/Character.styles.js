import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contentView: {
    paddingHorizontal: 35,
  },
  child: {
    width,
    height: 350,
    justifyContent: 'flex-start',
  },
  image: {width, height: '90%'},
  dotItem: {width: 8, height: 8},
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  author: {
    fontSize: 13,
    marginTop: 10,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 25,
  },
  button: {
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'darkGrey',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#4f4f4f',
  },
});

export default styles;
