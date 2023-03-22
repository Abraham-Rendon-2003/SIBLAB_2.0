import React, {useState} from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"
import { Formik } from "formik"
import * as yup from 'yup'
import axios from 'axios'

const SignupSchema = yup.object().shape({
  name: yup.string().required('Campo obligatorio'),
  surname: yup.string().required('Campo obligatorio'),
  email: yup.string().email('Correo inválido').required('Campo obligatorio'),
  code: yup.string().required('Campo obligatorio'),
  password: yup.string().required('Campo obligatorio'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'),null],'Las contraseñas no coinciden').required('Campo obligatorio')
})

export default function RegisterScreen(){
  const handleSignup = async(values) =>{
    try{
      console.log(values)
      const res = await axios.post('http://192.168.69.51:8080/api-siblab/user/',values)
      console.log(res.data)
    }catch(err){
      console.log('Error ->' + err);
    }
  }

  return(
    <View>
      <Formik initialValues={{name: '',surname:'',email:'',code:'',password:''}} validationSchema={SignupSchema} onSubmit={handleSignup}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder='Nombre(s)'
          />
          {errors.name && <Text>{errors.name}</Text>}
          <TextInput
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')}
            value={values.surname}
            placeholder='Apellidos'
          />
          {errors.surname && <Text>{errors.surname}</Text>}
          <TextInput
            onChangeText={handleChange('code')}
            onBlur={handleBlur('code')}
            value={values.code}
            placeholder='Matrícula'
          />
          {errors.surname && <Text>{errors.code}</Text>}
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder='Correo'
          />
          {errors.email && <Text>{errors.email}</Text>}
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder='Contraseña'
            secureTextEntry={true}
          />
          {errors.password && <Text>{errors.password}</Text>}
          <TextInput
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            value={values.passwordConfirmation}
            placeholder='Confirmar contraseña'
            secureTextEntry={true}
          />
          {errors.passwordConfirmation && <Text>{errors.passwordConfirmation}</Text>}
          <Button onPress={handleSubmit} title='Registrarse'/>
        </>
      )}
      </Formik>
    </View>
  )
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
