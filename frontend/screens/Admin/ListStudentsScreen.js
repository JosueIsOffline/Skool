import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import Axios from 'axios'
import { BASE_URL } from '../../config'
import { AntDesign } from '@expo/vector-icons'


const ListStudentsScreen = ({route}) => {


  
  const [students, setStudents] = useState([])
  

  useEffect(() => {
    Axios.get(`${BASE_URL}/liststudents/${route.params.id}`)
    .then(res => {
      console.log(route.params.id)
      setStudents(res.data)
    })
  }, [route.params.id])

  

  
  const oneStudent = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
        <View style={styles.avatarContainer}>
          <AntDesign style={styles.icon}size={50} name='user'/>
        </View>
        <Text style={styles.name}>{item.correo}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const headerComponent = () => {
    return (
      <Text style={styles.listHeadLine}>Students</Text>
    )
  }
 
  const itemSeparator = () => {
    return (
      <View style={styles.separator}/>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          data = { students }
          renderItem= {oneStudent}
          ListEmptyComponent={<Text>There are no students registered</Text>}
          ItemSeparatorComponent={itemSeparator}
        />
    </SafeAreaView>
  )
}

export default ListStudentsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: '#CCC'
    },
    listHeader: {
      height: 55,
      alignItems: 'center',
      justifyContent: 'center'

    },
    listHeadLine: {
      color: '#000',
      fontSize: 25
    },
    item: {
      flex: 1,
      flexDirection: 'row',    
      alignItems: 'center',
      paddingVertical: 13,    
    },
    avatarContainer: {        
      backgroundColor: '#D9D9D9',
      borderRadius: 100,
      height: 89,
      width: 89,
      justifyContent: 'center',
      alignItems: 'center',    
      marginLeft: 10
    },
    
    icon: {
      size: 400
    },
  
    name: {
      fontWeight: '600',
      fontSize: 20,
      marginLeft: 13,
    },
})