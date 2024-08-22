import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';



function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    // <View>
      // <Text className='text-xl text-green-700'>Lorem ipsum dolor sit amet.</Text>
      <Login/>
    /* <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="singup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer> */
    // </View>
  );
}

export default App;
