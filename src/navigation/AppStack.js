import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonalScreen from "../screens/PersonalScreen";

const Drawer = createNativeStackNavigator();

const DrawerStack = () => {
  return (
   <Drawer.Navigator screenOptions={{headerShown: false}} >
        <Drawer.Screen name="personalS" component={PersonalScreen} />
   </Drawer.Navigator>
  );
};
  export default function DrawerStack() {
}