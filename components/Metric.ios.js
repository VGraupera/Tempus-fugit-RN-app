import React, { Component } from "react";
import { Text, View, StyleSheet, ProgressViewIOS } from "react-native";

const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin: 2,
    flexDirection: 'row',
    flex: 1,
  },
  progressView: {
    transform: [{ scaleX: 1.0 }, { scaleY: 5.0 }],
    height: 10,
    margin: 3,
    flex: 2,
  },
  textView: {
    flex: 1,
  }
});

export default class Metric extends React.Component {
  render() {
    return (
      <View key={this.props.displayName} style={styles.item}>
        <ProgressViewIOS
          style={styles.progressView}
          progressTintColor={"green"}
          progress={this.props.value/100.0}
        />
        <Text style={styles.textView}>
          {this.props.displayName}: {this.props.value} %
        </Text>
      </View>
    );
  }
}
