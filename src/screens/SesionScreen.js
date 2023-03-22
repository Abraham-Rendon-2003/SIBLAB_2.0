import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function SesionScreen() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const image = { uri: 'https://p4.wallpaperbetter.com/wallpaper/141/158/403/simple-minimalism-gradient-wallpaper-preview.jpg' };
    const navigation = useNavigation()

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        const req = {
            method: 'POST',
            body: formData
        }

        try {
            const res = await fetch('http://192.168.34.248:8080/api-siblab/login/', req)
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
            {/* <Image source={require('../assets/img/libro.png')} style={styles.logo}/>
            <Image source={require('../assets/img/FotoPerfil.png')} style={styles.profile}/> */}
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>
            <TextInput
                style={styles.input}
                placeholder="email"
                value={username}
                onChangeText={(ev) => setUsername(ev)}
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                value={password}
                secureTextEntry={password ? false : true}
                onChangeText={(ev) => setPassword(ev)}

            />
            <Button
                buttonStyle={styles.btnR}
                title="Iniciar Sesion"
                onPress={handleSubmit}
            />
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
        width: 100,
        height: 100,
        marginBottom: 35
    },
    logo: {
        width: 120,
        height: 100,
        marginBottom: 25
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
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
        padding: 5,
        height: 56,
        marginTop: 20,
        width: 233,
        borderWidth: 2,
        borderColor: '#fff',
        color: '#fff',
    },
})
