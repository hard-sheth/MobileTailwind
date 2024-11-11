import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import { NavigationContainer } from '@react-navigation/native';
import DashboardIndex from './src/screen/(Dashboard)/Index';
import { Provider } from 'react-redux';
import { store } from './src/store';
import BookOrder from './src/screen/(Dashboard)/Order';
import OrderDetails from './src/screen/(Dashboard)/OrderBottom/[orderId]';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="dashboard" component={DashboardIndex} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="orderDetail" component={OrderDetails} />
          <Stack.Screen name="createOrder" component={BookOrder} />
          <Stack.Screen name="singup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App
