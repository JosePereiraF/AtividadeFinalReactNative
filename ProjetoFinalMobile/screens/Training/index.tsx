import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CardTraining from '../../components/cardTraining'
import { ScrollView } from 'react-native-gesture-handler'

export default function Training() {
  return (
    <ScrollView style={styles.scrool}>
      <View style={styles.container}>
   <CardTraining></CardTraining>
   </View>
   </ScrollView>
  )
}
const styles = StyleSheet.create({
  scrool: {
    flex: 1,
    width:"100%",
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});