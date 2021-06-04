import { StatusBar } from 'expo-status-bar'
import React, { useState, ChangeEvent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native'

export default function App() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleEmailChange = (text: string) => {
    setEmail(text)
  }

  const handlepasswordChange = (text: string) => {
    setPassword(text)
  }

  const handleSubmit = () => {
    if (email === '' || password === '') return

    setSubmit(true)
    clearInput()

    setTimeout(() => {
      setSubmit(false)
    }, 3000)
  }

  const clearInput = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="JohnDoe@exemple.com"
          onChangeText={handleEmailChange}
          value={email}
        ></TextInput>
      </View>

      <View>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={handlepasswordChange}
          secureTextEntry={true}
          value={password}
        ></TextInput>
      </View>

      <Button title="Send Data" onPress={handleSubmit}></Button>

      {submit && (
        <Text style={styles.submit}>
          Your data has been successfully submitted
        </Text>
      )}

      <TouchableOpacity onPress={handleSubmit}></TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'justify',
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 3,
  },
  button: {
    backgroundColor: 'grey',
    color: 'white',
    width: 200,
    padding: 5,
    borderRadius: 5,
  },

  submit: {
    color: 'green',
  },
})
