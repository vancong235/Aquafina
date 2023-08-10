import React, { FC, useState, useCallback } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Button, Dimensions  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface HomeProps {
  // props nếu có
}

interface HomeState {
  // state nếu có
}

type HomeScreenProps = {
  navigation: any;
  route: any;
};

const Home: React.FC<HomeScreenProps> = ({navigation, route}) => {
  const handleNavigateToStart = () => {
    navigation.replace('Turtorial');
  };
  
  return (
      <ImageBackground source={require('../../assets/Page/Home/Group.jpg')} style={styles.imageBackground}>
        <TouchableOpacity onPress={handleNavigateToStart} style={styles.container}>
        </TouchableOpacity>

        <ImageBackground source={require('../../assets/Page/Home/Footer.png')} style={styles.imageFooter}>
        </ImageBackground>

        <ImageBackground source={require('../../assets/Page/Home/Qrcode.png')} style={styles.imageQrcode}>
        </ImageBackground>

        <ImageBackground source={require('../../assets/Page/Home/Title.png')} style={styles.imageTitle}>
        </ImageBackground>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: windowHeight * 0.088,
    position: 'absolute',
    width: windowWidth * 0.58,
    height: windowWidth * 0.58,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageBackground: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    resizeMode: "contain"
  },
  imageButton: {
    bottom: windowHeight * 0.135,
    position: 'absolute',
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageQrcode: {
    bottom: windowHeight * 0.06,
    position: 'absolute',
    width: windowWidth*0.113,
    height: windowWidth*0.14,
    right: windowWidth*0.03,
    resizeMode: 'stretch',
  },
  imageTitle: {
    bottom: windowHeight * 0.042,
    position: 'absolute',
    width: windowWidth*0.66,
    height: windowHeight * 0.033,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  imageFooter: {
    bottom: 0,
    position: 'absolute',
    width: windowWidth,
    height: windowWidth * 0.05,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },

});

export default Home;