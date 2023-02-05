import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';



const Button = ({login}) => {
  return (
      <TouchableOpacity
        onPress={login}
        style={styles.button}
      >
        <Text style={styles.text}>Iniciar Sesion</Text>
      </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#fff',
        marginTop: 1,
        fontWeight: 'bold'
    },
    button: {
        width: '50%',
        height: 50,
        backgroundColor: '#181818',
        padding: 10,
        marginTop: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    } 
})

export default Button

