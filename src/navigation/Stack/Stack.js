import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabsNavigation from '../Tab';

import Login from '../../screens/Login';
import Character from '../../screens/Character';

import {useCurrentUser} from '../../hooks/useCurrentUser';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  const {username} = useCurrentUser();

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
            <Stack.Screen name="Character" component={Character} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackContainer;
