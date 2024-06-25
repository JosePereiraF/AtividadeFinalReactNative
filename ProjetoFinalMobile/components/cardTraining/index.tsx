import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Linking } from 'react-native';
import cardList from '../cardList';
import CardList from '../cardList';


export default function cardTraining () {
      const navigation = useNavigation();
      const [open,setOpen]= useState(false);


  return (
  <>
  <View style={styles.container}>
    <View style={styles.cards}>
     <TouchableOpacity style={styles.card} onPress={() => setOpen(!open)}>
    <ImageBackground 
        source={require("../../assets/basicc.png")}
          style={{width: '100%', height: 185}}resizeMode="contain" resizeMethod="resize"
          
        />  
       </TouchableOpacity>

       <TouchableOpacity style={styles.card} onPress={() => navigation.jumpTo('Consulta')}>
    <ImageBackground 
        source={require("../../assets/intermediario.png")}
          style={{width: '100%', height: 185}}resizeMode="contain" resizeMethod="resize"
        />  
       </TouchableOpacity>

       <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Cadastro')}>
    <ImageBackground 
        source={require("../../assets/avancado.png")}
          style={{width: '100%', height: 185}}resizeMode="contain" resizeMethod="resize"
        />  
       </TouchableOpacity> 
       </View> 
    </View> 
    {open &&
    <Modal visible={open} animationType='slide'>
      <CardList/>
      <Button title='fechar' onPress={() => setOpen(!open)}/>
      </Modal> 
      } 
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cards:{
    flex:1,
    marginTop: 18,
    marginStart:2,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  card: {
    height: 185,
    backgroundColor: '#121212', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginStart:2,
    marginHorizontal: 2,
    marginVertical: 10,
  },
});