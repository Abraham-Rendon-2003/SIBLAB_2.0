import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignupSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
  password: Yup.string().required("Campo obligatorio"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Campo obligatorio"),
  name: Yup.string().required("Campo obligatorio"),
  surname: Yup.string().required("Campo obligatorio"),
  code: Yup.string().required("Campo obligatorio"),
});

export default function RegisterScreen() {
  const [group, setGroup] = useState(null);
  const navigation = useNavigation();
  const image = {
    uri: "https://p4.wallpaperbetter.com/wallpaper/141/158/403/simple-minimalism-gradient-wallpaper-preview.jpg",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm:"",
      name: "",
      surname: "",
      code: "",
    },
    validationSchema: SignupSchema,
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Hola");
      console.log(formValue)
      onSubmite(formValue);
    }
  });

  const onSubmite = async (values) => {
    try {
      const response = await axios.post(
        "http://192.168.67.17:8080/api-siblab/user/",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert("Cuenta creada exitosamente");
        navigation.navigate("historial");
      } else {
        alert("Error al crear la cuenta");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear la cuenta");
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <Text style={styles.title}>Registrar Cuenta</Text>
        <Input
          containerStyle={styles.input}
          placeholder="Nombre(s)"
          onChangeText={(text) => formik.setFieldValue("name",text)}
          errorMessage={formik.errors.name}
        />
        <Input
          containerStyle={styles.input}
          placeholder="Apellidos"
          onChangeText={(text) => formik.setFieldValue("surname", text)}
          errorMessage={formik.errors.surname}
        />
        <Input
          containerStyle={styles.input}
          placeholder="Matrícula"
          onChangeText={(text) => formik.setFieldValue("code", text)}
          errorMessage={formik.errors.code}
        />
        <Input
          containerStyle={styles.input}
          placeholder="Email"
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          containerStyle={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
          secureTextEntry={true}
        />
        <Input
          containerStyle={styles.input}
          placeholder="Confirmar Contraseña"
          onChangeText={(text) => formik.setFieldValue("confirm", text)}
          errorMessage={formik.errors.confirm}
          secureTextEntry={true}
        />
        <Button
          title="Registrar"
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
          buttonStyle={styles.button}
        />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 50,
  },
  input: {
    fontSize: 14,
    padding: 10,
    top: 15,
    marginLeft: -10,
    backgroundColor: "#F5E7E7",
    marginBottom: 20,
    color: "#000",
    width: 270,
    height: 50,
    borderRadius: 10,
  },
  error: {
    color: "red",
  },
  image: {
    width: "100%",
    height: "100%",
    marginBottom: 20,
    position: "absolute",
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "black",
    color: "#000",
    fontSize: 14,
    padding: 10,
    top: 15,
    marginLeft: -10,
    marginBottom: 20,
  },
});
