import { View, Text, FlatList, ScrollView,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { listaPersonal } from '../../Context/personalContext'
import { carregarPersonal } from '../../Context/personalContext'
import { collection, onSnapshot } from 'firebase/firestore';
import { Personal } from '../../Context/personalContext';
import CardPersonal from '../../components/cardPersonal';
import { db } from '../../fireBaseConnection';
export default function Avaliacao() {
  const[listaPersonal,setListaPersonal]= useState<Personal[]>([]);

  // carregarPersonal();
  useEffect(()=>{
    const personais = onSnapshot(collection(db,"Personais"),(snapshot)=>{
        const personaisList:any= [];//sera que funciona?
        snapshot.forEach((doc)=>{
            personaisList.push({id:doc.id,...doc.data()});
        });
        setListaPersonal(personaisList);
    })
    return ()=> personais();
},[])
  return (
    <ScrollView style={styles.scrool}>

      <View style={styles.container}>
        <FlatList 
        data={listaPersonal}
        scrollEnabled={false}
        renderItem={({item})=>{
          return <CardPersonal item={item}/>
        }}
        />
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