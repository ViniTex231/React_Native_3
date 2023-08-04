import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
  Button, TouchableOpacity, TextInput
} from 'react-native';



export default function App() {
  const [pedra, setPedra] = useState(0)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [frase, setFrase] = useState('')

  function somar(){
    var valor = 10
    var id = parseInt(idade)
    return id + valor
  }    

  return (
    <View style={styles.container}>
      <Text>SENAI</Text>
      <Button
        title='Ok'
        onPress={() => { pedra }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => { setPedra(pedra + 2) }}
      >
        <Text style={styles.txt}>Cancel</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 30 }}>{pedra}</Text>

      <View style={{alignItems:'center'}}>
        <TextInput
          style={styles.caixa}
          placeholder='Digite o nome'
          onChangeText={setNome}
          value={nome}
        />
        <TextInput
          style={styles.caixa}
          placeholder='Digite a idade'
          onChangeText={setIdade}
          value={idade}
        />
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => { setFrase(`O nome da pessoa é: ${nome} e a idade é: ${idade}.`) }}
        >
          <Text style={styles.txt}>Ok</Text>
        </TouchableOpacity>


      </View>
      <Text style={{ fontSize: 15 }}>{frase}</Text>
      <Text style={{ fontSize: 15 }}>{somar()}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#888',
    width: '35%',
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderRightColor: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  btn2: {
    backgroundColor: '#888',
    width: '70%',
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderRightColor: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  txt: {
    color: '#fff',
    fontSize: 30,
  },
  caixa: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    marginTop: 10
  }
});