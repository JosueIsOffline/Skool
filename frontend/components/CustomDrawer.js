import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { 
    DrawerContentScrollView, 
    DrawerItemList,  
} from '@react-navigation/drawer'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../context/AuthContext'

const CustomDrawer = (props) => {
  const {logout} = useContext(AuthContext)
  return (
    <View style={styles.container}>
        <DrawerContentScrollView 
            {...props}
            contentContainerStyle={{backgroundColor: '#181818'}}>
             <AntDesign style={styles.user} name='user' color='#fff' size={40}/>
             <Text style={styles.textUser}>Josue Hernandez</Text>
             <View style={styles.viewItemList}>
                <DrawerItemList {...props} />
             </View>
        </DrawerContentScrollView>

        <View style={styles.viewBottom}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='share-social-outline' size={22} />
                    <Text style={styles.textShare}>Avisale a un compañero</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical:15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='exit-outline' size={22} />
                    <Text style={styles.textShare}>Cerrar Sesion</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    user: {
        borderRadius: 40,
        marginBottom: 10
    },
    textUser: {
        color: '#fff',
        fontSize: 18
    },
    viewItemList: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    viewBottom: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },
    textShare: {
        fontSize: 15,
        marginLeft: 5
    }
})