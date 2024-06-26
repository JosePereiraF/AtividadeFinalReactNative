import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonLogout} from './styles'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Login from '../../screens/Login/indes';

export default function CustomDrawer(props) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [nomeLogado, setNomeLogado]= useState("");
  useEffect(()=>{
    const dadosUsuario = async ()=>{
      const usuarioLogado = await AsyncStorage.getItem("logado");
      usuarioLogado!=null?setNomeLogado(usuarioLogado):"nulo"
    }
    dadosUsuario();
  },[isFocused])
  function logout(){
    AsyncStorage.setItem("logado","")
    navigation.navigate(Login);
  }
  return (
    <DrawerContentScrollView>
        <View
        style={{width:"100%",height:85,alignItems:'center',justifyContent:'center',marginBottom:20}}
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
                Bem vindo!
        </Text>
        <ButtonLogout onPress={logout}>
          <Text>
            Logout
          </Text>
        </ButtonLogout>


        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}