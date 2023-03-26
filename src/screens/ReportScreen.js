import React, {useEffect, useState} from "react"
import {StyleSheet,Text,View, TextInput} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { Button, Input } from "react-native-elements";
import axios from 'axios';

export default function ReportScreen(){
    const [selectedValue, setSelectedValue] = useState("");
    const [reporteValue, setReporteValue] = useState("");

    const handleSendReport = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api-siblab/report', {
                profesor: selectedValue,
                reporte: reporteValue
            });
            console.log(response);
            // Aquí puedes agregar lógica para mostrar un mensaje de éxito o redirigir a otra pantalla
        } catch (error) {
            console.error(error);
            // Aquí puedes agregar lógica para mostrar un mensaje de error
        }
    }

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const selectTeacher = async () => {
            const response = await axios.get('http://192.168.0.103:8080/api-siblab/user/',
            {
                Withcredentials:true,     
            });
            const docenteFiltro = response.data.data;
            const filterTeacter = docenteFiltro.filter(docente => docente.role === 'Teacher');
            setTeachers(filterTeacter);
        }
        selectTeacher();
    },[]);

    return(
        <View style={styles.container}>
            
            
            <View style={styles.marca}>
                <Text style={styles.texto}>Marca</Text>
            </View>
            <View style={styles.marca2}>
                <Text style={styles.texto}>Dell</Text>
            </View>
            <View style={styles.Procesador}>
                <Text style={styles.texto}>Procesador</Text>
            </View>
            <View style={styles.Procesador2}>
                <Text style={styles.texto}>Core ¡7</Text>
            </View>
            
            <View style={styles.Ubicacion}>
                <Text style={styles.texto}>Ubicacion</Text>
            </View>
            <View style={styles.Ubicacion2}>
                <Text style={styles.texto}>Ubicacion</Text>
            </View>
            <View style={styles.Horario}>
                <Text style={styles.texto}>Horario</Text>
            </View>
            <View style={styles.Horario2}>
                <Text style={styles.texto}>Horario</Text>
            </View>
            <View style={styles.docente}>
                <Text style={styles.texto}>Docente</Text>
            </View>
            <Picker
                selectedValue={selectedValue}
                
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                prompt="Selecciona un profesor"
            >
                {teachers.map((teacher) => {
                    return(
                        <Picker.Item label={teacher.name} value={teacher._id} key={teacher._id}/>
                    )
                })}
            </Picker>

            <View style={styles.reporte}>
                <TextInput
                    placeholder="Reporte"
                    editable
                    multiline
                    numberOfLines={6}
                    maxLength={100}
                    style={{padding: 10}}
                    value={reporteValue}
                    onChangeText={setReporteValue}
                />
            </View>

            <View style={styles.area}>
                <View style={styles.button}>
                    <Button
                        title="Agregar Reporte"
                        buttonStyle={{backgroundColor: 'transparent'}}
                        onPress={handleSendReport}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    button:{
        position: 'absolute',
        width: 200,
        height: 50,
        borderWidth: 1,
        top: 50,
        borderRadius: 10,
        borderEndColor:'white',
        borderStartColor:'white',
        borderTopColor:'white',
        borderBottomColor:'white',
    },
    reporte:{
        backgroundColor: 'transparent',
        width: 300,
        height: 100,
        justifyContent: 'center',
        borderWidth: 1,
        top: 280,
        borderRadius: 10,
    },
    area:{
        width: 400,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121732',
        top: 300,
    },
    picker:{
        width: 150,
        height: 50,
        right: 30,
        top: 440,
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'absolute',
    },
    marca:{
        width: 150,
        height: 50,
        top: 220,
        left: 30,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    marca2:{
        width: 150,
        height: 50,
        top: 220,
        right: 30,
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Procesador:{
        width: 150,
        height: 50,
        top: 270,
        left: 30,
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Procesador2:{
        width: 150,
        height: 50,
        top: 270,
        right: 30,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    docente:{
        width: 150,
        height: 50,
        top: 440,
        left: 30,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Ubicacion:{
        width: 150,
        height: 50,
        top: 340,
        left: 30,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Ubicacion2:{
        width: 150,
        height: 50,
        top: 340,
        right: 30,
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Horario:{
        width: 150,
        height: 50,
        top: 390,
        left: 30,
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Horario2:{
        width: 150,
        height: 50,
        top: 390,
        right: 30,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
