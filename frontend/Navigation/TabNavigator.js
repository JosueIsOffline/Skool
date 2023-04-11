import React, { useContext } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ListStudentsScreen from "../screens/Admin/ListStudentsScreen";
import PostById from '../screens/PostById'

import RegisterUser from "../screens/Admin/RegisterUser";

import { AuthContext } from "../context/AuthContext";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
         component={HomeScreen} 
         name="Home" 
         options={{headerShown: false}}
         />
        <Stack.Screen 
          component={PostById} 
          name="PostId" 
          options={({route}) => ({
            title: route.params?.name,
           })}/>
      </Stack.Navigator>
    )
}

const TabNavigator = () => {
    const {userInfo} = useContext(AuthContext)
    const verify = userInfo.user.RoleId 

    if(verify === 1) {
        return (
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarInactiveTintColor: '#181818',
                tabBarActiveTintColor: 'red'
            }}>
                <Tab.Screen name='Home2' component={HomeStack} options={({route}) => ({
                    tabBarStyle: {display: getTabBarVisibility(route)},
                    tabBarBadge: 7,
                    tabBarBadgeStyle: {marginTop: 20},
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='home-outline' color={color} size={size} />
                    )
                })}/>
            </Tab.Navigator>
        )
    }
    else if(verify === 2) {
        return (
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarInactiveTintColor: '#181818',
                tabBarActiveTintColor: 'red'
            }}>
                <Tab.Screen name='Home2' component={HomeStack} options={({route}) => ({
                    tabBarStyle: {display: getTabBarVisibility(route)},
                    tabBarBadge: 7,
                    tabBarBadgeStyle: {marginTop: 20},
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='home-outline' color={color} size={size} />
                    )
                })}/>
            </Tab.Navigator>
        )
    }
    else if(verify === 3) {
        return(
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarInactiveTintColor: '#181818',
                tabBarActiveTintColor: 'red'
            }}>
                <Tab.Screen name='Home2' component={HomeStack} options={({route}) => ({
                    tabBarStyle: {display: getTabBarVisibility(route)},
                    tabBarBadge: 7,
                    tabBarBadgeStyle: {marginTop: 20},
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='home-outline' color={color} size={size} />
                    )
                })}/>
                <Tab.Screen name='ListStudent' component={ListStudentsScreen} options={{
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name='list-alt' color={color} size={size} />
                    )
                }}/>
                <Tab.Screen name='CreateUsers' component={RegisterUser} options={{
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name='users' color={color} size={size} />
                    )
                }}
                
                />
            </Tab.Navigator>
        )
    }
    
}

const getTabBarVisibility = route => {
    // console.log(route)
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'
    // console.log(routeName)

    if(routeName == 'PostId') {
        return 'none'
    }
    return 'flex'
}

export default TabNavigator;