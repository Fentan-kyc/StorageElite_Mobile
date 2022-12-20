import { View } from "react-native";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import AcceptanceScreen from "./AcceptanceScreen";
import CustomButton from "../Components/UI/CustomButton";
import DeliveryScreen from "./DeliveryScreen";
import InventoryScreen from "./InventoryScreen";
import DevelopScreen from "./DevelopScreen";
import Storage from "../Storage/StorageManager";
import axios from "axios";

export default function MenuScreen({ navigation }) {
  useEffect(() => {
    axios("http://192.168.1.140:7448/").then((res) => {
      Storage.setData(res.data);
      console.log(`get data: ${res.data}`);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CustomButton
        title="Принять"
        onPress={() => navigation.navigate("AcceptanceScreen")}
      />
      <CustomButton
        title="Отдать"
        onPress={() => navigation.navigate("DeliveryScreen")}
      />
      <CustomButton
        title="Инвентаризация"
        onPress={() => navigation.navigate("InventoryScreen")}
      />
      <CustomButton
        title="Разработчик"
        onPress={() => navigation.navigate("DevelopScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
});
