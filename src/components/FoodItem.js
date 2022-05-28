import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FoodModal from './FoodModal';

const FoodItem = ({item, handleSubmitOrder}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleModalVisibility}>
        <Image style={styles.image} source={item.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.smallText}>price: ${item.price}</Text>
        </View>
      </TouchableOpacity>
      <FoodModal
        handleSubmitOrder={handleSubmitOrder}
        item={item}
        isModalVisible={isModalVisible}
        toggleModalVisibility={toggleModalVisibility}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    borderWidth: 2,
    borderColor: '#d35647',
    margin: 8,
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#123',
  },
  smallText: {
    color: '#123',
  },
});

export default FoodItem;
