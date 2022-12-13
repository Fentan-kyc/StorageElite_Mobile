import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CustomButton from '../Components/UI/CustomButton';

export default function AcceptanceScreen({ navigation }) {
    const [name, setName] = useState("AcceptanceScreen");

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [resData, setResData] = useState({});
    const [currentCell, setCurrentCell] = useState("нет");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400 }} />
      </View>

      <View style={styles.info_container}>
        <Text style={styles.text}>Текущая ячейка:</Text>
        <Text style={styles.cellText}>{currentCell}</Text>
      </View>

      {scanned && <CustomButton title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 20,
    },
    cellText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 600,
        overflow: 'hidden',
        backgroundColor: '#fc0'
    },
    info_container:{
        marginTop: 30,
        alignItems: 'center'
    }
});