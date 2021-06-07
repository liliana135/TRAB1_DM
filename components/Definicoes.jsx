import React, { useState } from "react";
import { Text, Button, View, Image, TextInput } from "react-native";
import styles from "../styles/main";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = ({ navigation }) => {
    // To get the value from TextInput
    const [textInputName, setTextInputName] = useState("");
    const [textInputEmail, setTextInputEmail] = useState("");
    const [textInputPassword, setTextInputPassword] = useState("");
    const [textInputDataNasc, setTextInputDataNasc] = useState("");



    const storeData = async () => {
        // function to save the value in AsyncStorage
        if (textInputName && textInputEmail && textInputPassword && TextInputDataNasc) {
            // To check the input is not empty

            await AsyncStorage.setItem("name", textInputName);
            await AsyncStorage.setItem("email", textInputEmail);
            await AsyncStorage.setItem("password", textInputPassword);
            await AsyncStorage.setItem("datanasd", textInputDataNasc);

            alert("Dados atualizados!");
        } else {
            alert("Campos por preencher!");
        }
    };

    return (
        <View style={styles.layer2}>
            <Text style={styles.header}>Atualizar informações</Text>
            <TextInput
                placeholder={"Nome"}
                value={textInputName}
                onChangeText={(data) => setTextInputName(data)}
                style={styles.input}
            />
            <TextInput
                placeholder={"Email"}
                value={textInputEmail}
                onChangeText={(data) => setTextInputEmail(data)}
                style={styles.input}
            />
            <TextInput
                placeholder={"Password"}
                value={textInputPassword}
                onChangeText={(data) => setTextInputPassword(data)}
                style={styles.input}
            />
            <TextInput
                placeholder={"Data de Nascimento"}
                value={textInputEmail}
                onChangeText={(data) => setTextInputDataNasc(data)}
                style={styles.input}
            />
            <Button title={"Atualizar"} onPress={storeData} 
            color= 'black' />
        </View>
    );
};
export default Settings;
