/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
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
        <Body style={{flex: 3, flexDirection: 'row', justifyContent: 'center'}}>
          <Title>Tempus Fugit</Title>
        </Body>
        <Right />
      </Header>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <DayLeft />
          <MonthLeft />
          <QuarterLeft />
          <YearLeft />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
});

export default App;
