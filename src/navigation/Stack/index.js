import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Login/Login';
import Article from '../../screens/Article/Article';

import TabsNavigation from '../Tab';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  const {username} = useSelector(state => state.userReducer);

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
            <Stack.Screen name="Root" component={TabsNavigation} />
            <Stack.Screen name="Article" component={Article} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackContainer;
