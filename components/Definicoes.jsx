import { View, TextInput, Text, Image, Button } from 'react-native';
import styles from '../styles/main';

const Definicoes = () => {
  return (
    <View style={styles.layer2}>
                <Text style={styles.header}>Login</Text>
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    onChangeText={(value) => this.setStateFor("email", value)}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={(value) => this.setStateFor("password", value)}
                    secureTextEntry
                />    
            </View>
  );
}
export default Definicoes;