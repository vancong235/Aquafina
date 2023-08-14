import React, { FC, useState, useCallback, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
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

const Loading: React.FC<LoadingScreenProps> = ({ navigation, route }) => {
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleConfirm = () => {
    // navigation.replace("Qrcode");
    setIsSimpleModalVisible(true);
  };

  const handleReturn = () => {
    navigation.replace("Start");
  };

  const anotherProcess = () => {
    navigation.replace("Loading");
  };

  const handleMainScreenPress = () => {
    // Xử lý sự kiện khi người dùng nhấp vào Main Screen
    navigation.replace("Home");
  };

  const handleAddTimePress = () => {
    // Xử lý sự kiện khi người dùng nhấp vào Add Time
    navigation.replace("Loading");
  };

  const handleNo = () => {
    // Xử lý sự kiện khi người dùng nhấp vào Add Time
    setisThankModalVisible(true);
  };


  const handleYes = () => {
    // Xử lý sự kiện khi người dùng nhấp vào Add Time
    navigation.replace("Qrcode");
  };

  const handleEnd = () => {
    // Xử lý sự kiện khi người dùng nhấp vào Main Screen
    navigation.replace("Home");
  };

  // Set timmer for screens when load
  const [remainingTime, setRemainingTime] = useState(30);
  // Set modal
  const [modalVisible, setModalVisible] = useState(false);
  const [isSimpleModalVisible, setIsSimpleModalVisible] = useState(false);
  const [isThankModalVisible, setisThankModalVisible] = useState(false);

  // Action of moal
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setIsSimpleModalVisible(false);
  };
  
  const closeThankModal = () => {
    setisThankModalVisible(false);
  };

  // Action of time
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(timer);
      handleReturn();
    }

    if (remainingTime == 10) {
      setModalVisible(true);
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
    <ImageBackground
      source={require("../../assets/Page/Loading/LoadingPage.png")}
      style={styles.imageBackground}
    >
      <ImageBackground
        source={require("../../assets/Page/Loading/BodyView.png")}
        style={styles.LoadingText}
      >
        <TouchableOpacity onPress={handleReturn} style={styles.Return}>
          <ImageBackground
            source={require("../../assets/Page/Loading/Return.png")}
            style={styles.ReturnComponent}
          ></ImageBackground>
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
              ? require("../../assets/Page/Loading/CompleteGray.png")
              : require("../../assets/Page/Loading/CompleteBlue.png")
          }
          style={styles.EndButonComponent}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={anotherProcess}
        style={styles.overView}
      ></TouchableOpacity>

      {/* Cảnh báo */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalViews}>
          <ImageBackground
            source={require('../../assets/Popup/CanhBao/CamOn.png')}
            imageStyle={{ borderRadius: 12 }}
            style={styles.modalInfo}>
            <Text style={styles.TextInforModal}>
              Thời gian thực hiện quy trình đã kết {'\n'}  thúc, bạn có cần thêm thời gian không?
            </Text>
            <Text style={styles.TextLastModal}>
              Trở về màn hình chính sau:
              <Text style={styles.TextChangeModal}> {remainingTime} GIÂY NỮA</Text>
            </Text>
            <View style={styles.containerImage}>
            <TouchableOpacity onPress={handleMainScreenPress} style={styles.columnImage}>
              <View>
                <ImageBackground
                  source={require('../../assets/Popup/CanhBao/MainScreen.png')}
                  style={styles.modalInfoImage}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddTimePress}  style={styles.columnImage}> 
              <View>
                <ImageBackground
                  source={require('../../assets/Popup/CanhBao/AddTime.png')}
                  style={styles.modalInfoImage}
                />
              </View>
            </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Modal>

      {/* Tích điểm */}
      <Modal
        visible={isSimpleModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ImageBackground
                  source={require('../../assets/Popup/TichDiem/CanhBao.png')}
                  style={styles.modalContent1}>
                <TouchableOpacity onPress={handleYes} style={styles.imageBackground}>
                    <ImageBackground
                          source={require('../../assets/Popup/TichDiem/TichDiem.png')}
                          style={styles.modalConfirm}>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
            <TouchableOpacity onPress={handleNo} style={styles.imageBackground}>
              <ImageBackground
                    source={require('../../assets/Popup/TichDiem/Khong.png')}
                    style={styles.modalContent2}>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Cảm ơn */}
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
    resizeMode: "cover",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center",
  },
  overView: {
    opacity: 0.3,
    width: windowHeight * 0.3,
    height: windowHeight * 0.3,
    resizeMode: "cover",
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center",
  },
  LoadingText: {
    flex: 1,
    top: windowHeight * 0.17,
    position: "absolute",
    width: windowWidth * 0.9,
    height: windowHeight * 0.52,
    resizeMode: "cover",
  },
  Return: {
    flex: 1,
    top: windowWidth * 0.018,
    left: windowWidth * 0.025,
    position: "absolute",
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    resizeMode: "cover",
  },
  EndButon: {
    bottom: windowHeight * 0.065,
    position: "absolute",
    width: windowWidth * 0.38,
    height: windowWidth * 0.38,
    alignSelf: "center",
    resizeMode: "contain",
  },
  EndButonComponent: {
    flex: 1,
  },
  ReturnComponent: {
    flex: 1,
  },
  TextLast: {
    position: "absolute",
    bottom: 15,
    fontSize: 13,
    alignSelf: "center",
  },
  TextChange: {
    fontSize: 13,
    color: "red",
    fontWeight: "bold",
  },
  QuantityText: {
    bottom: -295,
    width: windowWidth,
    height: windowWidth * 0.25,
    alignSelf: "center",
    resizeMode: "contain",
  },
  containerText: {
    flexDirection: "row", // Xếp các cột theo chiều ngang
  },
  column: {
    flex: 1, // Cột chiếm phần bằng nhau trong không gian ngang
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  QuantityAquafinaBottle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "blue",
  },
  BottleTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#336CC8",
    marginHorizontal: 16,
  },
  Quantity: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FA4238",
    marginHorizontal: 45,
  },
  Bottle: {
    fontSize: 12,
    color: "#336CC8",
    marginHorizontal: 42,
  },
  BottleTitle1: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#336CC8",
    marginHorizontal: 42,
  },
  Quantity1: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FA4238",
    marginHorizontal: 75,
  },
  Bottle1: {
    fontSize: 12,
    color: "#336CC8",
    marginHorizontal: 70,
  },
  containerPoint: {
    position: "absolute",
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  textPoint: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  textPoint1: {
    fontSize: 50,
    color: "#1545A5",
  },
  textPoint2: {
    fontSize: 22,
    color: "#6691D6",
  },
  modalViews: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  modalInfo: {
    position: 'absolute',
    backgroundColor: 'white',
    width: windowWidth * 0.8,
    aspectRatio: 1.1,
    borderRadius: 100,
  },
  TextInforModal: {
    position: "absolute",
    bottom: 130,
    fontSize: 13,
    alignSelf: "center",
    textAlign: 'center' //
  },
  TextLastModal: {
    position: "absolute",
    bottom: 100,
    fontSize: 13,
    alignSelf: "center",
    textAlign: 'center' //
  },
  TextChangeModal: {
    fontSize: 13,
    color: "red",
    fontWeight: "bold",
    textAlign: 'center' //
  },
  ButtonMainScreen: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold",
    textAlign: 'center' //
  },
  ButtonAddTime: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold",
    textAlign: 'center' //
  },

  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },

  columnImage: {
    flex: 1,
    height: 50,
    margin: 10,
    top: 210,
    borderRadius: 20
  },

  modalInfoImage: {
    position: 'absolute',
    width: windowWidth * 0.35,
    height: windowHeight * 0.05
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  modalContent: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.7,
    height: windowHeight * 0.7
  },
  modalContent1: {
    top: windowHeight * 0.07,
    position: 'absolute',
    alignItems: 'center',
    width: windowWidth * 0.8,
    height: windowHeight * 0.319
  },
  modalContent2: {
    bottom: windowHeight * 0.21,
    position: 'absolute',
    alignItems: 'center',
    width: windowWidth * 0.15,
    height: windowHeight * 0.0715,
    resizeMode: "contain"
  },
  modalConfirm: {
    bottom: windowHeight * 0.035,
    position: 'absolute',
    alignItems: 'center',
    width: windowWidth * 0.21,
    height: windowHeight * 0.1,
    resizeMode: "contain"
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

export default Loading;
