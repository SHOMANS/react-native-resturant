import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/CheckItemScreen';
import ListScreen from './src/screens/ListScreen';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen';
import PendingOrder from './src/screens/PendingOrder';
import ReadyOrder from './src/screens/ReadyOrder';
import SignInAdmin from './src/screens/SignInAdmin';
import SignInCustomer from './src/screens/SignInCustomer';

import Icon from 'react-native-vector-icons/FontAwesome';

import OrderContext from './src/contexts/OrderContext';
import SplashScreen from './src/screens/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const CustomerStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();

const App = () => {
  return (
    <OrderContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />

          <Stack.Screen name="Dashboard" options={{headerShown: false}}>
            {() => {
              return (
                <Tab.Navigator
                  screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                      if (route.name === 'Customer') {
                        return <Icon name="user" size={size} color={color} />;
                      } else {
                        return <Icon name="user-secret" size={size} color={color} />;
                      }
                    },
                  })}
                >
                  <Tab.Screen name="Customer">
                    {() => (
                      <CustomerStack.Navigator>
                        <CustomerStack.Screen
                          name="Customer Login"
                          component={SignInCustomer}
                          options={{headerShown: false}}
                        />
                        <CustomerStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
                        <CustomerStack.Screen name="Waiting" component={PendingOrder} options={{headerShown: false}} />
                        <CustomerStack.Screen name="Ready" component={ReadyOrder} options={{headerShown: false}} />
                      </CustomerStack.Navigator>
                    )}
                  </Tab.Screen>
                  <Tab.Screen name="Admin">
                    {() => (
                      <AdminStack.Navigator>
                        <AdminStack.Screen name="Admin Login" component={SignInAdmin} options={{headerShown: false}} />
                        <AdminStack.Screen name="List" component={ListScreen} options={{headerShown: false}} />
                        <AdminStack.Screen name="Order" component={OrderDetailsScreen} />
                      </AdminStack.Navigator>
                    )}
                  </Tab.Screen>
                </Tab.Navigator>
              );
            }}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </OrderContext>
  );
};

export default App;
