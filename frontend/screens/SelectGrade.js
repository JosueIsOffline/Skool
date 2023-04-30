import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import ButtonGrade from '../components/ButtonGrade'
import { Axios } from 'axios'
import { BASE_URL } from '../config'

const SelectGrade = ({navigation}) => {

    useEffect(() => {
        
    })

    const grade = [
        {id: 1, name: '4to'},
        {id: 2, name: '5to'},
        {id: 3, name: '6to'}
      ]
      
      const workshop = [
        {id: 1, name: 'Artes Visuales'},
        {id: 2, name: 'Comercio'},
        {id: 3, name: 'Electricidad'},
        {id: 4, name: 'Electronica'},
        {id: 5, name: 'Informatica'},
        {id: 6, name: 'Musica'},
        {id: 7, name: 'Refigeracion'}
      ]

      const ctid = [
        {id: 1, name: '4to - Artes Visuales'},
        {id: 2, name: '5to - Artes Visuales'},
        {id: 3, name: '6to - Artes Visuales'},
        {id: 4, name: '4to - Comercio'},
        {id: 5, name: '5to - Comercio'},
        {id: 6, name: '6to - Comercio'},
        {id: 7, name: '4to - Electricidad'},
        {id: 8, name: '5to - Electricidad'},
        {id: 9, name: '6to - Electricidad'},
        {id: 10, name: '4to - Electronica'},
        {id: 11, name: '5to - Electronica'},
        {id: 12, name: '6to - Electronica'},
        {id: 13, name: '4to - Informatica'},
        {id: 14, name: '5to - Informatica'},
        {id: 15, name: '6to - Informatica'},
        {id: 16, name: '4to - Musica'},
        {id: 17, name: '5to - Musica'},
        {id: 18, name: '6to - Musica'},
        {id: 19, name: '4to - Refigeracion'},
        {id: 20, name: '5to - Refigeracion'},
        {id: 21, name: '6to - Refigeracion'}
      ]
      

  return (
    <ScrollView>
        
        {/* Artes Visuales */}
        <ButtonGrade
          course={grade[0].name}
          workshop={workshop[0].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[0].id
          })}
        />

        <ButtonGrade
          course={grade[1].name}
          workshop={workshop[0].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[1].id
          })}
        />

        <ButtonGrade
          course={grade[2].name}
          workshop={workshop[0].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[2].id
          })}
        />

        {/* Comercio */}
        <ButtonGrade
          course={grade[0].name}
          workshop={workshop[1].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[3].id
          })}
        />

        <ButtonGrade
          course={grade[1].name}
          workshop={workshop[1].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[4].id
          })}
        />

        <ButtonGrade
          course={grade[2].name}
          workshop={workshop[1].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[5].id
          })}
        />

        {/* Electricidad */}
        <ButtonGrade
          course={grade[0].name}
          workshop={workshop[2].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[6].id
          })}
        />

        <ButtonGrade
          course={grade[1].name}
          workshop={workshop[2].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[7].id
          })}
        />

        <ButtonGrade
          course={grade[2].name}
          workshop={workshop[2].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[8].id
          })}
        />

        {/* Electronica */}
        <ButtonGrade
          course={grade[0].name}
          workshop={workshop[3].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[9].id
          })}
        />

        <ButtonGrade
          course={grade[1].name}
          workshop={workshop[3].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[10].id
          })}
        />

        <ButtonGrade
          course={grade[2].name}
          workshop={workshop[3].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[11].id
          })}
        />

        {/* Informatica */}
        <ButtonGrade
          course={grade[0].name}
          workshop={workshop[4].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[12].id
          })}
        />

        <ButtonGrade
          course={grade[1].name}
          workshop={workshop[4].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[13].id
          })}
        />

        <ButtonGrade
          course={grade[2].name}
          workshop={workshop[4].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[14].id
          })}
        />

        {/* Musica */}
        <ButtonGrade
          course={grade[0].name}
          workshop={workshop[5].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[15].id
          })}
        />

        <ButtonGrade
          course={grade[1].name}
          workshop={workshop[5].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[16].id
          })}
        />

        <ButtonGrade
          course={grade[2].name}
          workshop={workshop[5].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[17].id
          })}
        />

        {/* Refigeracion */}
        <ButtonGrade
          course={grade[0].name}
          workshop={workshop[6].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[18].id
          })}
        />

        <ButtonGrade
          course={grade[1].name}
          workshop={workshop[6].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[19].id
          })}
        />

        <ButtonGrade
          course={grade[2].name}
          workshop={workshop[6].name}
          navigation={navigation}
          onPress={() => navigation.navigate('ListStudents', {
            id: ctid[20].id
          })}
        />

    </ScrollView>
    
  )
}

export default SelectGrade

const styles = StyleSheet.create({
   
})