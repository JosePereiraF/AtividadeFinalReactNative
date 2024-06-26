import { View, Text,StyleSheet, TouchableOpacity, ImageBackground, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CardList from '../../components/cardList';
import { LayoutAnimationType } from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation';
import CardListi from '../../components/cardListi';
import CardLista from '../../components/cardLista';
import { ScrollView } from 'react-native-gesture-handler';

export default function Training() {
  const navigation = useNavigation();
      const [open,setOpen]= useState(false);
      const [oopen,setOopen] = useState(false);
      const [ooopen,setOoopen] = useState(false);


  return (
  
    <ScrollView style={styles.scrool}>
      <>
  <View style={styles.container}>
    <View style={styles.cards}>
     <TouchableOpacity style={styles.card} onPress={() => setOpen(!open)}>
    <ImageBackground 
        source={require("../../assets/basicc.png")}
          style={{width: '100%', height: 185}}resizeMode="contain" resizeMethod="resize"
          
        />  
       </TouchableOpacity>

       <TouchableOpacity style={styles.card} onPress={() => setOopen(!oopen)}>
    <ImageBackground 
        source={require("../../assets/intermediario.png")}
          style={{width: '100%', height: 185}}resizeMode="contain" resizeMethod="resize"
        />  
       </TouchableOpacity>

       <TouchableOpacity style={styles.card} onPress={() => setOoopen(!ooopen)}>
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
      <Button title='Voltar' onPress={() => setOpen(!open)}/>
      </Modal> 
      } 
    {oopen &&
    <Modal visible={oopen} animationType='slide'>
      <CardListi/>
      <Button title='Voltar' onPress={() => setOopen(!oopen)}/>
      </Modal> 
      }
      {ooopen &&
      <Modal visible={ooopen} animationType='slide'>
        <CardLista/>
        <Button title='Voltar' onPress={()=>setOoopen(!ooopen)}/>
        </Modal>
      }
       </>
      </ScrollView>
   
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
  scrool: {
    flex: 1,
    width:"100%",
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