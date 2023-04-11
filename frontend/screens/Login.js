import { StyleSheet, Text, View, TextInput } from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { login, getPeople } from '../api';
import { AntDesign } from '@expo/vector-icons';


// Components
import Btn from '../components/Btn'



const Login = ({ navigation }) => {

    const [user, setUser] = useState({
        correo: '',
        clave: ''
    })
    const [hidePassword, setHidePassword] = useState(true)
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const [ error, setError ] = useState('')

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loginStatus = await AsyncStorage.getItem('isAuthenticated')
            if(loginStatus === 'true') {
                setIsAuthenticated(true)
                navigation.navigate('HomeScreen')
            }
        }
        checkLoginStatus()
    }, [])
    
    const handleChange = (name, value) => setUser({...user, [name]: value})
    
    const Login = async () => {
        const data = await login(user)

        if(data.token){
          await AsyncStorage.setItem('isAuthenticated', 'true')
          setIsAuthenticated(true)
          navigation.navigate('HomeScreen')
         //navigation.navigate('HomeScreen')
        }
        else{
            setError(data.error)
        }   
    }

    
    
    const loadPeople = async () => {
        // const data = await getPeople()
        // console.log(data[0].nombre)
    }
    

    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Skool</Text>
        <Text style={styles.subTitle}>Inicia Sesion En tu Cuenta</Text>

        {
            navigation === true ? (
             <Text></Text>
            ) : (
            <Text style={styles.error}>{error}</Text>
        )} 

        <TextInput 
            placeholder='Correo'
            style={styles.textInput}
            onChangeText={(text) => handleChange('correo', text)}
            value={user.correo}
         />
        <TextInput 
            placeholder='Contraseña'
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={(text) => handleChange('clave', text)}
            value={user.clave}
        />
    
        
        <Text style={styles.forgotPassword}>Olvidaste tu contraseña?</Text>
        <Btn login={Login}/>
        
            

        <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 80,
      color: '#181818',
      fontWeight: 'bold'
    },
    subTitle: {
      fontSize: 20,
      color: 'gray'
    },
    textInput: {
      padding: 10,
      paddingStart: 30,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#fff'
    },
    forgotPassword: {
      fontSize: 14, 
      color: 'gray',
      marginTop: 20
    },
    error: {
      color: 'red',
      fontSize: 14
    }
  })

export default Login