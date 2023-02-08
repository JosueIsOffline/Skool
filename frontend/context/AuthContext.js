import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    const login = (correo, clave) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/auth/login`, {
            correo,
            clave
        })
        .then(res => {
            let userInfo = res.data
            setUserInfo(userInfo)
            setUserToken(userInfo.token)

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            AsyncStorage.setItem('userToken', userInfo.token)

            console.log(userInfo)
            console.log('User Token: ' + userInfo.token)
        })
        .catch(e =>  {
            console.log(`Login error ${e}`)
        })

      
        
        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        setUserToken(null)
        AsyncStorage.removeItem('userInfo')
        AsyncStorage.removeItem('userToken')
        setIsLoading(false)
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userInfo = await AsyncStorage.getItem('userInfo')
            let userToken = await AsyncStorage.getItem('userToken')
            userInfo = JSON.parse(userInfo)

            if(userInfo){
                setUserToken(userToken)
                setUserInfo(userInfo)
            }
            setIsLoading(false)
        } catch (e) {
            console.log(`isLogged in error ${e}`)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
            {children}
        </AuthContext.Provider>
    )
}