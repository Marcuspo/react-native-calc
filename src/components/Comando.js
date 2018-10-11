import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

export default class Comando extends Component {
  render() {
    return (
      <View style={style.botao}>
        <Button title="Calcular" color="#841584" />
      </View>
    );
  }
}

const style = StyleSheet.create({
  botao: {
    justifyContent: "center",
    alignItems: "center"
  }
});
