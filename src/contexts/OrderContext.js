import React from 'react';
import Context from './context';
import useOrders from '../hooks/useOrders';

const OrderContext = ({children}) => {
  const {orders, addOrder, deleteOrder, readyOrder, deliveredOrder} = useOrders();

  return (
    <Context.Provider
      value={{
        orders,
        addOrder,
        deleteOrder,
        readyOrder,
        deliveredOrder,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default OrderContext;
