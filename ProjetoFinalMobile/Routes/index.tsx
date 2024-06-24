import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Avaliacao from '../screens/Avalicao';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (

      <Drawer.Navigator
        drawerContent={CustomDrawer}
        screenOptions={{
          drawerInactiveTintColor: 'gray',
          drawerActiveTintColor: '#00ff',
        }}
      >
        <Drawer.Screen name='Avaliacao' component={Avaliacao} />
        {/* <Drawer.Screen name='Consulta' component={Consulta} /> */}
      </Drawer.Navigator>
  );
}