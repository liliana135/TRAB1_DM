import React, { Component } from 'react';
import { View, TextInput, Text, Image, Button, TouchableHighlight } from 'react-native';
import styles from '../styles/main';


class Estadia extends Component {

   Data_S = async () => {
  this.props.navigation.navigate("Data")
  }
  Pesquisas_S = async () => {
    this.props.navigation.navigate("Pesquisa")
  }

render(){
return(
      <View style={styles.layer2}>
        <Text style={styles.header}>Pesquisar estadias</Text>
        <TextInput
          placeholder={'Destino'}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.Data_S} underlayColor="lavender">
            <View style={styles.input}>
                <Text >Data</Text>
            </View>
          </TouchableHighlight>
        <TextInput
          placeholder={'Quartos'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Hóspedes'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Pensão'}
          style={styles.input}
        />
        <Button
          title={'Pesquisar'} 
          color= "black"
          onPress={this.Pesquisas_S}
        />
      </View>
    );
}
}
export default Estadia;