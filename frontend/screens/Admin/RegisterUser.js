import { StyleSheet, 
  Text, 
  View, 
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Platform,
  Keyboard,
  Alert
   } from 'react-native'
import React, { useContext, useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import DateTimePicker from '@react-native-community/datetimepicker'
import CustomDropdown from '../../components/CustomDropdown'
import Loader from '../../components/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RegisterContext } from '../../context/RegisterContext'
import { AuthContext } from '../../context/AuthContext'


const sex= [
  {id: 1, name: 'Male'},
  {id: 2, name: 'Female'},
  {id: 3, name: 'Other'}
]

const role = [
  {id: 1, name: 'Teacher'},
  {id: 2, name: 'Student'},
  {id: 3, name: 'Parent'}
]

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

const cursotallerid = [
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

const RegisterUser = ({navigation}) => {
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
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const [selectedSex, setSelectedSex] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [selectedWorkshop, setSelectedWorkshop] = useState()
  const [selectedGrade, setSelectedGrade] = useState()
  const [idCT, setIdCT] = useState()

  const onSelectSex = (item) => {
    setSelectedSex(item.name)
    
  }

  const onSelectRole = (item) => {
    setSelectedRole(item.id)
  }

  const onSelectGrade = (item) => {
    setSelectedGrade(item.id)
  }

  const onSelectWorkshop = (item) => {
    setSelectedWorkshop(item.id)
  }

  const selectCourstallerId = () => {
    
    if(selectedGrade == 1 && selectedWorkshop == 1){

       return setIdCT(cursotallerid[0,0].id)

    }else if(selectedGrade == 2 && selectedWorkshop == 1){  

       return setIdCT(cursotallerid[0,1].id)

    }else if(selectedGrade == 3 && selectedWorkshop == 1){  

      return setIdCT(cursotallerid[0,2].id)

   }
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

    return `${year}/${month}/${day}`
  }

  const validate = () => {
    Keyboard.dismiss()
    let valid = true
    if(!inputs.name) {
      handleError('Please input name', 'name')
      valid = false
    } 
    if(!inputs.lastname){
      handleError('Please input lastname', 'lastname')
    }
    if(!inputs.direction){
      handleError('Please input direction', 'direction')
    }
    if(!inputs.telephone){
      handleError('Please input telephone number', 'telephone')
    }
    if(!inputs.username){
      handleError('Please input username', 'username')
    }
    if(!inputs.password){
      handleError('Please input password', 'password')
    } else if(inputs.password.length < 8){
      handleError('Min password length of 5', 'password')
    }

     
    //console.log(idCT, selectedRole)
    // console.log(cursotallerid[0,1].id)
    
    // selectCourstallerId()
    // selectCourstallerId()
    console.log(selectedWorkshop)


    
    if(valid){
        register();
    }

  }

  const {registerPeople, registerLogin} = useContext(AuthContext)

  const register = () => {
      setLoading(true)
      setTimeout(() => { 
        setLoading(false)

        try {
          //AsyncStorage.setItem('user',JSON.stringify(inputs))
          registerPeople(
            inputs.name,
            inputs.lastname,
            dateOfBirth,
            selectedSex,
            inputs.direction,
            inputs.telephone 
          )
          registerLogin(inputs.username, inputs.password, selectedGrade, selectedRole)
          navigation.navigate('Home')
        } catch (error) {
          Alert.alert('Error', 'Something went wrong')
          //console.log(error)
        }
      }, 3000)
  }

  const handleOnChange = (text, input) => {
    SetInputs((prevState) =>({...prevState, [input]: text}))
    // console.log(inputs, `Date: ${dateOfBirth}`)
    // console.log(`${selectedSex.name}, \n${selectedRole.name}`)
    
  }

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}))
  }
   
 
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Loader visible={loading}/>
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
                error={errors.name}
                onFocus={() => {
                  handleError(null, 'name')
                }}
                onChangeText = {(text) => handleOnChange(text, 'name')}
              />
              <Input 
                placeholder='Enter the lastname' 
                iconName='drive-file-rename-outline' 
                label="Lastname"
                error={errors.lastname}
                onFocus={() => {
                  handleError(null, 'lastname')
                }}
                onChangeText = {(text) => handleOnChange(text, 'lastname')}
              />

              <Input 
                placeholder='Enter the direction'
                iconName='directions'
                label='Direction'
                error={errors.direction}
                onFocus={() => {
                  handleError(null, 'direction')
                }}
                onChangeText = {(text) => handleOnChange(text, 'direction')}
              />

              <Input 
                placeholder='Enter the telephone number'
                iconName='phone'
                label='Telephone'
                error={errors.telephone}
                onFocus={() => {
                  handleError(null, 'telephone')
                }}
                onChangeText = {(text) => handleOnChange(text, 'telephone')}
              />

              <Input 
                placeholder='Enter the username'
                iconName='person'
                label='Username'
                error={errors.username}
                onFocus={() => {
                  handleError(null, 'username')
                }}
                onChangeText = {(text) => handleOnChange(text, 'username')}
              />

              <Input  
                placeholder='Enter the password'
                iconName='lock'
                password
                label='Password'
                error={errors.password}
                onFocus={() => {
                  handleError(null, 'password')
                }}
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
                  placeholder='YYYY/DD/MM'
                  editable={false}
                  onChangeText={setDateOfBirth}
                  value={dateOfBirth}
                />
              </Pressable>
              )}
              <CustomDropdown 
                label='Sex'
                placeholder='Select Sex'
                heightt={190}
                data={sex}
                onSelect={onSelectSex}
                value={selectedSex}
              />

              <CustomDropdown 
                label='Role'
                placeholder='Select Rol'
                heightt={190}
                data={role}
                onSelect={onSelectRole}
                value={selectedRole}
              />
            
              <CustomDropdown 
                label='Grade '
                placeholder='Select Grade'
                heightt={1190}
                data={cursotallerid}
                onSelect={onSelectGrade}
                value={selectedGrade}
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