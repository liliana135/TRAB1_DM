import React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';

const Comments = (props) => {

    return (
        <View style={styles.container}>
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

export default Comments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});