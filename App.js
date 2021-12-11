import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const App = () => {
  const [name, SetName] = useState("");
  const [edadI, setEdad] = useState(0);
  const [message, setMessage] = useState('')

  const validacion = () => {
    let edad = edadI;

    if (name == "") {
      Alert.alert("Put your name")
      // alert("Put your name")
      setMessage("Put your name")

    } else {
      if (edad < 0 || edad % 1 != 0) {
        Alert.alert("Put only positive integer values")
        // alert("Put only positive integer values")
        setMessage("Put only positive integer values")
      } else {
        if (edad < 1 || edad > 99) {
          Alert.alert("Only put values between 1 and 99")
          // alert("Only put values between 1 and 99")
          setMessage("Only put values between 1 and 99")
        } else {
          let valor1
          let valor2
          if (edad < 10) {
            edad = edad * 7
            while (edad > 10) {
              valor1 = Math.floor(edad / 10)
              valor2 = edad % 10
              edad = valor1 + valor2
            }
            Alert.alert(edad.toString())
            // alert(edad.toString())
            setMessage('Your lucky number is ' + edad.toString())
          } else {
            while (edad > 10) {
              valor1 = Math.floor(edad / 10)
              valor2 = edad % 10
              edad = valor1 + valor2
            }
            Alert.alert(edad.toString())
            // alert(edad.toString())
            setMessage('Your lucky number is ' + edad.toString())
          }
        }
      }
    }
  }

  const reset = () => {
    SetName('')
    setEdad('')
    setMessage('')
  }

  return (
    <View style={styles.Body}>
      <Text style={styles.LuckyNumberText}>Lucky Number</Text>
      <Image source={require('./assets/love.png')} style={styles.Image} />
      <TextInput
        style={styles.Input}
        placeholder="Enter your name"
        value={name}
        onChangeText={SetName}
      ></TextInput>


      <TextInput
        style={styles.Input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={edadI}
        onChangeText={setEdad}
      ></TextInput>

      <TouchableOpacity
        style={styles.Boton}
        onPress={validacion}
      >
        <Text style={styles.TextoBoton}>Get my lucky number</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.BotonReset}
        onPress={reset}
      >
        <Text style={styles.TextoBoton}>Reset</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.TextoBoton}>{message}</Text>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  Body: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#444CA2'
  },
  LuckyNumberText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    color: 'white'
  },
  Image: {
    width: 150,
    height: 130,
  },
  Input: {
    width: '50%',
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 15,
    margin: 5,
    borderRadius: 5,
    padding:8
  },
  Boton: {
    width: '60%',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  BotonReset: {
    width: '40%',
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    margin: 15
  },
  TextoBoton: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: 'white'
  }
})  