import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import Storage from "../Storage/StorageManager";

export default function DeliveryScreen({ navigation }) {
  return <Text>{JSON.stringify(Storage.getData())}</Text>;
}
