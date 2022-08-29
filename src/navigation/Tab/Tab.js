import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Camera from '../../screens/Camera';
import CharactersList from '../../screens/CharactersList';
import Profile from '../../screens/Profile';

import AppTabBar from '../../components/AppTabBar';

import UserIcon from '../../assets/user.svg';
import HomeIcon from '../../assets/home.svg';
import CameraIcon from '../../assets/camera.svg';

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
            <UserIcon width={24} height={24} fill={color} />
          ),
        }}
        component={Profile}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <HomeIcon width={24} height={24} fill={color} />
          ),
        }}
        component={CharactersList}
      />
      <Tab.Screen
        name="Camera"
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({color, size}) => (
            <CameraIcon width={24} height={24} fill={color} />
          ),
        }}
        component={Camera}
      />
    </Tab.Navigator>
  );
};

export default TabsContainer;
