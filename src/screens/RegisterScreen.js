import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
  password: Yup.string().required("Campo obligatorio"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Campo obligatorio"),
  name: Yup.string().required("Campo obligatorio"),
  surname: Yup.string().required("Campo obligatorio"),
  code: Yup.string().required("Campo obligatorio"),
  classroom: Yup.string().required("Campo obligatorio")
});

export default function RegisterScreen() {
  const [group, setGroup] = useState(null);
  const navigation = useNavigation();
  const image = { uri: "https://p4.wallpaperbetter.com/wallpaper/141/158/403/simple-minimalism-gradient-wallpaper-preview.jpg" };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://192.168.34.248:8080/api-siblab/user/", values, {
        headers: {
          "Content-Type": "application/json"
        }
      });
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
    setSubmitting(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <Text style={styles.title}>Registrar Cuenta</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          surname: "",
          role: "alumno",
          code: "",
          classroom: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nombre(s)"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Apellidos"
              onChangeText={handleChange("surname")}
              onBlur={handleBlur("surname")}
              value={values.surname}
            />
            {errors.surname && touched.surname && (
              <Text style={styles.error}>{errors.surname}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Matrícula"
              onChangeText={handleChange("code")}
              onBlur={handleBlur("code")}
              value={values.code}
            />
            {errors.code && touched.code && (
              <Text style={styles.error}>{errors.code}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}


              </Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              onChangeText={handleChange("confirm")}
              onBlur={handleBlur("confirm")}
              value={values.confirm}
              secureTextEntry={true}
            />
            {errors.confirm && touched.confirm && (
              <Text style={styles.error}>{errors.confirm}</Text>
            )}
            <Button
              title="Registrar"
              onPress={handleSubmit}
              disabled={isSubmitting}
              buttonStyle={styles.button}
            />
          </View>
        )}
      </Formik>
    </View>
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
    width: '100%',
    height: '100%',
    marginBottom: 20,
    position: 'absolute',
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#black",
    color: "#000",
    fontSize: 14,
    padding: 10,
    top: 15,
    marginLeft: -10,
    marginBottom: 20,
  },
});
