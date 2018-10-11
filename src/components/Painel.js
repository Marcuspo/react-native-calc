import React, { Component } from "react";
import { View } from "react-native";

import Entrada from "./Entrada";
import Operacao from "./Operacao";
import Comando from "./Comando";

export default class Painel extends Component {
  render() {
    return (
      <View>
        <Entrada />
        <Operacao />
        <Comando />
      </View>
    );
  }
}
