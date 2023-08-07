import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import Loading from '../screens/Loading'
import Qrcode from '../screens/Qrcode'
import Start from '../screens/Start'
import Turtorial from '../screens/Turtorial'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from './Param'

const Stack = createNativeStackNavigator<StackParams>();

export default function Root() {
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
  )
}