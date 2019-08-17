/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Header, Left, Body, Right, Title} from 'native-base';

import DayLeft from './components/DayLeft';
import MonthLeft from './components/MonthLeft';
import QuarterLeft from './components/QuarterLeft';
import YearLeft from './components/YearLeft';

const App = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Tempus Fugit</Title>
        </Body>
        <Right />
      </Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <DayLeft />
        <MonthLeft />
        <QuarterLeft />
        <YearLeft />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
});

export default App;
