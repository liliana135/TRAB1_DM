import React, { Component } from 'react';
import { View, TextInput, Text, Image, Button, Alert } from 'react-native';
import styles from '../styles/main';

class Pesquisa extends Component {
  constructor(props) {
    super(props);
  }

  createTwoButtonAlert () {
    Alert.alert(
      "Aviso!",
      "Reserva Concluída",
      [
        {
          text: "Ligar",
          onPress: () => console.log("Cancel Pressed")
        },
        { text: "OK", onPress: () => console.log("OK Pressed"),
        style: 'cancel', }
      ]
    );
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
          title={'Reservar'} 
          color= "black"
          onPress={this.createTwoButtonAlert}
        />
      </View>
    );
  }
}
export default Pesquisa;