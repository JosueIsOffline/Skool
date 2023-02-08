import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostById = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>{route.params?.name}</Text>
      <Text>@{route.params?.id}</Text>
      <Text>{route.params?.tweet}</Text>
    </View>
  )
}

export default PostById

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})