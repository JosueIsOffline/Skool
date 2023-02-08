import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useContext, useState} from 'react'

import { MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  
  const {login} = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons style={styles.icon} name='bookshelf' size={300} color='#181818'/>
        </View>
        <Text style={styles.textLogin}>Login To Skool</Text>
        
        <View style={styles.viewInput}>
          <MaterialIcons 
            name='alternate-email' 
            size={20} color='#181818' 
            style={{marginRight: 5}} 
          />
          <TextInput 
            style={styles.input} 
            placeholder='Email ID'
            keyboardType='email-address' 
            value={email}
            onChangeText={text => setEmail(text)}
          />  
        </View>

        <View style={styles.viewInput}>
          <Ionicons 
            name='lock-closed-outline' 
            size={20} color='#181818' 
            style={{marginRight: 5}} 
          />
          <TextInput 
            style={styles.input} 
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />  

          <TouchableOpacity onPress={() => {}}>
            <Text style={{color:'#181818', fontWeight: '700'}}>Olvidaste</Text>
          </TouchableOpacity>
        </View> 
        <TouchableOpacity style={styles.btnLogin} onPress={() => {login(email, password)}}>
          <Text style={{textAlign: 'center', color: '#fff', fontWeight: '700'}}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>O, inicia con...</Text>

        <View style={{alignItems:'center', justifyContent: 'space-between', marginBottom:30}}>
          <TouchableOpacity style={styles.iconS}>
            <AntDesign name='google' size={24} color='#181818' />
          </TouchableOpacity>
        </View>
       
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center'
    },
    textLogin: {
      fontSize: 28,
      fontWeight: '500',
      color: '#181818',
      marginBottom: 30
    },
    icon: {
      transform: [{rotate: '-5deg'}]
    },
    viewInput: {
      flexDirection: 'row',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingBottom: 8,
      marginBottom: 25
    },
    input: {
      flex: 1,
      paddingVertical: 0
    },
    btnLogin: {
      backgroundColor: '#181818',
      padding: 20,
      borderRadius: 10,
      marginBottom: 30
    }, 
    iconS: {
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 10
    }
})