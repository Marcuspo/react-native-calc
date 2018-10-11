import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class Entrada extends Component {
  render() {
    return (
      <View style={style.topo}>
        <TextInput
          style={style.numero}
          placeholder="Numeros"
          keyboardType="numeric"
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  numero: {
    width: 160,
    height: 70,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginTop: 15
  },
  topo: {
    alignItems: "center"
  }
});
