import { View, Text, TouchableOpacity, ImageBackground, Modal, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CardList from '../../components/cardList';
import CardListi from '../../components/cardListi';
import CardLista from '../../components/cardLista';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';

export default function Training() {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [oopen, setOopen] = useState(false);
  const [ooopen, setOoopen] = useState(false);

  return (
    <ScrollView style={styles.scrool}>
      <View style={styles.container}>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.card} onPress={() => setOpen(!open)}>
            <Image
              source={require("../../assets/basicc.png")}
              style={{ width: 340, height: 185, borderRadius: 15, }}
              resizeMode="stretch"
              resizeMethod="auto"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => setOpen(!open)}>
            <Image
              source={require("../../assets/intermediario.png")}
              style={{ width: 340, height: 185, borderRadius: 15, }}
              resizeMode="stretch"
              resizeMethod="auto"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => setOpen(!open)}>
            <Image
              source={require("../../assets/avancado.png")}
              style={{ width: 340, height: 185, borderRadius: 15, }}
              resizeMode="stretch"
              resizeMethod="auto"
            />
          </TouchableOpacity>
    
        </View>
      </View>
      
      {open && (
        <Modal visible={open} animationType='slide'>
          <CardList />
          <Button title='Voltar' onPress={() => setOpen(!open)} />
        </Modal>
      )}

      {oopen && (
        <Modal visible={oopen} animationType='slide'>
          <CardListi />
          <Button title='Voltar' onPress={() => setOopen(!oopen)} />
        </Modal>
      )}

      {ooopen && (
        <Modal visible={ooopen} animationType='slide'>
          <CardLista />
          <Button title='Voltar' onPress={() => setOoopen(!ooopen)} />
        </Modal>
      )}
    </ScrollView>
  );
}
