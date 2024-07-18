import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from '../components/CustomDrawer';
import Avaliacao from '../screens/Avalicao';
import Cadastro from '../screens/Cadastro';
import Training from '../screens/Training';
import Login from '../screens/Login/indes';
import TreinoFeminino from '../screens/TreinoFeminino';
import Inicio from '../screens/Inicio';
import HomeStack from './stack.routes';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Inicio} />
//       <Stack.Screen name="Avaliação" component={Avaliacao} />
//       <Stack.Screen name="Treino Masculino" component={Training} />
//       <Stack.Screen name="Treino Feminino" component={TreinoFeminino} />
//       <Stack.Screen name="Cadastro" component={Cadastro} />
//     </Stack.Navigator>
//   );
// }

export default function DrawerRoutes() {
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
      <Drawer.Screen name='Home' component= {HomeStack} />
      <Drawer.Screen name='Avaliação' component={Avaliacao} />
      <Drawer.Screen name='Treino Masculino' component={Training} />
      <Drawer.Screen name='Treino Feminino' component={TreinoFeminino} />
      <Drawer.Screen name='Cadastro' component={Cadastro} />
    </Drawer.Navigator>
  );
}
