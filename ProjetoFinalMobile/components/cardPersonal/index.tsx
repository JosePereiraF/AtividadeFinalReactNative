import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Personal } from '../../Context/personalContext'
import { IMarcarConsulta } from '../modalMarcarConsulta';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface PersonalProps{
  item:Personal
  setActiveModal: (value: boolean) => void;
  consulta: (value:IMarcarConsulta)=>void;
}

export default function CardPersonal({item, setActiveModal,consulta}:PersonalProps) {
  const [nomeLogado, setNomeLogado]= useState("");
  function handleModal(){
    setActiveModal(true)
     const dados:IMarcarConsulta={nomePersonal:item.Nome,
      nomeUsuario:nomeLogado,
      tipoConsulta:"Avaliação",
      valor:150,
      dataMarcada:"ola"}
     consulta(dados);
  }
useEffect(()=>{
  const dadosUsuario = async ()=>{
    const usuarioLogado = await AsyncStorage.getItem("logado");
    usuarioLogado!=null?setNomeLogado(usuarioLogado):"nulo"
  }
  dadosUsuario();
},[nomeLogado])

  return (
    <View style={styles.container}>
      <Image source={{uri:item.Imagem}}
       style={{ width: 300, height: 300 }}/>
       <View style={styles.informacoes}>
       <Text>Nome:{item.Nome}</Text>
       <Text>Idade: {item.Idade}</Text>
       <Text>Experiência: {item.Experiencia}</Text>
       <Text>Especialização: {item.Especialização}</Text>
       <TouchableOpacity style={styles.botao}  onPress={handleModal}>
        <Text style={styles.textoBotao} >
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