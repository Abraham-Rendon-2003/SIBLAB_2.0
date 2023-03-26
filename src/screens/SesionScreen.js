import React, { useState } from "react"
import { View, TextInput, StyleSheet, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Image, Button, Text } from "react-native-elements"
import axios from "axios"

export default function SesionScreen() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    const handleSubmit = async () => {
  const formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)
  const req = {
    method: 'POST',
    body: formData,
    credentials: 'include'
  }

  try {
    const res = await fetch('http://192.168.0.103:8080/api-siblab/login/', req)
    const data = await res.json()
    console.log(data)
    if (!username || !password) {
      alert('Ingrese los datos para iniciar sesión')
    } else if (data && (data.username === username || data.password === password)) {
      alert('Bienvenido')
      navigation.navigate('historial')
    } else {
      alert('Usuario no encontrado')
    }
  } catch (err) {
    console.log(err)
    alert('Error')
  }
}

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/fondo.png')} resizeMode="cover" style={styles.image}></ImageBackground>
            <Image source={require('../assets/img/libro.png')} style={styles.logo}/>
            <Image source={require('../assets/img/FotoPerfil.png')} style={styles.profile}/>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={username}
                onChangeText={(ev) => setUsername(ev)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry={password ? false : true}
                onChangeText={(ev) => setPassword(ev)}

            />
            <Button
                buttonStyle={styles.btnR}
                title="Iniciar Sesion"
                onPress={handleSubmit}
            />
            <Text style={styles.text}>SIBLAB</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        borderColor: '#fff',
        color: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        top: 30,
    },
    profile: {
        width: 160,
        height: 160,
        marginBottom: 35
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        top: -8,
    },
    image: {
        width: '100%',
        height: '100%',
        marginBottom: 20,
        position: 'absolute',
    },
    btnR: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        height: 56,
        marginTop: 20,
        top: 30,
        width: 233,
        borderWidth: 2,
        borderColor: '#fff',
        color: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        top: 70,
    }
})
