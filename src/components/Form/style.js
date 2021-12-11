import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  formInput: {
    width: '90%',
    height: 40,
    margin: 12,
    paddingLeft: 20,
    borderRadius: 50,
    backgroundColor: '#f5f5f5'
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#333',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: '10%',
    marginTop: 12,
  },
  textButtonCalculator: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#61dafb'
  },
  textError: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20
  }
})
export default styles