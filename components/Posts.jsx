import React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';

const Posts = (props) => {

    return (
        <View style={styles.container}>
            <Button title="Go to Post 1" onPress={() => props.navigation.navigate('Post', { id: 1, title: 'Post 1' })} />
            <Button title="Go to Post 2" onPress={() => props.navigation.navigate('Post', { id: 2, title: 'Post 2' })} />
            <Button title="Go to Post 3" onPress={() => props.navigation.navigate('Post', { id: 3, title: 'Post 3' })} />
        </View>
    );
}

export default Posts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

