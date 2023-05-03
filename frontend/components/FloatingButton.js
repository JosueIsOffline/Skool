import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


const FloatingButton = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Feather name="edit-2" size={24} color="white" />
    </TouchableOpacity>
  </View>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 16,
        right: 16
      },
      button: {
        backgroundColor: '#1DA1F2',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5 // Add elevation for shadow effect on Android
      }
})