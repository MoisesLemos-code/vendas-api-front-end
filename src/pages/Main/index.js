import React, { useState } from 'react';
import {
  View, Text,
  TouchableOpacity, StyleSheet
} from 'react-native'


export default function Main({ navigation: { navigate } }) {
  const [btnDisable, setBtnDisable] = useState({
    cliente: false,
    produto: true,
    venda: true
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={btnDisable.cliente}
        style={(btnDisable.cliente ? { ...styles.btn, ...styles.btnDisabled } : styles.btn)}
        onPress={() => navigate("Cliente")}
        underlayColor='#fff'>
        <Text style={styles.btnText}>Cadastro de cliente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={btnDisable.produto}
        style={(btnDisable.produto ? { ...styles.btn, ...styles.btnDisabled } : styles.btn)}
        onPress={() => navigate("Cliente")}
        underlayColor='#fff'>
        <Text style={styles.btnText}>Cadastro de produto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={btnDisable.venda}
        style={(btnDisable.venda ? { ...styles.btn, ...styles.btnDisabled } : styles.btn)}
        onPress={() => navigate("Cliente")}
        underlayColor='#fff'>
        <Text style={styles.btnText}>Venda</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353434',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    height: 50,
    paddingStart: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  textInputBody: {
    marginTop: 20,
    fontWeight: "bold",
    color: '#353434'
  },
  btn: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#667581',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  btnDisabled: {
    backgroundColor: '#CCC',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 10,
    paddingRight: 10
  },
});