import { View, Text, FlatList, ScrollView,StyleSheet, Modal, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore';
import { Personal } from '../../Context/personalContext';
import CardPersonal from '../../components/cardPersonal';
import { db } from '../../fireBaseConnection';
import MarcarConsulta, { IMarcarConsulta } from '../../components/modalMarcarConsulta';


export default function Avaliacao() {
  const[activeModal,setActiveModal]= useState(false);
  const[listaPersonal,setListaPersonal]= useState<Personal[]>([]);
  const [consulta,setConsulta] = useState<IMarcarConsulta>({dataMarcada:"",nomePersonal:"",nomeUsuario:"",tipoConsulta:"",valor:0});

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
          return <CardPersonal item={item} setActiveModal={setActiveModal} consulta={setConsulta}/>
        }}
        />
      </View>
        {activeModal&&
      <Modal visible={activeModal} animationType='slide'>
        <MarcarConsulta 
        nomeUsuario={consulta.nomeUsuario}
        dataMarcada={consulta.dataMarcada}
        nomePersonal={consulta.nomePersonal}
        tipoConsulta={consulta.tipoConsulta}
        valor={consulta.valor}
        setActiveModal={setActiveModal}
        />
        
      </Modal>
        }
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