import React, { Component } from 'react';
import { View, TextInput, Text, Image, Button } from 'react-native';
import styles from '../styles/main';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={styles.layer2}>
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