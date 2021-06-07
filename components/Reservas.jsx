import { View, TextInput, Text, Image, Button } from 'react-native';
import styles from '../styles/main';

const Reservas = () => {
  return (
    <View style={styles.container}>
            <Text>Id: {id}</Text>
            <Text>Title: {title}</Text>
            <Button
                title="Go to Comments"
                onPress={() => props.navigation.navigate('Comments')}
            />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
  );
}
export default Reservas;