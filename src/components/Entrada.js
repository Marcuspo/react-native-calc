import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero';

export default class Entrada extends Component {
    render() {
        return (
            <View style={style.numeros}>
                <Numero />
                <Numero />
            </View>
        );
    }
}

const style = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
})

