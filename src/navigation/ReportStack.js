import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ReportScreen from '../screens/ReportScreen'

const Stack = createNativeStackNavigator()

export default function ReportStack(){
    return(
        <Stack.Navigator nitialRouteName="index" screenOptions={({route}) => ({
            headerShown: false,
        })}>
            <Stack.Screen name="reportS" component={ReportScreen} options={{title:'Report'}}/>
        </Stack.Navigator>
    )
}