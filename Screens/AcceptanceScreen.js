import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import CustomButton from "../Components/UI/CustomButton";
import axios from "axios";
import Storage from "../Storage/StorageManager";

export default function AcceptanceScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [resData, setResData] = useState(Storage.getData());
  const [currentCell, setCurrentCell] = useState("-");
  const [currentOrder, setCurrentOrder] = useState("-");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (data.length <= 4 && Storage.isExist(resData, data)) {
      setCurrentCell(data);
      console.log(`cell is chanded to ${data}`);
      return;
    }
    if (currentCell !== null) {
      setResData(Storage.pushItem(resData, currentCell, data));
      setCurrentOrder(data);
      return;
    }
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
          style={{ height: 400, width: 400 }}
        />
      </View>

      <View style={styles.info_container}>
        <Text style={styles.text}>Ячейка:</Text>
        <Text style={styles.cellText}>{currentCell}</Text>
        <Text style={styles.text}>Заказ:</Text>
        <Text style={styles.orderText}>{currentOrder}</Text>
        <CustomButton
          title="Отправить"
          onPress={() => {
            Storage.setData(resData);
            console.log("Sending data...");
            axios
              .post("http://192.168.1.140:7448/", resData)
              .then((res) => console.log(res.data));
          }}
        />
      </View>

      {scanned && (
        <CustomButton title={"Сканировать"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
  },
  cellText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 15,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 600,
    overflow: "hidden",
    backgroundColor: "#fc0",
  },
  info_container: {
    marginTop: 30,
    marginBottom: 40,
    alignItems: "center",
  },
});
