import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListStudentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ListStudentsScreen</Text>
    </View>
  )
}

export default ListStudentsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})