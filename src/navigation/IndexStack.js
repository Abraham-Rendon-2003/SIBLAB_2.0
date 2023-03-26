import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from "../screens/RegisterScreen"
import SesionScreen from "../screens/SesionScreen"
import HIstoryStack from "./HIstoryStack"

const Stack = createNativeStackNavigator()

export default function IndexStack(){
    return(
        <Stack.Navigator  screenOptions={({route})=>({
            headerShown:false,
            tabBarShowLabel:false,

            })}>
            <Stack.Screen name="indexS" component={LoginScreen} options={{title:"Inicio"}}/>
            <Stack.Screen name="sesionS" component={SesionScreen} options={{title:"Inicio de sesion"}}/>
            <Stack.Screen name="registerS" component={RegisterScreen} options={{title:"Registro"}}/>
            <Stack.Screen name="historial" component={HIstoryStack} options={{title: 'historial'}}/>
        </Stack.Navigator>
    )
}