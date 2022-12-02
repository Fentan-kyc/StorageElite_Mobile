import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './Screens/MenuScreen.js';
import AcceptanceScreen from './Screens/AcceptanceScreen.js';
import DeliveryScreen from './Screens/DeliveryScreen.js';
import InventoryScreen from './Screens/InventoryScreen.js';
import DevelopScreen from './Screens/DevelopScreen.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MenuScreen.name}>
        <Stack.Screen name={MenuScreen.name} component={MenuScreen}/>
        <Stack.Screen name={AcceptanceScreen.name} component={AcceptanceScreen}/>
        <Stack.Screen name={DeliveryScreen.name} component={DeliveryScreen}/>
        <Stack.Screen name={InventoryScreen.name} component={InventoryScreen}/>
        <Stack.Screen name={DevelopScreen.name} component={DevelopScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
