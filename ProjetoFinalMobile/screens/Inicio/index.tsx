import React, { useState } from 'react'
import {styles} from '../Inicio/styles'
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default function Inicio() {
  
  const navigation = useNavigation();
  return (

    
    <ScrollView style={styles.scroll}>
      <View style={styles.container} >
        <View style={styles.cardsTop}>
          <TouchableOpacity style={styles.cardTop} onPress={() => navigation.navigate('Avaliacao')}>
            <Image
              source={require("../../assets/Avaliação.png")} 
              style={{ width: 150, height: 170, borderRadius: 15, }}
              resizeMode="stretch"
              resizeMethod="auto"
              />
             
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardTop} onPress={() => navigation.navigate('Training')}>
              <Image
              source={require("../../assets/TreinoMasc.png")} 
              style={{ width: 150, height: 170, borderRadius: 15,  }}
              resizeMode="stretch"
              resizeMethod="auto"
              />
              
            </TouchableOpacity>

          <View/>

          {/* <View style= {styles.middle}></View> */}
        <View style={styles.cardsBottom}>
          <TouchableOpacity style={styles.cardBottom} onPress={() => navigation.navigate('TreinoFeminino')}>
            <Image
              source={require("../../assets/TreinoFem.png")} 
              style={{ width: 150, height: 170, borderRadius: 15,  }}
              resizeMode="stretch"
              resizeMethod="auto"
              />
              
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardBottom} onPress={() => navigation.navigate('Cadastro')}>
            <Image
              source={require("../../assets/Cadastro.png")} 
              style={{ width: 150, height: 170, borderRadius: 15,  }}
              resizeMode="stretch"
              resizeMethod="auto"
              />
              
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

