import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from '../../screens/auth/Splash';
import Login from '../../screens/auth/Login';
import Registration from '../../screens/auth/Registration';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Registration' component={Registration} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation
