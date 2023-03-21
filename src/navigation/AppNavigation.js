import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
import IndexStack from "./IndexStack"
import PersonalStack from "./PersonalStack"
import ReportStack from "./ReportStack"
import HIstoryStack from "./HIstoryStack"

const Tab = createBottomTabNavigator()

export default function AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            tabBarIcon: ({color ,size}) =>showIcon(route,color,size),
        })}>
            <Tab.Screen component={ReportStack} name='report' options={{title:'Reports'}}/>
            <Tab.Screen component={HIstoryStack} name='index' options={{title:'Historial'}}/>
            <Tab.Screen component={PersonalStack} name='personal' options={{title:'Personal Information'}}/>
        </Tab.Navigator>
    )
}

function showIcon(route,color,size) {
    let icono;
    if(route.name==="index"){
      icono="clock"
    }else if(route.name==="personal"){
      icono="account"
    }else if(route.name==="report"){
      icono="qrcode"
    }
    return (
      <Icon
        type="material-community"
        name={icono}
        color={color}
        size={size}
      />
    );
  }