import { StyleSheet, 
  Text, 
  View, 
  TextInput,
  SafeAreaView,
  ScrollView,
   } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'


const RegisterUser = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}
        >
          <Text style={styles.textR}>
            Register
          </Text>
          <Text style={styles.textE}>
            Enter Details to Register
          </Text>
          <View style={styles.view1}>
              <Input 
                placeholder='Enter the username' 
                iconName='user' 
                label="Username"
              />
              <Input 
                placeholder='Enter the password' 
                iconName='lock' 
                label="Password"
                password
              />
              <Button title='Register' />
          </View>
 
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterUser

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
    flex: 1
  },
  textR: {
    color: '#5E5B5B',
    fontSize: 40,
    fontWeight: 'bold'
  },
  textE: {
    color: '#9F9F9F',
    fontSize: 18,
    marginVertical: 10
  },
  view1: {
    marginVertical: 20

  }

})