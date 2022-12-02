import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import AcceptanceScreen from './AcceptanceScreen';
import CustomButton from '../Components/UI/CustomButton';
import DeliveryScreen from './DeliveryScreen';
import InventoryScreen from './InventoryScreen';
import DevelopScreen from './DevelopScreen';

export default function MenuScreen({ navigation }) {
    const name = "Menu"
    return (
      <View style={styles.container}>
        <CustomButton title="Принять" 
                onPress={() => navigation.navigate(AcceptanceScreen.name)}/>
        <CustomButton title="Отдать" 
                onPress={() => navigation.navigate(DeliveryScreen.name)}/>
        <CustomButton title="Инвентаризация" 
                onPress={() => navigation.navigate(InventoryScreen.name)}/>
        <CustomButton title="Разработчик" 
                onPress={() => navigation.navigate(DevelopScreen.name)}/>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
    }
})