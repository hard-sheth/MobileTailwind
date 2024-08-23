import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { Text, useColorScheme, View } from 'react-native';
import DashboardIndex from './screen/(Dashboard)/Index';



function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    // <View>
    // <Text className='text-xl text-green-700'>Lorem ipsum dolor sit amet.</Text>
    // <Login/>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" component={DashboardIndex} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="singup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

export default App;
