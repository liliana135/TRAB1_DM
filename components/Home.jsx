import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/Logo.png')} />
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  img: {
    width: 300,
    height: 300

  },
}); 