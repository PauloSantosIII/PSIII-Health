import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration } from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

const Form = () => {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('preencha o peso e altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const [errorMessage, setErrorMessage] = useState(null)

  function imcCalculator() {
    return setImc((weight/(height^2)).toFixed(2))
  }

  function validationImc() {
    if (weight !== null && height !== null) {
      imcCalculator()
      setWeight(null)
      setHeight(null)
      setMessageImc('Seu imc é igual a')
      setTextButton('Calcular Novamente')
      setErrorMessage(null)
      return
    }
    verificationImc()
    setImc(null)
    setTextButton('Calcular')
    setMessageImc('preencha o peso e altura')
  }

  const verificationImc = () => {
    if (imc === null) {git remote add origin git@github.com:PauloSantosIII/PSIII-Health.git
      Vibration.vibrate()
      setErrorMessage('campo obrigatório')
    }
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.textError}>{errorMessage}</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          style={styles.formInput}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.textError}>{errorMessage}</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.375"
          keyboardType="numeric"
          style={styles.formInput}
        />
        <TouchableOpacity 
          style={styles.buttonCalculator}
          onPress={() => validationImc()} 
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc
        messageResultImc={messageImc}
        resultImc={imc}
      />
    </View>
  )
}

export default Form