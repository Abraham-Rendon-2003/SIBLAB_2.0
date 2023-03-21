import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";


export default function PersonalScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información Personal</Text>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} value={'fake name'} editable={false}/>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Apellido Paterno</Text>
            <TextInput style={styles.input} value={'fake surname'} editable={false}/>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Apellido Materno</Text>
            <TextInput style={styles.input} value={'fake lastname'} editable={false}/>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo</Text>
            <TextInput style={styles.input} value={'fake@email.com'} editable={false}/>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Grupo</Text>
            <TextInput style={styles.input} value={'fake group'} editable={false}/>
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
    top: 16,
    left: 20,
    color: '#fff'
  }
})
