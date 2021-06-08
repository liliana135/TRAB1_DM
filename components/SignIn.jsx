import React, { Component } from 'react';
import { View, TextInput, Text, Image, Button } from 'react-native';
import styles from '../styles/main';

// List of users
// Load from api in the future
const userList = [
    {
        "id": 1,
        "username": "dm",
        "password": "dm",
        "name": "Lindos",
        "description": "Lindos was born in 1955 and raised by adoptive parents in Cupertino, California. Though he was interested in engineering, his passions as a youth varied.",
        "email": "lindos@apple.com",
        "number": "800–692–7753",
        "avatar": require('../assets/users/sj.jpg')
    }
];

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }

    // Update state key with value
    setStateFor = (key, val) => {
        this.setState({
            [key]: val
        });
    }

    // Verify existing user credentials
    verifyUser = () => {

        // Find matching user
        const user = userList.find(x =>
            x.email === this.state.email &&
            x.password === this.state.password);

        if (user !== undefined) {
            // When the username and pass matches to a known user
            // We send all the user data to que navigation screen
            // So then this method can catch the user object in 
            // props and update de Context provider with this info
            this.props.navigation.navigate("App", { user: user })
        }
        else {
            console.log("Invalid User");
        }
    }

    Register = async () => {
        this.props.navigation.navigate("SignUp")
      }

    render() {
        return (
            <View style={styles.layer2}>
                    <Image style={styles.img} source={require('../assets/Logo.png')} />
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
                  <View style={styles.buttonLogin}>
                 <Button
                    title="Registar"
                    color= "black"
                    onPress={this.Register}
                />
                <View style={styles.space} /> 
                <Button
                    title="Entrar"
                    color= "black"
                    onPress={this.verifyUser}
                />
                </View>            
            </View>
        );
    }
}

export default SignIn;