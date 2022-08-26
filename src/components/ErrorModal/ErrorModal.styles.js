import {StyleSheet} from 'react-native';

const errorColor = '#9e0600';

const styles = StyleSheet.create({
  modalLayout: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e2e2e90',
    zIndex: 1,
    elevation: 1,
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 25,
    fontSize: 20,
    fontWeight: '700',
    color: errorColor,
  },
  description: {
    marginBottom: 25,
    fontSize: 16,
    color: '#000',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bdbdbd',
  },
  firstButton: {
    marginRight: 24,
    text: {
      color: '#bdbdbd',
    },
  },
  secondButton: {
    backgroundColor: errorColor,
    borderColor: errorColor,
    text: {color: '#fff'},
  },
});

export default styles;
