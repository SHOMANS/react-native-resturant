import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput, Dimensions, ImageBackground} from 'react-native';

const {width} = Dimensions.get('window');

const SignInCustomer = ({navigation}) => {
  const [tableNumber, setTableNumber] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Home', {tableNumber});
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/SignInAdmin.jpg')}
        resizeMode="cover"
        style={styles.image}
        blurRadius={4}
        blurType={'dark'}
      >
        <View style={styles.viewWrapper}>
          <Text style={styles.text}>Table Number</Text>

          <View>
            <TextInput
              placeholder="Enter Your Table Number"
              value={tableNumber}
              style={styles.textInput}
              keyboardType="numeric"
              onChangeText={(value) => setTableNumber(value)}
              placeholderTextColor="#abc"
            />
          </View>
          <Button
            disabled={tableNumber === ''}
            title={'Start Ordering'}
            onPress={handleSubmit}
            color="#841584"
            accessibilityLabel="Start Ordering"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

// These are user defined styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    padding: 20,
    fontSize: 30,
    color: '#fff',
  },
  textInput: {
    width: width - 50,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    color: '#fff',
    fontSize: 20,
  },
});

export default SignInCustomer;
