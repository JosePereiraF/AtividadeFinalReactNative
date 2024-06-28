import { View, Text, TouchableOpacity, ImageBackground, Modal, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CardList from '../../components/cardList';
import CardListi from '../../components/cardListi';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';

export default function TreinoFeminino() {
  const navigation = useNavigation();
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [advanced, setAdvanced] = useState(false);

  return (
    <ScrollView style={styles.scrool}>
      <View style={styles.container}>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.card} onPress={() => setEasy(!easy)}>
            <Image
              source={require("../../assets/log.png")} //adicionar uma imagem treino feminino basico
              style={{ width: 340, height: 185, borderRadius: 15, margin:10, }}
              resizeMode="stretch"
              resizeMethod="auto"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => setMedium(!medium)}>
            <Image
              source={require("../../assets/log.png")} //adicionar uma imagem treino feminino intermediario
              style={{ width: 340, height: 185, borderRadius: 15, }}
              resizeMode="stretch"
              resizeMethod="auto"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => setAdvanced(!advanced)}>
            <Image
              source={require("../../assets/log.png")} //adicionar uma imagem treino feminino avançado
              style={{ width: 340, height: 185, borderRadius: 15, }}
              resizeMode="stretch"
              resizeMethod="auto"
            />
          </TouchableOpacity>

    
        </View>
      </View>
      
      {easy && (
        <Modal visible={easy} animationType='slide'>
          <CardList />
          <Button title='Voltar' onPress={() => setEasy(!easy)} />
        </Modal>
      )}

      {medium && (
        <Modal visible={medium} animationType='slide'>
          <CardListi />
          <Button title='Voltar' onPress={() => setMedium(!medium)} />
        </Modal>
      )}

    {advanced && (
        <Modal visible={advanced} animationType='slide'>
          <CardListi />
          <Button title='Voltar' onPress={() => setAdvanced(!advanced)} />
        </Modal>
      )}
 
    </ScrollView>
  );
}
