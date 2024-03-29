import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CustomDrawer from '../components/CustomDrawer'

import ProfileScreen from '../screens/ProfileScreen'
import MessagesScreen from '../screens/MessagesScreen'
import SettingsScreen from '../screens/SettingsScreen'

import { Ionicons } from '@expo/vector-icons'

import TabNavigator from './TabNavigator'


const Drawer = createDrawerNavigator()


const AppStack = () => {
  return (
    <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />} 
        screenOptions={{
            headerShown: false, 
            drawerActiveBackgroundColor: '#181818',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#181818',
            drawerLabelStyle: {
                marginLeft: -25, 
                fontSize: 15,
            },
        }}>
        <Drawer.Screen name='Home'component={TabNavigator} options={{
            drawerIcon: ({color}) => (
                <Ionicons name='home-outline' size={22} color={color} />
            )
        }}/>
        <Drawer.Screen name='Profile'component={ProfileScreen} options={{
            drawerIcon: ({color}) => (
                <Ionicons name='person-outline' size={22} color={color} />
            )
        }}/>
        <Drawer.Screen name='Messages'component={MessagesScreen} options={{
            drawerIcon: ({color}) => (
                <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
            )
        }}/>
        <Drawer.Screen name='Settings'component={SettingsScreen} options={{
            drawerIcon: ({color}) => (
                <Ionicons name='settings-outline' size={22} color={color} />
            )
        }}/>
    </Drawer.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})