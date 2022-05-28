import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({navigation, item, deleteOrder, readyOrder, deliveredOrder}) => {
  const changeStatus = () => {
    if (item.status === 'pending') {
      readyOrder(item.id);
    }
    if (item.status === 'ready') {
      deliveredOrder(item.id);
    }
  };

  const openOrderPage = () => {
    navigation.navigate('Order', {
      order: item,
    });
  };

  return (
    <TouchableOpacity style={styles.listItem} onPress={changeStatus}>
      <View style={styles.listItemView}>
        <View style={styles.oneIconView}>
          <Icon.Button name="external-link" size={16} color="white" onPress={() => openOrderPage(item.id)} />
        </View>
        <Text style={item.status === 'delivered' ? styles.checkedItemText : styles.listItemText}>
          number: {item.number} | price: {item.price} | time: {item.time}
        </Text>
        <View style={styles.iconView}>
          <Icon
            name="check"
            size={20}
            color={item.status === 'ready' || item.status === 'delivered' ? 'green' : 'silver'}
          />
          <Icon name="check-circle" size={20} color={item.status === 'delivered' ? 'green' : 'silver'} />
          <Icon name="remove" size={20} color="firebrick" onPress={() => deleteOrder(item.id)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  listItemText: {
    fontSize: 14,
    color: '#123',
  },
  checkedItemText: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
    paddingLeft: 10,
  },
  oneIconView: {
    marginRight: 5,
  },
});

export default ListItem;
