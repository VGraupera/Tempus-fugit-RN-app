/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native";

import DayLeft from "./components/DayLeft";
import MonthLeft from "./components/MonthLeft";
import QuarterLeft from "./components/QuarterLeft";
import YearLeft from "./components/YearLeft";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <DayLeft />
          <MonthLeft />
          <QuarterLeft />
          <YearLeft />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {}
});

export default App;
