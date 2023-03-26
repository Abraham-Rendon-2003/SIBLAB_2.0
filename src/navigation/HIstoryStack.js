import React from 'react'
import IndexScreen from '../screens/IndexScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()


export default function HIstoryStack() {
  return (
<Stack.Navigator nitialRouteName="index" screenOptions={({route}) => ({
        headerShown: false,
    })}>
        <Stack.Screen name="historyS" component={IndexScreen} options={{title:'historyS'}}/>
    </Stack.Navigator>  )
}