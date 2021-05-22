import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    input_large: {
        width: 250,
        height: 250,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    layer2: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'powderblue'
    },
    layer3: {
        flex: 1,
        alignItems: "center",
    }, 
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 40
    },
    buttonLogin: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-between",
      },
});

export default styles;