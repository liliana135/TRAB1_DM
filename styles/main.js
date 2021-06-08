import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    container1: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
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
        padding: 5,
        backgroundColor: 'lavender'
    },
    layer3: {
        flex: 1,
        alignItems: "center",
    }, 
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: -25
    },
    buttonLogin: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-between",
        marginTop: 10
      },
    space: {
        width: 75, 
        height: 20,
    },
    img: {
        width: 300,
        height: 250,
    
      },
    goBack: {
        width: 350,
        height: 100,
        marginBottom: 10,
        fontSize: 30,
    },
    corner: {
        width: 350,
        height: 100,
        marginBottom: 10,
        fontSize: 30,

    }
});

export default styles;