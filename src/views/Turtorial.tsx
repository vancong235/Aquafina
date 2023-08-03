import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Turtorial: React.FC = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Turtorial</Text>
    </View>
  );
};

export default Turtorial;