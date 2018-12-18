import React, { Component } from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export default class Painel extends Component {
  render() {
    return (
      <View>
        <Entrada 
        num1={this.state.num1} 
        num2={this.state.num2} 
        atualizaValor={this.atualizaValor}
        />
        <Operacao operacao={this.state.operacao} />
        <Comando acao={this.calcular} />
      </View>
    );
  }
}
