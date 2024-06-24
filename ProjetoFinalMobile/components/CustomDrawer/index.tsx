import { View, Text } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView>
        <View
        style={{width:"100%",height:85,alignItems:'center',justifyContent:'center'}}
        >
            
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}