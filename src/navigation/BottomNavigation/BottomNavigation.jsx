import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/app/Home';
import Profile from '../../screens/app/Profile';

const Bottom  = createMaterialBottomTabNavigator();
const BottomNavigation = ({route}) => {
    const { selectedCity } = route.params;
  return (
   <Bottom.Navigator>
    <Bottom.Screen
        name='Home'
        component={Home}
        initialParams={{ selectedCity }}
      />
    <Bottom.Screen name='Profile' component={Profile}/>
   </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})