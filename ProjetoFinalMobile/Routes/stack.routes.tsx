import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Avaliacao from '../screens/Avalicao';
import Cadastro from '../screens/Cadastro';
import Training from '../screens/Training';
import TreinoFeminino from '../screens/TreinoFeminino';
import Inicio from '../screens/Inicio';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
   return (
    <Stack.Navigator screenOptions={{title: ''}}>
     <Stack.Screen name="Home" component={Inicio} />
     <Stack.Screen name="Avaliação" component={Avaliacao} />
      <Stack.Screen name="Treino Masculino" component={Training} />
      <Stack.Screen name="Treino Feminino" component={TreinoFeminino} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
   );
 }
