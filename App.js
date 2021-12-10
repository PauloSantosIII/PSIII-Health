import React from 'react'
import { StyleSheet, View } from 'react-native'
import Title from './src/components/Title'
import Form from './src/components/Form'

const App = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61dafb',
    paddingTop: 80,
  },
})

export default App
