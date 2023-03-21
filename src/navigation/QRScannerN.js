import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import QRScanner from "../screens/QRScanner"


const Stack = createNativeStackNavigator()

export default function QRScannerN(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="scanner" component={QRScanner}  options={{title:'Scanner'}}/>
        </Stack.Navigator>
    )
}