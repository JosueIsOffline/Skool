import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import Axios from 'axios'
import { BASE_URL } from '../../config'


const ListStudentsScreen = () => {


  const { listStudent } = useContext(AuthContext)
  const {students, setStudents} = useState([])

  useEffect(() => {
    Axios.get(`${BASE_URL}/people`)
    .then(res => {
      const studentsData = res.data.map(student => {
        return {
          id: student.id,
          nombre: student.nombre
        }
      })
      setStudents(studentsData)
    })
  }, [])

  

  
  const oneUser = ({item}) => {
    return (<Text>{item.nombre}</Text>)
  }

 
  return (
    <View style={styles.container}>
      <FlatList
        data = { students }
        renderItem= {oneUser}
      />
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