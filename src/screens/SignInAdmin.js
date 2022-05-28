import React, {useState} from 'react';
import {Text, Alert, StyleSheet, View, Button, TextInput, Dimensions, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const {width} = Dimensions.get('window');

const SignInAdmin = ({navigation}) => {
  const [authData, setAuthData] = useState({
    userName: 'admin@admin.com',
    password: 'admin123',
  });
  const [ShowPasword, setShowPasword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // if (authData.userName === 'admin@admin.com' && authData.password === 'admin123') {
    //   navigation.navigate('List');
    // }
    try {
      setIsLoading(true);
      await auth().signInWithEmailAndPassword(authData.userName, authData.password);
      navigation.navigate('List');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Alert.alert('something went wrong', error.message, [{text: 'OK'}]);
    }
  };

  const handleShowPassword = () => {
    setShowPasword(!ShowPasword);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/SignInAdmin.jpg')}
        resizeMode="cover"
        style={styles.image}
        blurRadius={4}
      >
        <View style={styles.viewWrapper}>
          <Text style={styles.text}>Usernamer</Text>
          <View>
            <TextInput
              placeholder="Enter Your username"
              value={authData.userName}
              style={styles.textInput}
              onChangeText={(value) => setAuthData({...authData, userName: value})}
              placeholderTextColor="#abc"
            />
          </View>
          <Text style={styles.text}>Password</Text>

          <View>
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={!ShowPasword}
              value={authData.password}
              style={styles.textInput}
              onChangeText={(value) => setAuthData({...authData, password: value})}
              placeholderTextColor="#abc"
            />
            <View style={styles.iconBox}>
              {ShowPasword ? (
                <Icon name="eye-slash" size={20} color="#fff" onPress={handleShowPassword} />
              ) : (
                <Icon name="eye" size={20} color="#fff" onPress={handleShowPassword} />
              )}
            </View>
          </View>
          <Button
            title={isLoading ? 'Loading...' : 'Sign in'}
            onPress={handleLogin}
            color="#841584"
            accessibilityLabel={isLoading ? 'Loading...' : 'Sign in'}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

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
  iconBox: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
});

export default SignInAdmin;
