import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../cardList/style';

const CardList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cards}>
          <Text style={styles.cardNome}>TREINO A</Text>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/8V2SwkHTLek')}>
            <Text style={styles.cardText}>Agachamento 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=lkvSelJ0tQ8')}>
            <Text style={styles.cardText}>Flexão De Braço 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/jZY0XzzXleI')}>
            <Text style={styles.cardText}>Prancha 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/oc3sELfoUMQ')}>
            <Text style={styles.cardText}>Polichinelos 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=V9jp-JO8Q04')}>
            <Text style={styles.cardText}>Louges 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/EZNLRZ1Lsk0')}>
            <Text style={styles.cardText}>Abdominal Supra 3 x 10</Text>
          </TouchableOpacity>

          <Text style={styles.cardNome2}>TREINO B</Text>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/mvu9lOQ1sHg')}>
            <Text style={styles.cardText}>Supino Reto 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/T9a0Ukbpgqg')}>
            <Text style={styles.cardText}>Crucifixo 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=mWtLSTGH_TQ')}>
            <Text style={styles.cardText}>Remada Máquina 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/kdvuXL_LC_o')}>
            <Text style={styles.cardText}>Rosca Direta 3 x 10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => Linking.openURL('https://www.youtube.com/shorts/jsntw4tVAgQ')}>
            <Text style={styles.cardText}>Triceps Corda 3 x 10</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CardList;