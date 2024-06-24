import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Personal } from '../../Context/personalContext'

interface PersonalProps{
  item:Personal
}

export default function CardPersonal({item}:PersonalProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri:item.Imagem}}
       style={{ width: 300, height: 300 }}/>
       <View style={styles.informacoes}>
       <Text>Nome:{item.Nome}</Text>
       <Text>Idade: {item.Idade}</Text>
       <Text>Experiência: {item.Experiencia}</Text>
       <Text>Especialização: {item.Especialização}</Text>
       <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>
          Marcar
        </Text>
       </TouchableOpacity>
       </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    marginTop: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    justifyContent: 'center',
  },
  informacoes:{
  marginTop:10,
   gap:4,
   textAlign:'left'
  },
  botao: {
    backgroundColor: '#007bff', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#98fb98',//cor que talvez funcione perguntar opnião depois #ffffff
    fontSize: 16,
    fontWeight: 'bold',
  },
});