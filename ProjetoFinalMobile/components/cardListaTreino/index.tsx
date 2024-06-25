import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Training from '../../screens/Training';
import TrainingList from '../../screens/TrainingList'

export default function cardListaTreino () {
    return (
        <View style={styles.container}>
          <View style={styles.cards}>
           <TouchableOpacity style={styles.card} onPress={Training}>
          <ImageBackground 
              source={require("../../assets/perfil.png")}
                style={{width: '100%', height: 185}}resizeMode="contain" resizeMethod="resize"
                
              />  
             </TouchableOpacity>
      
             <TouchableOpacity style={styles.card} onPress={Training}>
          <ImageBackground 
              source={require("../../assets/perfil.png")}
                style={{width: '100%', height: 185}}resizeMode="contain" resizeMethod="resize"
              />  
             </TouchableOpacity>
      
             <TouchableOpacity style={styles.card} onPress={Training}>
          <ImageBackground 
              source={require("../../assets/perfil.png")}
                style={{width: '100%', height: 185}}resizeMode="contain" resizeMethod="resize"
              />  
             </TouchableOpacity> 
             </View> 
          </View>     
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
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 18,
          marginStart:2,
          marginHorizontal: 2,
          marginVertical: 10,
        },
      });