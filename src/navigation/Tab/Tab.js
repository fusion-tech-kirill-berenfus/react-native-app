import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Camera from '../../screens/Camera';
import CharactersList from '../../screens/CharactersList';
import Profile from '../../screens/Profile';

import AppTabBar from '../../components/AppTabBar';

const Tab = createBottomTabNavigator();

const TabsContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <AppTabBar {...props} />}>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={Profile}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={CharactersList}
      />
      <Tab.Screen
        name="Camera"
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
        component={Camera}
      />
    </Tab.Navigator>
  );
};

export default TabsContainer;
