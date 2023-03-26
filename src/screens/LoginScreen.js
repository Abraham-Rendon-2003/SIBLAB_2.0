import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from "react";
import { Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation()
    const Register = () => {
        navigation.navigate("registerS")
    }
    const Login = () => {
        navigation.navigate("sesionS")
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/fondo.png')} resizeMode="cover" style={styles.image}></ImageBackground>
            <Image source={require('../assets/img/libro.png')} style={styles.logo}/>
            <Image source={require('../assets/img/FotoPerfil.png')} style={styles.profile}/>

            <View>
                <Button
                    title={"Iniciar sesion"} containerStyle={styles.IniciarBtn}
                    buttonStyle={styles.btn} onPress={Login}
                />

                <Button
                    title={"Registrarse"} containerStyle={styles.RegisrtarBtn}
                    buttonStyle={styles.btnR} onPress={Register}
                />

                <Text style={styles.text}>¿No tienes cuenta?</Text>
                <Text style={styles.text}>Registrate</Text>

                <Text style={styles.siblab}>SIBLAB</Text>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //background:linear-gradient('180deg, #7ebf34,#1a3b6c'),
    },
    text: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        top: 20,
        marginLeft: -10,
    },
    image: {
        width: '100%',
        height: '100%',
        marginBottom: 20,
        position: 'absolute',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 5,
        height: 56,
        width: 233,
    },
    siblab: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        margin: 10,
        top: 100,
        color: '#fff',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        top: -8,
    },
    btnR: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        padding: 5,
        height: 56,
        marginTop: 20,
        width: 233,
        borderWidth: 2,
        borderColor: '#fff',
        color: '#fff',
    },
    profile: {
        width: 160,
        height: 160,
        marginBottom: 35,
    },
});