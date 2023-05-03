import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useContext } from 'react'
import Axios  from 'axios';
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../config';
import CustomDropdown from '../components/CustomDropdown';
import { ScrollView } from 'react-native-gesture-handler';

const GradeScreen = () => {
  

  const {userInfo} = useContext(AuthContext)
  const EstudianteId = userInfo.user.id

//   useEffect(() => {
//     Axios.get(`${BASE_URL}/getgrades/${EstudianteId}`)
//     .then(res => {
//         console.log(res.data)
//     })
//   })

  // Sample data for demonstration purposes
  const grades = [
    { subject: 'Spanish Language', grade: 1},
    { subject: 'Mathematics', grade: 1},
    { subject: 'Natural Sciences', grade: 1},
    { subject: 'Social Sciences', grade: 1},
    { subject: 'English', grade: 1},
    { subject: 'FIHR', grade: 1},
    { subject: 'Art Education', grade:1},
    { subject: 'Physical Education', grade:1},
  ];

  const periodos = [
    {id: 1, p:'P1'},
    {id: 2, p:'P2'},
    {id: 3, p:'P3'},
    {id: 4, p:'P4'}
  ]

  // Calculate the average grade for the P1 period
  const totalGrades = grades.reduce((acc, grade) => acc + grade.grade, 0);
  const averageGrade = totalGrades / grades.length;

  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.title}>P1 Grades</Text>
      <CustomDropdown
        label='P?'
        placeholder='Select a P'
        heightt={190}
        data={periodos}
      />
      <View style={styles.gradesContainer}>
        {grades.map((grade, index) => (
          <View style={styles.gradeItem} key={index}>
            <Text style={styles.gradeSubject}>{grade.subject}</Text>
            <Text style={styles.gradeValue}>{grade.grade}</Text>
          </View>
        ))}
      </View>
      <View style={styles.averageContainer}>
        <Text style={styles.averageLabel}>Average</Text>
        <Text style={styles.averageValue}>{averageGrade.toFixed(1)}</Text>
      </View>
    </View>
    </ScrollView>
  );
}

export default GradeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingTop: 50
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16
    },
    gradesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 30
    },
    gradeItem: {
      width: '50%',
      padding: 8
    },
    gradeSubject: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    gradeValue: {
      fontSize: 16
    },
    averageContainer: {
      marginTop: 32,
      flexDirection: 'row',
      alignItems: 'center'
    },
    averageLabel: {
      fontSize: 20,
      fontWeight: 'bold',
      marginRight: 16
    },
    averageValue: {
      fontSize: 20
    }
  });