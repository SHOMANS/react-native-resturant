import React, {useContext} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import context from '../contexts/context';

const OrderDetailsScreen = ({route, navigation}) => {
  const {readyOrder} = useContext(context);
  const {order} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.orderDetails}>
        <Text style={styles.text}>Order Number: {order.number}</Text>
        <Text style={styles.text}>Table Number: {order.tableNumber}</Text>
        <Text style={styles.text}>Order Price: {order.price}</Text>
        <Text style={styles.text}>Order time: {order.time.substring(0, 5)}</Text>
      </View>
      <FlatList
        data={order.items}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <View>
              <Text style={styles.text}>Item name: {item.name}</Text>
            </View>
            <View>
              <Text style={styles.text}>Item price: {item.price}</Text>
            </View>
            <Text style={styles.text}>Customer notes: {item.note ?? '_'}</Text>
          </View>
        )}
      />
      <Button
        title="Ready to deliver"
        onPress={() => {
          readyOrder(order.id);
          navigation.replace('List');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderDetails: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#f8c8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#d8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: 16,
    color: '#123',
  },
});

export default OrderDetailsScreen;
