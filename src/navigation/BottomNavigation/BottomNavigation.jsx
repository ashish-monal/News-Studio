import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/app/Home';
import Profile from '../../screens/app/Profile';
import Feather from 'react-native-vector-icons/Feather'; 
import AntDesign from 'react-native-vector-icons/AntDesign'

const Bottom  = createMaterialBottomTabNavigator();
const BottomNavigation = ({route}) => {
    const { selectedCity } = route.params;
  return (
   <Bottom.Navigator>
    <Bottom.Screen
        name='Home'
        component={Home}
        initialParams={{ selectedCity }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
    <Bottom.Screen name='Profile' component={Profile}
     options={{
      tabBarIcon: ({ color, size }) => (
        <Feather name="user" size={24} color={color} />
      ),
    }}
    />
   </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})