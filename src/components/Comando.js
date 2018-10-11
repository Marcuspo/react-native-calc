import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

export default class Comando extends Component {
  render() {
    return (
      <View style={style.botao}>
        <Button title="Calcular" />
      </View>
    );
  }
}

const style = StyleSheet.create({
  botao: {
    marginLeft: 66,
    marginRight: 66
  }
});
