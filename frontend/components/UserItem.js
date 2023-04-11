import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const UserItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Item</Text>
    </View>
  )
}

export default UserItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
})