import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  View,
  TextInput,
  Text,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {getPortraint} from '../../utils/screen';

import styles from './Login.styles';

import cat from '../../assets/cat.jpeg';
import {logIn} from '../../redux/userSlice';

const Login = ({navigation}) => {
  const [usernameFiled, setUsernameField] = useState('');
  const [isPortraint, setPortraint] = useState(getPortraint());
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = Dimensions.addEventListener('change', () =>
      setPortraint(getPortraint()),
    );

    return subscribe.remove();
  }, []);

  const handlePress = () => {
    dispatch(logIn(usernameFiled));
  };

  return (
    <SafeAreaView
      style={isPortraint ? styles.areaPortrait : styles.areaLandscape}>
      <View style={styles.imageView}>
        <Image source={cat} style={styles.loginImage} />
      </View>
      <View style={isPortraint ? styles.formPortrait : styles.formLandscape}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={usernameFiled}
          onChangeText={setUsernameField}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
        />
        <Text style={styles.text}>Forgot the password</Text>
        <View style={styles.buttonView}>
          <Button onPress={handlePress} title="Login" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
