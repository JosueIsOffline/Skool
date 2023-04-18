import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={onPress} 
      style={{
          height: 55,
          width: '100%',
          backgroundColor: '#0541E1',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 30
    }}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

