import React, { useState } from "react"
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogBox } from "react-native"
import IndexStack from "./src/navigation/IndexStack"
import PersonalScreen from "./src/screens/PersonalScreen"
import IndexScreen from "./src/screens/IndexScreen"

LogBox.ignoreAllLogs()
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={IndexStack}>
        <Drawer.Screen name="personalS" component={PersonalScreen} />
        <Drawer.Screen name="historial" component={IndexScreen} />
      </Drawer.Navigator>
  </NavigationContainer>
  )
}