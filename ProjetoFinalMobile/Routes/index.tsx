import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Avaliacao from '../screens/Avalicao';
import Cadastro from '../screens/Cadastro';
import Training from '../screens/Training';
import Login from '../screens/Login/indes';


const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerInactiveTintColor: 'gray',
        drawerActiveTintColor: '#00ff',
        drawerContentContainerStyle: {
          alignItems: 'center',
        },
      }}
    >
      <Drawer.Screen name='Login' component= {Login} />
      <Drawer.Screen name='Avaliacao' component={Avaliacao} />
      <Drawer.Screen name='Treino' component={Training} />
      <Drawer.Screen name='Cadastro' component={Cadastro} />
    </Drawer.Navigator>
  );
}
