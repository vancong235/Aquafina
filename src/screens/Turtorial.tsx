import React, { FC, useState, useCallback } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Button, Dimensions  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface TurtorialProps {
  // props nếu có
}

interface TurtorialState {
  // state nếu có
}

type TurtorialScreenProps = {
  navigation: any;
  route: any;
};

const Turtorial: React.FC<TurtorialScreenProps> = ({navigation, route}) => {
  const handleConfirm = () => {
    // Alert.alert("Hi");
    navigation.replace('Start');
  };
  const handleReturn = () => {
    // Alert.alert("Hi");
    navigation.replace('Home');
  };
  return (
      <ImageBackground source={require('../../assets/Page/Turtorial/TurtorialPage.jpg')} style={styles.imageBackground}>

        <ImageBackground  source={require('../../assets/Page/Turtorial/TurtorialText.png')} style={styles.TurtorialText}>
            <TouchableOpacity onPress={handleReturn} style={styles.Return}>
              <ImageBackground source={require('../../assets/Page/Turtorial/Return.png')} style={styles.ReturnComponent}>
              </ImageBackground>
            </TouchableOpacity>
        </ImageBackground>

        <TouchableOpacity onPress={handleConfirm} style={styles.ConfirmButon}>
          <ImageBackground source={require('../../assets/Page/Turtorial/ConfirmButon.png')} style={styles.ConfirmButonComponent}>
          </ImageBackground>
        </TouchableOpacity>
      
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center',
  },
  TurtorialText: {
    flex: 1,
    top: windowHeight*0.17,
    position: 'absolute',
    width: windowWidth * 0.94,
    height: windowHeight * 0.52,
    resizeMode: 'cover',
  },
  Return: {
    flex: 1,
    top: 12,
    left: 12,
    position: 'absolute',
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    resizeMode: 'cover',
  },
  ConfirmButon: {
    bottom: 105,
    position: 'absolute',
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  ConfirmButonComponent: {
    flex: 1
  },
  ReturnComponent: {
    flex: 1
  }
  
});

export default Turtorial;