import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import Header from '../components/Header';
import ListItem from '../components/ListItem';
import context from '../contexts/context';

const ListScreen = ({navigation}) => {
  const {orders, deleteOrder, readyOrder, deliveredOrder} = useContext(context);

  return (
    <View style={styles.container}>
      <Header title="Orders List" />
      {orders?.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={({item}) => <ListItem item={item} {...{navigation, deleteOrder, readyOrder, deliveredOrder}} />}
        />
      ) : (
        <View style={styles.viewCenter}>
          <Text style={styles.text}>No orders yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#123',
  },
});

export default ListScreen;
