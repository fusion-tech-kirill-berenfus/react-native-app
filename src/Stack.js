import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/Login/Login';
import List from './screens/List/List';
import Article from './screens/Article/Article';
import Camera from './screens/Camera/Camera';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  const {username} = useSelector(state => state.userReducer);
  console.log(username);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!username ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Article" component={Article} />
          </>
        )}

        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackContainer;
