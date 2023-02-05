import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// Screens
import HomeScreen from "./screens/HomeScreens"
import SettingsScreen from "./screens/SettingsScreen"
import StackScreen from "./screens/StackScreen";
import Login from "./screens/Login";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack= createNativeStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator
                initialRouteName="Login"
        >
            <Stack.Screen 
                name="HomeScreen"
                component={MyTabs}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Stack"
                component={StackScreen}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#181818',
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={24} color={color} />
                    ),
                    tabBarBadge: 5,
                    headerShown: false,
                    tabBarVisibile: true,
                    
                }}

            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="brightness-5" size={24} color={color} />
                    ),
                    headerShown: false,

                }}
            />
        </Tab.Navigator>
    )
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}