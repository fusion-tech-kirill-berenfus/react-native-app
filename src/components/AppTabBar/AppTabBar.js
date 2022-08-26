import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles, {getTextColor} from './AppTabBar.styles';

const AppTabBar = ({state, descriptors}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const Icon = options.tabBarIcon;

        const isFocused = state.index === index;

        const itemColor = getTextColor(isFocused);

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            key={index}
            onPress={onPress}
            style={styles.item}>
            <Icon color={itemColor.color} size={24} />
            <Text style={[styles.text, itemColor]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AppTabBar;
