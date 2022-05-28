import createId from '../utils/createId';
const food = [
  {
    name: 'Pizza',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/pizza.jpg'),
    id: createId(),
  },
  {
    name: 'Steak',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/steak.jpeg'),
    id: createId(),
  },
  {
    name: 'Burger',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/burger.jpg'),
    id: createId(),
  },
  {
    name: 'Pasta',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/pasta.jpg'),
    id: createId(),
  },
];
const drinks = [
  {
    name: 'Juice',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/juice.jpg'),
    id: createId(),
  },
  {
    name: 'Milkshake',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/milkshake.jpg'),
    id: createId(),
  },
  {
    name: 'Ice cofee',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/ice-coffee.png'),
    id: createId(),
  },
  {
    name: 'Tea',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/tea.png'),
    id: createId(),
  },
];
const breakFast = [
  {
    name: 'Sandwich',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/sandwiches.jpg'),
    id: createId(),
  },
  {
    name: 'Toast',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/toast.jpg'),
    id: createId(),
  },
  {
    name: 'Falafel',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/falafel.jpg'),
    id: createId(),
  },
  {
    name: 'Homos',
    price: Math.floor(Math.random() * 10) + 1,
    avatar: require('../assets/hommos.jpg'),
    id: createId(),
  },
];

const categories = [
  {name: 'food', id: createId(), list: food},
  {name: 'drinks', id: createId(), list: drinks},
  {name: 'break Fast', id: createId(), list: breakFast},
];

export default categories;
