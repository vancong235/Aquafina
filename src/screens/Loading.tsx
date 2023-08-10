import React, { FC, useState, useCallback, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Button, Dimensions  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface LoadingProps {
  // props nếu có
}

interface LoadingState {
  // state nếu có
}

type LoadingScreenProps = {
  navigation: any;
  route: any;
};

const Loading: React.FC<LoadingScreenProps> = ({navigation, route}) => {

  const [isImageChanged, setIsImageChanged] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const handleConfirm = () => {
    // Alert.alert("Hi");
    navigation.replace('Turtorial');
  };
  const handleReturn = () => {
    // Alert.alert("Hi");
    navigation.replace('Start');
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

    if (remainingTime > 27) {
      setIsButtonEnabled(false);
    } else {
      setIsButtonEnabled(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);
  
  return (
      <ImageBackground source={require('../../assets/Page/Loading/LoadingPage.png')} style={styles.imageBackground}>

        <ImageBackground  source={require('../../assets/Page/Loading/BodyView.png')} style={styles.LoadingText}>
            <TouchableOpacity onPress={handleReturn} style={styles.Return}>
              <ImageBackground source={require('../../assets/Page/Loading/Return.png')} style={styles.ReturnComponent}>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.containerPoint}>
              <View style={styles.textPoint}>
                <Text style={styles.textPoint1}>30</Text>
                <Text style={styles.textPoint2}>Điểm</Text>
              </View>
            </View>
            <View style={styles.QuantityText}>
              <View style={styles.containerText}>
                  <View style={styles.column}>
                    <Text style={styles.BottleTitle}>AQUAFINA</Text>
                    <Text style={styles.Quantity}>1</Text>
                    <Text style={styles.Bottle}>chai</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.BottleTitle1}>CHAI KHÁC</Text>
                    <Text style={styles.Quantity1}>1</Text>
                    <Text style={styles.Bottle1}>chai</Text>
                  </View>
              </View>
            </View>
            <Text style={styles.TextLast}>
              Tự động kết thúc sau: 
              <Text style={styles.TextChange}> {remainingTime} GIÂY NỮA</Text>
            </Text>
        </ImageBackground>
        <TouchableOpacity
        onPress={handleConfirm}
        style={[styles.EndButon, !isButtonEnabled && styles.EndButon]}
        disabled={!isButtonEnabled}
      >
        <ImageBackground
          source={
            remainingTime > 27
              ? require('../../assets/Page/Loading/CompleteGray.png')
              : require('../../assets/Page/Loading/CompleteBlue.png')
          }
          style={styles.EndButonComponent}
        />
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
  LoadingText: {
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
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    resizeMode: 'cover',
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
  },
  QuantityText: {
    bottom: -295,
    width: windowWidth,
    height: windowWidth * 0.25,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  containerText: {
    flexDirection: 'row', // Xếp các cột theo chiều ngang
  },
  column: {
    flex: 1, // Cột chiếm phần bằng nhau trong không gian ngang
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  QuantityAquafinaBottle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'blue',
  }, 
  BottleTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#336CC8',
    marginHorizontal: 16
  },
  Quantity: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FA4238',
    marginHorizontal: 45
  }, 
  Bottle: {
    fontSize: 12,
    color: '#336CC8',
    marginHorizontal: 42
  },
  BottleTitle1: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#336CC8',
    marginHorizontal: 42
  },
  Quantity1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FA4238',
    marginHorizontal: 75
  }, 
  Bottle1: {
    fontSize: 12,
    color: '#336CC8',
    marginHorizontal: 70
  },
  containerPoint: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPoint: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  textPoint1: {
    fontSize: 50,
    color: '#1545A5'
  },
  textPoint2: {
    fontSize: 22,
    color: '#6691D6'
  }
});

export default Loading;