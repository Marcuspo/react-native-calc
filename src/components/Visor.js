import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class Visor extends Component {
  render() {
    return (
      <View style={styles.topo}>
        <TextInput
          style={styles.Texto}
          placeholder="Resultado"
          placeholderTextColor="#2196F3"
          editable={false}
          value={this.props.resultado}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    borderColor: "#C0C0C0",
    borderWidth: 1,
    alignItems: "center"
  },
  Texto: {
    height: 100,
    fontSize: 28
  }
});
