import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Avaliacao from '../screens/Avalicao';
import Cadastro from '../screens/Cadastro';
import Consulta from '../screens/Consulta';
import Training from '../screens/Training';


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
        <Drawer.Screen name='Avaliacao' component={Avaliacao} />
        <Drawer.Screen name='Treino' component={Training}/>
        <Drawer.Screen name='Consulta' component={Consulta} />
        <Drawer.Screen name='Cadastro' component={Cadastro} />
      </Drawer.Navigator>
  );
}