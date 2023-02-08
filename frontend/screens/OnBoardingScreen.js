import {
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    TouchableOpacity
  } from 'react-native';
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const OnBoardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 30}}>
        <Text style={styles.textSkool}>SKOOL</Text>
      </View>
      <View style={styles.view}>
      <MaterialIcons style={styles.icon} name='school' size={300} color='#181818'/>
      </View>
     
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textC}>Comencemos</Text>
        <MaterialIcons name='arrow-forward' size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textSkool: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#181818'
    },
    textC: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18
    },
    btn: {
      backgroundColor: '#181818',
      padding: 20,
      width: '90%',
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 50
    },
    icon: {
      transform: [{rotate: '-15deg'}]
    },
    view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });