import React, {useContext, useEffect} from 'react';
import {Text, Button, View, StyleSheet, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
import HorizontalListt from '../components/HorizontalListt';

import categories from '../fakeData/allMenu';

import Context from '../contexts/context';

const CheckItemScreen = ({route, navigation}) => {
  const [order, setOrder] = React.useState([]);

  const {tableNumber} = route.params;

  const {addOrder, orders} = useContext(Context);

  const handleSubmitOrderItems = (newOrder) => {
    setOrder((prevState) => [...prevState, newOrder]);
  };
  const handleSubmitOrder = () => {
    if (order.length > 0) {
      Alert.alert(
        'Order now',
        'Are you sure you want to submit your order?',
        [
          {
            text: 'Yes',
            style: 'cancel',
            onPress: () => {
              addOrder({order: order, tableNumber: tableNumber});
              setOrder([]);
              navigation.navigate('Waiting', {tableNumber: tableNumber});
            },
          },
          {
            text: 'No',
          },
        ],
        {cancelable: true}
      );
    }
  };

  const deleteOneFromOrder = (id) => {
    setOrder((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    const myOrder = orders.find((item) => item.tableNumber === tableNumber);
    if (myOrder?.status === 'pendding') {
      navigation.navigate('Waiting', {tableNumber: tableNumber});
    }
    if (myOrder?.status === 'ready') {
      navigation.navigate('Ready', {tableNumber: tableNumber});
    }
  }, [navigation, orders, tableNumber]);

  return (
    <>
      <View style={styles.user}>
        <Header title={'Order for table ' + tableNumber} />
        <View style={styles.container}>
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <Button title="Other Table" color={'#495'} onPress={() => navigation.navigate('Customer Login')} />
              <Text style={styles.smallText}>are you done?</Text>

              {order?.map((item, index) => (
                <Text style={styles.smallerText} key={index}>
                  {item?.name} {item.quantity} ${item.price}{' '}
                  <Icon name="remove" size={20} color="firebrick" onPress={() => deleteOneFromOrder(item.id)} />
                </Text>
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <Button disabled={order.length === 0} title="order now" onPress={handleSubmitOrder} />
              <Text style={styles.text}>total: ${order?.reduce((acc, currebt) => acc + +currebt?.price, 0)}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <HorizontalListt items={item?.list} handleSubmitOrder={handleSubmitOrderItems} />
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  user: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#123',
  },
  smallText: {
    fontSize: 16,
    marginTop: 10,
    color: '#123',
  },
  smallerText: {
    fontSize: 12,
    color: '#123',
  },
  buttons: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    paddingVertical: 8,
    marginBottom: 8,
  },
});

export default CheckItemScreen;
