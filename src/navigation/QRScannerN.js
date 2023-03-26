import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import QRScanner from "../screens/QRScanner"


const Stack = createNativeStackNavigator()

export default function QRScannerN(){
    return(
        <Stack.Navigator nitialRouteName="index" screenOptions={({route}) => ({
            headerShown: false,
        })}>
            <Stack.Screen name="scanner" component={QRScanner} options={{title:'QrScanner'}}/>
        </Stack.Navigator>
    )
}