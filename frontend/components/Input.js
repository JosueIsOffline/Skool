import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'


const Input = ({
    label, 
    iconName, 
    error, 
    password, 
    onFocus= () => {},
    ...props
 }) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hidePassword, setHidePassword] = React.useState(password)

  return (
    <View style={styles.view1}>
      <Text style={styles.label}>
        {label}
      </Text>
      <View 
        style={[
            styles.inputContainer, 
            {
              borderColor: error 
              ? '#FF0000'
              : isFocused 
              ? '#0541E1'
              : '#6C6C6C'},
        ]}>
        <AntDesign name={iconName} style={{
            fontSize: 22,
            color: '#0541E1',
            marginRight: 10
        }}/>
        <TextInput 
            secureTextEntry={hidePassword}
            autoCorrect={false}
            onFocus={() => {
                onFocus()
                setIsFocused(true)
            }}
            onBlur={() => {
                setIsFocused(false)
            }}
            style={{color: '#6C6C6C', flex: 1}} 
            {...props}
        />
        {password && (
            <Feather 
                onPress={() => setHidePassword(!hidePassword)}
                style={{fontSize: 22, color: '#0541E1'}} 
                name={hidePassword ? 'eye' : 'eye-off'}
            />
        )}
        
      </View>
       {error && (
            <Text style={{color: '#FF0000', fontSize: 12, marginTop: 7}}>
            {error}
          </Text>
       )}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    view1: {
        marginBottom: 20
    },
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: '#2A2929'
    },
    inputContainer: {
        height: 55,
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center'
    }
})