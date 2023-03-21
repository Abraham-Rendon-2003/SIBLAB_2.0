import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PersonalScreen from '../screens/PersonalScreen'

const Stack = createNativeStackNavigator()

export default function  PersonalStack(){
    return(
        <Stack.Navigator nitialRouteName="index" screenOptions={({route}) => ({
            headerShown: false,
        })}>
            <Stack.Screen name="personalS" component={PersonalScreen} options={{title:'personal info'}}/>
        </Stack.Navigator>
    )
}