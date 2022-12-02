import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export default function AcceptanceScreen({ navigation }) {
    const name = "Acceptance"
    return (
        <Text>{name}</Text>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButton: {
        width: 200,
        backgroundColor: 'red',
    }
})