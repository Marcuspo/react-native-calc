import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero';

export default class Entrada extends Component {
    render() {
        return (
            <View style={style.numeros}>
                <Numero num={this.props.num1} atualizaValor={this.props.atualizaValor} nome='num1' />
                <Numero num={this.props.num2} atualizaValor={this.props.atualizaValor} nome='num2' />
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

