import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from './Home';
import Loading from './Loading';
import Qrcode from './Qrcode';
import Start from './Start';
import Turtorial from './Turtorial';

export type stackScreens = {
  Home: undefined;
  Qrcode: undefined;
  Start: undefined;
  Turtorial: undefined;
  Loading: undefined;
};

const Stack = createNativeStackNavigator<stackScreens>();

interface CommonProps {}

export default class Common extends Component<CommonProps> {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false // Ẩn tiêu đề
        }}>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Loading" component={Loading}></Stack.Screen>
          <Stack.Screen name="Qrcode" component={Qrcode}></Stack.Screen>
          <Stack.Screen name="Start" component={Start}></Stack.Screen>
          <Stack.Screen name="Turtorial" component={Turtorial}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});