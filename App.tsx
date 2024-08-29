import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { Text, useColorScheme, View } from 'react-native';
import DashboardIndex from './screen/(Dashboard)/Index';
import { Provider } from 'react-redux';
import { store} from './store';
import BookOrder from './screen/(Dashboard)/Order';
import OrderDetails from './screen/(Dashboard)/OrderBottom/[orderId]';
// import { PersistGate } from 'redux-persist/integration/react';


function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
        {/* <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}> */}
    {/* // <View>
    // <Text className='text-xl text-green-700'>Lorem ipsum dolor sit amet.</Text>
    // <Login/> */}
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" component={DashboardIndex} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="orderDetail" component={OrderDetails} />
        <Stack.Screen name="createOrder" component={BookOrder} />
        <Stack.Screen name="singup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    {/* // </View> */}
    {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
