import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class Visor extends Component {
    render() {
      return ( 
        <View style={styles.topo}>
            <TextInput style={styles.Texto}
                placeholder='Resultado'
                editable={false}
            />
        </View>

      );    
    }    
}

const styles = StyleSheet.create({
    topo: {
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    Texto: {
        height: 100,
        fontSize: 28,
    }
})
