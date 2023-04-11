import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
          height: 55,
          width: '100%',
          backgroundColor: '#0541E1',
          justifyContent: 'center',
          alignItems: 'center'
    }}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

