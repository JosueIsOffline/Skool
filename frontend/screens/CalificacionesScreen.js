
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Axios  from 'axios';
import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext'
import { ScrollView } from 'react-native-gesture-handler';

const CalificacionesScreen = ({route}) => {
  const [calificaciones, setCalificaciones] = useState([]);
  let result = 0

  const handleChange = (index, value) => {
    const newCalificaciones = [...calificaciones];
    newCalificaciones[index] = value;
    setCalificaciones(newCalificaciones);
  }
  const {userInfo} = useContext(AuthContext)
  const ProfesorId = userInfo.user.id
  const EstudianteId = route.params.id
  
  //const [number, setNumber] = useEffect(null)
  
  let verify = 1


  const total = () => {
    
    const calificacionesNumeros = calificaciones.map((calificacion) => parseInt(calificacion));
    result = Math.round((calificacionesNumeros[0] + 
      calificacionesNumeros[1] + 
      calificacionesNumeros[2] + 
      calificacionesNumeros[3] + 
      calificacionesNumeros[4] +
      calificacionesNumeros[5] +
      calificacionesNumeros[6] +
      calificacionesNumeros[7]) 
      / 7)
    calificaciones[8] = Math.min(result, 100)
    return calificaciones[8]
  }

  const handleSave = () => {
    // Aquí puedes hacer lo que quieras con las calificaciones guardadas
    Axios.post(`${BASE_URL}/calificaciones`,{
      lengua_española: calificaciones[0].toString(),
      matematicas: calificaciones[1].toString(),
      ciencias_naturales: calificaciones[2].toString(),
      ciencias_sociales: calificaciones[3].toString(),
      ingles: calificaciones[4].toString(),
      fihr: calificaciones[5].toString(),
      educacion_artistica: calificaciones[6].toString(),
      educacion_fisica: calificaciones[7].toString(),
      total: total(),
      ProfesorId: ProfesorId,
      EstudianteId: EstudianteId,
    })
    .then(res => {
      console.log(res.data)
    })
    console.log(calificaciones);
  }

  let num

  useEffect(() => {
    Axios.get(`${BASE_URL}/verifyp/${EstudianteId}`)
    .then(res => {
      num = res.data[0].id
      console.log(num)
    })
  }, [])
  

  

 if(verify == 1){
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.titulo}>Calificaciones</Text>
      <View style={styles.estudiante}>
        {/* {
          number == 1 ? (
            <Text style={styles.nombre}>P1</Text>
          ) :
          (
            <Text style={styles.nombre}>Cargando...</Text>
          )
        } */}
       

        <View style={styles.calificaciones}>
          <Text>Spanish Language:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(0, text)}
            value={calificaciones[0]}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.calificaciones}>
          <Text>Mathematics:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(1, text)}
            value={calificaciones[1]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Natural Sciences:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(2, text)}
            value={calificaciones[2]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Social Sciences:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(3, text)}
            value={calificaciones[3]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>English:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(4, text)}
            value={calificaciones[4]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>FIHR:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(5, text)}
            value={calificaciones[5]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Art Education:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(6, text)}
            value={calificaciones[6]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Physical Education:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(7, text)}
            value={calificaciones[7]}
            keyboardType="numeric"
          />
        </View>


        <View style={styles.calificaciones}>
          <Text>Total P1:</Text>
          <Text style={styles.total}>{total()}</Text>
        </View>
        
        
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar calificaciones</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
 }
 else if(verify === 2){
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.titulo}>Calificaciones</Text>
      <View style={styles.estudiante}>
        <Text style={styles.nombre}>P2</Text>

        <View style={styles.calificaciones}>
          <Text>Spanish Language:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(0, text)}
            value={calificaciones[0]}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.calificaciones}>
          <Text>Mathematics:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(1, text)}
            value={calificaciones[1]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Natural Sciences:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(2, text)}
            value={calificaciones[2]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Social Sciences:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(3, text)}
            value={calificaciones[3]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>English:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(4, text)}
            value={calificaciones[4]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>FIHR:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(5, text)}
            value={calificaciones[5]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Art Education:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(6, text)}
            value={calificaciones[6]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Physical Education:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(7, text)}
            value={calificaciones[7]}
            keyboardType="numeric"
          />
        </View>


        <View style={styles.calificaciones}>
          <Text>Total P2:</Text>
          <Text style={styles.total}>{total()}</Text>
        </View>
        
        
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar calificaciones</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
 }
 else if(verify === 3){
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.titulo}>Calificaciones</Text>
      <View style={styles.estudiante}>
        <Text style={styles.nombre}>P3</Text>

        <View style={styles.calificaciones}>
          <Text>Spanish Language:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(0, text)}
            value={calificaciones[0]}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.calificaciones}>
          <Text>Mathematics:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(1, text)}
            value={calificaciones[1]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Natural Sciences:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(2, text)}
            value={calificaciones[2]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Social Sciences:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(3, text)}
            value={calificaciones[3]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>English:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(4, text)}
            value={calificaciones[4]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>FIHR:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(5, text)}
            value={calificaciones[5]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Art Education:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(6, text)}
            value={calificaciones[6]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Physical Education:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(7, text)}
            value={calificaciones[7]}
            keyboardType="numeric"
          />
        </View>


        <View style={styles.calificaciones}>
          <Text>Total P3:</Text>
          <Text style={styles.total}>{total()}</Text>
        </View>
        
        
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar calificaciones</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
 }
  if(verify === 4){
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.titulo}>Calificaciones</Text>
      <View style={styles.estudiante}>
        <Text style={styles.nombre}>P4</Text>

        <View style={styles.calificaciones}>
          <Text>Spanish Language:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(0, text)}
            value={calificaciones[0]}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.calificaciones}>
          <Text>Mathematics:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(1, text)}
            value={calificaciones[1]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Natural Sciences:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(2, text)}
            value={calificaciones[2]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Social Sciences:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(3, text)}
            value={calificaciones[3]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>English:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(4, text)}
            value={calificaciones[4]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>FIHR:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(5, text)}
            value={calificaciones[5]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Art Education:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(6, text)}
            value={calificaciones[6]}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.calificaciones}>
          <Text>Physical Education:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange(7, text)}
            value={calificaciones[7]}
            keyboardType="numeric"
          />
        </View>


        <View style={styles.calificaciones}>
          <Text>Total P4:</Text>
          <Text style={styles.total}>{total()}</Text>
        </View>
        
        
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar calificaciones</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
 }
}
export default CalificacionesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  estudiante: {
    marginBottom: 20,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calificaciones: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  total: {
    height: 40,
    width: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    paddingTop: 7,
    paddingLeft: 20
  }
});