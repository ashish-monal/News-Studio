import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from '../../screens/auth/Splash';
import Login from '../../screens/auth/Login';
import Registration from '../../screens/auth/Registration';
import ForgetPassword from '../../screens/auth/ForgetPassword';
import Verification from '../../screens/auth/Verification';
import CitySearch from '../../screens/auth/CitySearch';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Registration' component={Registration} options={{headerShown:false}}/>
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{headerShown:false}}/>
        <Stack.Screen name='Verification' component={Verification} options={{headerShown:false}}/>
        <Stack.Screen name='CitySearch' component={CitySearch} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation
