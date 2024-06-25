import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking } from 'react-native';

export default function CardList() {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
      <View style={styles.cards}>
  
      
        <Text style={styles.cardNome}>TREINO A</Text>
  
      <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/8V2SwkHTLek')}>
        <Text style={styles.cardText}>Agachamento                          3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=lkvSelJ0tQ8')}>
         <Text style={styles.cardText}>Flexão De Braço                      3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/jZY0XzzXleI')}>
         <Text style={styles.cardText}>Prancha                                    3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/oc3sELfoUMQ')}>
         <Text style={styles.cardText}>Polichinelos                             3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=V9jp-JO8Q04')}>
         <Text style={styles.cardText}>Louges                                      3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/EZNLRZ1Lsk0')}>
         <Text style={styles.cardText}>Abdominal Supra                    3 x 10</Text>
         </TouchableOpacity>
  
         <Text style={styles.cardNome2}>TREINO B</Text>
  
      <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/mvu9lOQ1sHg')}>
        <Text style={styles.cardText}>Supino Reto                             3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/T9a0Ukbpgqg')}>
         <Text style={styles.cardText}>Crucifixo                                   3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=mWtLSTGH_TQ')}>
         <Text style={styles.cardText}>Remanda Máquina                 3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/kdvuXL_LC_o')}>
         <Text style={styles.cardText}>Rosca Direta                            3 x 10</Text>
         </TouchableOpacity>
  
         <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/jsntw4tVAgQ')}>
         <Text style={styles.cardText}>Triceps Corda                          3 x 10</Text>
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
    cardNome:{
      height: 50,
      backgroundColor: 'black', 
      color:'white',
      fontSize:27,
      textAlign:"center",
      borderRadius: 5,
      paddingVertical: 5,
      marginTop: 1,
      marginStart:2,
      marginHorizontal: 2,
      marginVertical: 10,
    },
    cardNome2:{
      height: 50,
      backgroundColor: 'black', 
      color:'white',
      fontSize:27,
      textAlign:"center",
      borderRadius: 5,
      paddingVertical: 5,
      marginTop: 25,
      marginStart:2,
      marginHorizontal: 2,
      marginVertical: 10,
    },
    card: {
      height: 50,
      backgroundColor: 'gray', 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2,
      marginStart:2,
      marginHorizontal: 2,
      marginVertical: 5,
    },
    cardText:{
      fontSize:20, 
      textAlign:'left'
    },
  });