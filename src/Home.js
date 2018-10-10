import React, { Component } from 'react';
import { View } from 'react-native';

import Topo from './components/Topo';
import Resultado from './components/Resultado';
import Painel from './components/Painel';

export default class Home extends Component {
  render() {
    return ( 
      <View>
        <Topo />
        <Resultado />
        <Painel />
      </View>

    );    
  }    
}
