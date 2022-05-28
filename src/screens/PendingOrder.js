import React, {useContext, useEffect} from 'react';
import {Text, Button, View, Image, StyleSheet} from 'react-native';

import Context from '../contexts/context';

const PendingOrder = ({route, navigation}) => {
  const {orders} = useContext(Context);
  const {tableNumber} = route.params;

  useEffect(() => {
    const myOrder = orders.find((item) => item.tableNumber === tableNumber);
    if (!myOrder) {
      navigation.navigate('Home', {tableNumber: tableNumber});
    }
    if (myOrder?.status === 'ready') {
      navigation.navigate('Ready', {tableNumber: tableNumber});
    }
  }, [navigation, orders, tableNumber]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/PendingOrder.png')} style={styles.image} />
      <Text style={styles.text}>Your order is in progress now, please wait till it's ready</Text>
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
});

export default PendingOrder;
