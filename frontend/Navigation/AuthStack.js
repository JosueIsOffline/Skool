import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={OnBoardingScreen} name="OnBoarding" />
      <Stack.Screen  component={LoginScreen} name="Login" />
    </Stack.Navigator>
  )
}

export default AuthStack