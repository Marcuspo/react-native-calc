import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Topo extends Component {
    render() {
      return ( 
        <View style={styles.topo}>
            <Text style={styles.texto}>
                Calculadora 1.0
            </Text>
        </View>

      );    
    }    
}


const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2196F3',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center'
    },
    texto: {
        color: 'white',
        fontSize: 28
    }
}
)
