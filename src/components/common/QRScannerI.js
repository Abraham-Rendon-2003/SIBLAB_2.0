import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from '@react-navigation/native';
import ReportScreen from "../../screens/ReportScreen";

export default function QRScannerI(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('');
  const navigation = useNavigation();

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanner = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\nData: ' + data);

     navigation.navigate('reportS')
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requiere permiso de cámara</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No acceso a cámara</Text>
        <Button title={'Allo Camara'} onPress={askForCameraPermission} />
        <Text style={styles.mainText}>{text}</Text>
        {scanned && (
          <Button
            title={'Escaneame'}
            onPress={() => setScanned(false)}
            color='tomato'
          />
        )}
      </View>
    );
  }

  return (
    <View>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
          style={{ height: 250, width: 250 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
  },
  mainText: {
    fontSize: 16,
    margin: 20,
  },
});
