import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
import PersonalStack from "./PersonalStack"
import ReportStack from "./ReportStack"
import HIstoryStack from "./HIstoryStack"
import QRScanner from "../screens/QRScanner"
import QRScannerN from "./QRScannerN"

const Tab = createBottomTabNavigator()

const icons = {
  index: "clock",
  personal: "account",
  scanner: "qrcode",
};

export default function AppNavigation(){
    return(
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "grey",
            tabBarStyle: {
              backgroundColor: "transparent", 
            },
            tabBarIcon: ({ color, size }) => showIcon(route, color, size),
          })}
        >
          <Tab.Screen component={QRScannerN} name="scanner" options={{title:'qr'}} />
          <Tab.Screen component={HIstoryStack} name="index" options={{title:'Historial'}} />
          <Tab.Screen component={PersonalStack} name="personal" options={{title:'Personal Information'}} />
        </Tab.Navigator>
    )
}

function showIcon(route, color, size) {
  const iconName = icons[route.name];
  return (
    <Icon
      type="material-community"
      name={iconName}
      color={color}
      size={size}
    />
  );
}
