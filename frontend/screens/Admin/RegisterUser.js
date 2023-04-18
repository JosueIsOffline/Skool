import { StyleSheet, 
  Text, 
  View, 
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Platform,
  Keyboard
   } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import DateTimePicker from '@react-native-community/datetimepicker'
import CustomDropdown from '../../components/CustomDropdown'


const sex= [
  {id: 1, name: 'Male'},
  {id: 2, name: 'Female'},
  {id: 3, name: 'Other'}
]

const role = [
  {id: 1, name: 'Student'},
  {id: 2, name: 'Teacher'},
  {id: 3, name: 'Parent'}
]

const RegisterUser = () => {
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [date, setDate] = useState(new Date())
  const [inputs, SetInputs] = useState({
    name: '',
    lastname: '',
    direction: '',
    telephone: '',
    username: '',
    password: ''
  })

  const [selectedSex, setSelectedSex] = useState(null)
  const [selectedRole, setSelectedRole] = useState(null)

  const onSelectSex = (item) => {
    setSelectedSex(item)
    
  }

  const onSelectRole = (item) => {
    setSelectedRole(item)
    
  }
  

  const toggleDatepicker = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate
      setDate(currentDate)
      
      if(Platform.OS === 'android') {
        toggleDatepicker()
        setDateOfBirth(formatDate(currentDate))
      }

    } else {
      toggleDatepicker()
    }
  }

  const formatDate = (rawDate) => {
    let date = new Date(rawDate)

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    month = month < 10 ? `0${month}` : month
    day = day < 10 ? `0${day}` : day

    return `${day}/${month}/${year}`
  }

  const validate = () => {
    Keyboard.dismiss()
    if(!inputs.name) {

    }
  }

  const handleOnChange = (text, input) => {
    SetInputs((prevState) =>({...prevState, [input]: text}))
    console.log(inputs, `Date: ${dateOfBirth}`)
    console.log(`${selectedSex.name}, \n${selectedRole.name}`)
    
  }

 
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}
        >
          <Text style={styles.textR}>
            Register
          </Text>
          <Text style={styles.textE}>
            Enter Details to Register
          </Text>
          <View style={styles.view1}>
              <Input 
                placeholder='Enter the name' 
                iconName='drive-file-rename-outline' 
                label="Name"
                onChangeText = {(text) => handleOnChange(text, 'name')}
              />
              <Input 
                placeholder='Enter the lastname' 
                iconName='drive-file-rename-outline' 
                label="Lastname"
                onChangeText = {(text) => handleOnChange(text, 'lastname')}
              />

              <Input 
                placeholder='Enter the direction'
                iconName='directions'
                label='Direction'
                onChangeText = {(text) => handleOnChange(text, 'direction')}
              />

              <Input 
                placeholder='Enter the telephone numbre'
                iconName='phone'
                label='Telephone'
                onChangeText = {(text) => handleOnChange(text, 'telephone')}
              />

              <Input 
                placeholder='Enter the username'
                iconName='person'
                label='Username'
                onChangeText = {(text) => handleOnChange(text, 'username')}
              />

              <Input  
                placeholder='Enter the password'
                iconName='lock'
                password
                label='Password'
                onChangeText = {(text) => handleOnChange(text, 'password')}
              />


              {showPicker && (
                <DateTimePicker 
                  mode='date'
                  display='spinner'
                  value={date}
                  onChange={onChange}
                  maximumDate={new Date()}
                />
              )}

              <Text style={styles.label}>Date Of Birth</Text>
              {!showPicker && (
              <Pressable
                  onPress={toggleDatepicker}
              >
                <TextInput
                  style={styles.inputContainer}
                  placeholder='DD/MM/YYYY'
                  editable={false}
                  onChangeText={setDateOfBirth}
                  value={dateOfBirth}
                />
              </Pressable>
              )}
              <CustomDropdown 
                label='Sex'
                placeholder='Select Sex'
                data={sex}
                onSelect={onSelectSex}
                value={selectedSex}
              />

              <CustomDropdown 
                label='Role'
                placeholder='Select Rol'
                data={role}
                onSelect={onSelectRole}
                value={selectedRole}
              />


              
  
              <Button title='Register' onPress={validate}/>
          </View>
 
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterUser

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
    flex: 1
  },
  textR: {
    color: '#5E5B5B',
    fontSize: 40,
    fontWeight: 'bold'
  },
  textE: {
    color: '#9F9F9F',
    fontSize: 18,
    marginVertical: 10
  },
  view1: {
    marginVertical: 20
  },
  label: {
    fontSize: 14,
    color: '#2A2929',
    marginTop: 5
  },
  inputContainer: {
    height: 55,
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    marginVertical: 30,
    marginTop: 5,
    marginBottom: 25
}

})