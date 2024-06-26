import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CustomDrawer(props) {
  const [nomeLogado, setNomeLogado]= useState("");
  useEffect(()=>{
    const dadosUsuario = async ()=>{
      const usuarioLogado = await AsyncStorage.getItem("logado");
      usuarioLogado!=null?setNomeLogado(usuarioLogado):"nulo"
    }
    dadosUsuario();
  },[nomeLogado])
  return (
    <DrawerContentScrollView>
        <View
        style={{width:"100%",height:85,alignItems:'center',justifyContent:'center'}}
        >
         <Image 
        source={require("../../assets/perfil.png")}
          style={{width: 65, height: 65}}
        />   
        <Text 
            style={{   
            fontSize: 18,
            marginTop: 1, 
            color:"#000",
            marginVertical: 15,
            }}>
                Bem vindo, {nomeLogado}!
        </Text>
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}