// import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, Text, StyleSheet, Modal, View, TextInput, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default function FoodModal({item, isModalVisible, toggleModalVisibility, handleSubmitOrder}) {
  const [inputValue, setInputValue] = useState({quantity: '', note: ''});

  const handleChangeInput = (name, value) => {
    setInputValue({...inputValue, [name]: value});
  };

  const checkItem = ({quantity, note}) => {
    if (inputValue.quantity !== '') {
      const newItem = {
        id: item.id,
        name: item.name,
        quantity: quantity,
        note: note,
        price: +inputValue.quantity * item.price,
      };
      handleSubmitOrder(newItem);
      toggleModalVisibility();
      setInputValue({quantity: '', note: ''});
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isModalVisible}
      presentationStyle="overFullScreen"
      onDismiss={toggleModalVisibility}
    >
      <View style={styles.viewWrapper}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Count</Text>
          <TextInput
            placeholder="enter the quantity of your choice"
            value={inputValue.quantity}
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(value) => handleChangeInput('quantity', value)}
            placeholderTextColor="#789"
          />
          <Text style={styles.text}>Note</Text>
          <TextInput
            placeholder="add notes to the barman"
            value={inputValue.note}
            style={styles.textInput}
            numberOfLines={4}
            onChangeText={(value) => handleChangeInput('note', value)}
            placeholderTextColor="#789"
          />
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <Button
                disabled={inputValue.quantity === ''}
                title={`Done $${+inputValue.quantity * item.price}`}
                onPress={() => {
                  checkItem(inputValue.quantity, inputValue.note);
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Close" onPress={toggleModalVisibility} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

// These are user defined styles
const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  textInput: {
    width: '80%',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    marginBottom: 5,
    color: '#123',
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    flex: 1,
  },
  text: {
    padding: 10,
    color: '#456',
  },
});
