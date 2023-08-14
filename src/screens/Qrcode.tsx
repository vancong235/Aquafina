import React, { FC, useState, useCallback, useEffect } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
  Dimensions,
  Modal
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface QrcodeProps {
  // props nếu có
}

interface QrcodeState {
  // state nếu có
}

type QrcodeScreenProps = {
  navigation: any;
  route: any;
};

const Qrcode: React.FC<QrcodeScreenProps> = ({navigation, route}) => {

  const [isThankModalVisible, setisThankModalVisible] = useState(false);

  const handleConfirm = () => {
    // Alert.alert("Hi");
    setisThankModalVisible(true);
  };
  const handleReturn = () => {
    // Alert.alert("Hi");
    navigation.replace('Home');
  };

  const anotherProcess = () => {
    // Alert.alert("Hi");
    navigation.replace('Loading');
  };

  const closeThankModal = () => {
    setisThankModalVisible(false);
  };

  const handleEnd = () => {
    // Xử lý sự kiện khi người dùng nhấp vào Main Screen
    navigation.replace("Home");
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
      <ImageBackground source={require('../../assets/Page/QrCode/QrcodePage.png')} style={styles.imageBackground}>
        <ImageBackground  source={require('../../assets/Page/QrCode/Change.png')} style={styles.QrcodeChange}>
            <Text style={styles.TextChangePoint}>
              Điểm quy đổi:
            </Text>
            <Text style={styles.TextPoint}>
              10
            </Text>
        </ImageBackground>
        <ImageBackground  source={require('../../assets/Page/QrCode/QrcodeText.png')} style={styles.QrcodeText}>
            <Text style={styles.TextLast}>
              Thời gian quét QR còn: 
              <Text style={styles.TextChange}> {remainingTime} GIÂY NỮA</Text>
            </Text>
        </ImageBackground>
        <TouchableOpacity onPress={handleConfirm} style={styles.EndButon}>
          <ImageBackground source={require('../../assets/Page/QrCode/EndButton.png')} style={styles.EndButonComponent}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={anotherProcess} style={styles.overView}>
        </TouchableOpacity>

        <Modal
        visible={isThankModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeThankModal}
      >
        <View style={styles.modalThankContainer}>
          <View style={styles.modalThankContent}>
            <ImageBackground
                  source={require('../../assets/Popup/CamOn/thank.png')}
                  style={styles.modalThankContent1}>
                <TouchableOpacity onPress={handleEnd} style={styles.imageBackground}>
                    <ImageBackground
                          source={require('../../assets/Popup/CamOn/confirm.png')}
                          style={styles.modalThankConfirm}>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </Modal>
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
  QrcodeChange: {
    top: windowHeight*0.17,
    position: 'absolute',
    flex: 1,
    width: windowWidth * 0.89,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  Text1: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  Text2: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  QrcodeText: {
    flex: 1,
    top: windowHeight*0.29,
    position: 'absolute',
    width: windowWidth * 0.89,
    height: windowHeight * 0.38,
    resizeMode: 'contain',
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
  TextLast: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    alignSelf: 'center',
  },
  TextChange: {
    fontSize: 13,
    color: "red",
    fontWeight: "bold",
  },
  TextChangePoint: {
    fontSize: 14,
    color: '#336CC8',
    fontWeight: 'bold',
    right: windowWidth * 0.2
  },
  TextPoint: {
    fontSize: 40,
    color: '#1545A5',
    fontWeight: 'bold',
    left: windowWidth * 0.12
  },
  modalThankContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  modalThankContent: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.7,
    height: windowHeight * 0.7
  },
  modalThankContent1: {
    position: 'absolute',
    alignItems: 'center',
    width: windowWidth * 0.9,
    height: windowHeight * 0.637
  },
  modalThankConfirm: {
    bottom: windowHeight * 0.015,
    position: 'absolute',
    alignItems: 'center',
    width: windowWidth * 0.30,
    height: windowHeight * 0.15,
    resizeMode: "contain"
  }
});

export default Qrcode;