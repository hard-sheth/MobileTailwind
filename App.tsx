import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screen/Login';
import DashboardIndex from './src/screen/(Dashboard)/Index';
import OrderDetails from './src/screen/(Dashboard)/OrderBottom/[orderId]';
import BookOrder from './src/screen/(Dashboard)/Order';
import Signup from './src/screen/Signup';
import CustomLogin from './src/screen/CustomLogin';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="dashboard" component={DashboardIndex} /> */}
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="customlogin" component={CustomLogin} />
        <Stack.Screen name="orderDetail" component={OrderDetails} />
        <Stack.Screen name="createOrder" component={BookOrder} />
        <Stack.Screen name="singup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
