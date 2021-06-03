import React, { Component } from 'react';
import { Text, Button, TextInput, View } from 'react-native';
import styles from '../styles/main';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={styles.layer2}>
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