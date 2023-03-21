import React from "react"
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native"
import AppNavigation from "./src/navigation/AppNavigation"
import { LogBox } from "react-native"
import IndexStack from "./src/navigation/IndexStack"

LogBox.ignoreAllLogs()
export default function App() {
  return (
    <NavigationContainer>
    <IndexStack/>
  </NavigationContainer>
  )
}