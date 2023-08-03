import React, { FC, useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stackScreens} from './Common'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
interface HomeProps {
  // props nếu có
}

interface HomeState {
  // state nếu có
}

type Props = NativeStackScreenProps<stackScreens, 'Start'>;


const Home: FC<HomeProps> = () => {
  const {navigation} = props;
  const handleNavigateToStart = () => {
    navigation.navigate("Start");
  };
  
  return (
    <TouchableOpacity onPress={handleNavigateToStart}>
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;