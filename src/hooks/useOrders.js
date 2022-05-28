import {useReducer} from 'react';
import {Alert} from 'react-native';

import createId from '../utils/createId';

const ActionTypes = {
  ADD_ORDER: 'ADD_ORDER',
  DELETE_ORDER: 'DELETE_ORDER',
  SET_READY_ORDER: 'SET_READY_ORDER',
  SET_DELIVERED: 'SET_DELIVERED',
};

const useOrders = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.ADD_ORDER:
        return [
          {
            id: createId(),
            time: new Date().toLocaleString().substring(11, 19),
            status: 'pending',
            items: action.payload.order,
            tableNumber: action.payload.tableNumber,
            number: state[0] ? state[0].number + 1 : 1,
            price: action.payload.order.reduce((acc, item) => {
              return acc + item.price;
            }, 0),
          },
          ...state,
        ];
      case ActionTypes.DELETE_ORDER:
        return state.filter((item) => item.id !== action.id);
      case ActionTypes.SET_READY_ORDER:
        return state.map((item) => (item.id === action.id ? {...item, status: 'ready'} : item));
      case ActionTypes.SET_DELIVERED:
        return state.map((item) => (item.id === action.id ? {...item, status: 'delivered'} : item));
      default:
        return state;
    }
  };

  const [orders, dispatch] = useReducer(reducer, []);

  const deleteOrder = (id) => {
    Alert.alert(
      'Deleting order',
      'Are you sure you want to delete this order?',
      [
        {
          text: 'Yes',
          style: 'cancel',
          onPress: () => dispatch({type: ActionTypes.DELETE_ORDER, id: id}),
        },
        {
          text: 'No',
        },
      ],
      {cancelable: true}
    );
  };

  const readyOrder = (id) => {
    dispatch({type: ActionTypes.SET_READY_ORDER, id: id});
  };

  const deliveredOrder = (id) => {
    dispatch({type: ActionTypes.SET_DELIVERED, id: id});
  };

  const addOrder = (order) => {
    dispatch({type: ActionTypes.ADD_ORDER, payload: order});
  };

  return {
    orders,
    addOrder,
    deleteOrder,
    readyOrder,
    deliveredOrder,
  };
};

export default useOrders;
