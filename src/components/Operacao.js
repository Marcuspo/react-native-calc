import React, { Component } from "react";
import { Picker, StyleSheet } from "react-native";

export default class Operacao extends Component {
  constructor(props) {
    super(props);

    this.state = { selecao: "" };
  }
  render() {
    return (
      <Picker
        style={styles.operacao}
        selectedValue={this.state.selecao}
        onValueChange={itemValue => this.setState({ selecao: itemValue })}
      >
        <Picker.Item label="Soma" value="soma" />
        <Picker.Item label="Subtração" value="subtracao" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
});
