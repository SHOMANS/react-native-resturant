import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Dashboard');
  }, 1500);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/SplashScreen.webp')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 250,
  },
});

export default SplashScreen;
