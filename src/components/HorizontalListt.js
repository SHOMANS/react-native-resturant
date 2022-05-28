import React from 'react';

import {FlatList} from 'react-native';
import FoodItem from './FoodItem';

const HorizontalListt = ({items, handleSubmitOrder}) => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={items}
      renderItem={({item, index}) => <FoodItem handleSubmitOrder={handleSubmitOrder} item={item} index={index} />}
    />
  );
};

export default HorizontalListt;
