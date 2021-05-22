import React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';

const Post = (props) => {

    const { id, title } = props.route.params

    return (
        <View style={styles.container}>
            <Text>Id: {id}</Text>
            <Text>Title: {title}</Text>
            <Button
                title="Go to Comments"
                onPress={() => props.navigation.navigate('Comments')}
            />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});