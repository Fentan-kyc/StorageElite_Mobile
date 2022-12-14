import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./Screens/MenuScreen.js";
import AcceptanceScreen from "./Screens/AcceptanceScreen.js";
import DeliveryScreen from "./Screens/DeliveryScreen.js";
import InventoryScreen from "./Screens/InventoryScreen.js";
import DevelopScreen from "./Screens/DevelopScreen.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"MenuScreen"}>
        <Stack.Screen name={"MenuScreen"} component={MenuScreen} />
        <Stack.Screen name={"AcceptanceScreen"} component={AcceptanceScreen} />
        <Stack.Screen name={"DeliveryScreen"} component={DeliveryScreen} />
        <Stack.Screen name={"InventoryScreen"} component={InventoryScreen} />
        <Stack.Screen name={"DevelopScreen"} component={DevelopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
