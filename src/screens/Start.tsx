import React, { FC, useState, useCallback, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Button, Dimensions  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface StartProps {
  // props nếu có
}

interface StartState {
  // state nếu có
}

type StartScreenProps = {
  navigation: any;
  route: any;
};

const Start: React.FC<StartScreenProps> = ({navigation, route}) => {

  const handleConfirm = () => {
    // Alert.alert("Hi");
    navigation.replace('Turtorial');
  };
  const handleReturn = () => {
    // Alert.alert("Hi");
    navigation.replace('Turtorial');
  };

  const anotherProcess = () => {
    // Alert.alert("Hi");
    navigation.replace('Loading');
  };

  // Set timmer for screens when load
  const [remainingTime, setRemainingTime] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(timer);
      handleReturn();
    }

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);
  
  return (
      <ImageBackground source={require('../../assets/Page/Start/StartPage.png')} style={styles.imageBackground}>

        <ImageBackground  source={require('../../assets/Page/Start/StartText.png')} style={styles.StartText}>
            <TouchableOpacity onPress={handleReturn} style={styles.Return}>
              <ImageBackground source={require('../../assets/Page/Start/Return.png')} style={styles.ReturnComponent}>
              </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.TextFirst}>Lần lượt bỏ từng chai nhựa rỗng {'\n'} vào ô bên trái</Text>

            <Text style={styles.TextLast}>
              Tự động kết thúc sau: 
              <Text style={styles.TextChange}> {remainingTime} GIÂY NỮA</Text>
            </Text>
        </ImageBackground>
        <TouchableOpacity onPress={handleConfirm} style={styles.EndButon}>
          <ImageBackground source={require('../../assets/Page/Start/EndButton.png')} style={styles.EndButonComponent}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={anotherProcess} style={styles.overView}>
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
  overView: {
    opacity: 0.3,
    width: windowHeight * 0.3,
    height: windowHeight * 0.3,
    resizeMode: 'cover',
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center',
  },
  StartText: {
    flex: 1,
    top: windowHeight*0.17,
    position: 'absolute',
    width: windowWidth * 0.9,
    height: windowHeight * 0.52,
    resizeMode: 'cover',
  },
  Return: {
    flex: 1,
    top: windowWidth * 0.018,
    left: windowWidth * 0.025,
    position: 'absolute',
    width: windowHeight * 0.19,
    height: windowHeight * 0.022,
    resizeMode: 'contain',
  },
  EndButon: {
    bottom: windowHeight * 0.065,
    position: 'absolute',
    width: windowWidth * 0.38,
    height: windowWidth * 0.38,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  EndButonComponent: {
    flex: 1
  },
  ReturnComponent: {
    flex: 1
  },
  TextFirst: {
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    textAlign: 'center' //
  },
  TextLast: {
    position: 'absolute',
    bottom: 15,
    fontSize: 13,
    alignSelf: 'center',
  },
  TextChange: {
    fontSize: 13,
    color: 'red',
    fontWeight: 'bold'
  }
});

export default Start;