import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonGrade = ({
    course,
    workshop,
    studentsCount, 
    onPress
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.courseText}>{course}</Text>
      <Text style={styles.workshopText}>{workshop}</Text>
        <View style={styles.studentsContainer}>
            <Text style={styles.studentsCount}>{studentsCount}</Text>
            <Text style={styles.studentsLabel}>estudiantes</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ButtonGrade

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0080ff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 40,
        width: '90%',
        marginLeft: 19
      },
      courseText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      workshopText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      studentsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      studentsCount: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 5,
      },
      studentsLabel: {
        color: '#fff',
        fontSize: 18,
      },
})