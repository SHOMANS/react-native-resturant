import React, {useContext, useEffect} from 'react';
import {Text, Button, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Context from '../contexts/context';

const ReadyOrder = ({route, navigation}) => {
  const {orders} = useContext(Context);
  const {tableNumber} = route.params;

  const myOrder = orders.find((item) => item.tableNumber === tableNumber);

  useEffect(() => {
    if (!myOrder) {
      navigation.navigate('Home', {tableNumber: tableNumber});
    }
    if (myOrder?.status === 'pendding') {
      navigation.navigate('Waiting', {tableNumber: tableNumber});
    }
  }, [myOrder, navigation, tableNumber]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ReadyOrder.png')} style={styles.image} />
      <Text style={styles.text}>Your order is ready now, you can take it from the reception.</Text>
      <Text style={styles.text}>Order number: {myOrder?.number}</Text>
      <View style={styles.iconContainer}>
        <Icon name="check-circle" size={50} color={'green'} />
      </View>
      <Button
        title="Create New Order"
        onPress={() =>
          navigation.navigate('Home', {
            tableNumber: tableNumber,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Roboto',
    paddingHorizontal: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#789',
  },
  iconContainer: {
    marginBottom: 20,
  },
});

export default ReadyOrder;
