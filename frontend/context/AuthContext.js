import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { Alert } from "react-native";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [PersonId, setPersonId] = useState(null)
    const [id, setId] = useState(null)

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

    const registerPeople = (
        nombre,
        apellido,
        f_nacimiento,
        sexo,
        direccion,
        telefono
    ) => {
        axios.post(`${BASE_URL}/people` ,{
             nombre,
             apellido,
             f_nacimiento,
             sexo,
             direccion,
             telefono
        })
        .then(res => {
            setPersonId(res.data)
        })
        .catch(e => {
            console.log(`Login error ${e}`)
        })

        // console.log(`${nam} \n ${lastanme} \n ${borndate} \n ${sex} \n ${direction} \n ${telephone}`)
    }

    const registerLogin = (correo, clave, CursotallerId, RoleId) => {
        axios.post(`${BASE_URL}/auth`, {
            correo, 
            clave,
            CursotallerId,
            PersonId,
            RoleId
        })
        .then(res => {
            Alert.alert('Success', res.data)
        })
        .catch(e => {
            console.log(`Error: ${e}`)
        })
    }


    const listStudent = (setUser) => {
        axios.get(`${BASE_URL}/people`).then(res => {
            
        }).catch(e => {
            console.log(e)
        })
    }

    const prub = () => {
        axios.get(`${BASE_URL}/verifyp/${EstudianteId}`)
        .then(res => {
           setId(res.data[0].id)
        })
      }

    return (
        <AuthContext.Provider value={{
            login,
            logout, 
            isLoading, 
            userToken, 
            userInfo, 
            registerPeople, 
            registerLogin,
            listStudent, 
            prub,
            id

        }}>
            {children}
        </AuthContext.Provider>
    )
}