import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const ResultImc = (props) => {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>
        {props.messageResultImc}
      </Text>
      <Text style={styles.infoImc}>
        {props.resultImc}
      </Text>      
    </View>
  )
}

export default ResultImc