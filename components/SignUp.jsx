import React, { Component } from 'react';
import { Text, Button, TextInput, View, TouchableHighlight } from 'react-native';
import styles from '../styles/main';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  Sign = async () => {
    this.props.navigation.navigate("SignIn")
  }

  render() {
    return (

      <View style={styles.layer2}>
        <TouchableHighlight onPress={this.Sign} underlayColor="lavender">
            <View >
                <Text style={styles.corner} >{'<'}</Text>
            </View>
          </TouchableHighlight>
        <Text style={styles.header}>Sign Up</Text>
        
        <TextInput
          placeholder={'Name'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.input}
        />
        <Button
          title={'Registar'} 
          color= "black"
        />
      </View>
    );
  }
}