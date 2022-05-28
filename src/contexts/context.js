import {createContext} from 'react';

export default createContext({
  orders: [],
  addOrder: (order) => {},
  deleteOrder: (orderId) => {},
  readyOrder: (orderId) => {},
  deliveredOrder: (orderId) => {},
});
