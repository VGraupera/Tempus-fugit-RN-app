import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1"
  }
});

export default class Metric extends React.Component {
  render() {
    return (
      <View key={this.props.displayName} style={styles.item}>
        <Text>
          {this.props.displayName}: {this.props.value}
        </Text>
      </View>
    );
  }
}
