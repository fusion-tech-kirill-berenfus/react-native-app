import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  areaPortrait: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  areaLandscape: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageView: {
    flex: 1,
    maxHeight: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  formPortrait: {
    width: '80%',
  },
  formLandscape: {
    width: '60%',
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    alignSelf: 'flex-end',
    marginTop: 5,
    fontSize: 12,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: '#000',
  },
  buttonView: {
    marginTop: 50,
  },
});

export default styles;
