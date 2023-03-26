import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground } from "react-native";
import axios from "axios";


export default function PersonalScreen() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get('http://192.168.0.103:8080/api-siblab/user/', {
        Withcredentials: true,
        })
      .then(response => setUserData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/img/fondo.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      <Text style={styles.title}>Información Personal</Text>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} value={userData?.name} editable={false}/>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Apellido Paterno</Text>
            <TextInput style={styles.input} value={userData?.surname} editable={false}/>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo</Text>
            <TextInput style={styles.input} value={userData?.username} editable={false}/>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Grupo</Text>
            <TextInput style={styles.input} value={userData?.code} editable={false}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0968ED",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'space-between'
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#fff",
    top: 90,
  
  },
  input: {
    width: 300,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    fontSize: 18,
    color: '#fff'
  },
  inputContainer:{
    width: '100%',
  },
  label:{
    fontSize: 16,
    marginBottom: 8,
    top: 10,
    left: 20,
    color: '#fff'
  },
  image: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
    position: 'absolute',
},
})
