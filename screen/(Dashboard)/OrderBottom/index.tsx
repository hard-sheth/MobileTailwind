
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookHistory from './BookHistory';
import UpcomingOrder from './UpcomingOrder';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, useColorScheme, View } from 'react-native';
import Header from '../../../screencomponents/CustomToggler';
import { TouchableHighlight } from 'react-native';

const Order = ({ navigation }: any) => {
  const Tab = createBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
      <Header />
      <View className={`mt-2 flex-row justify-end mr-3`}>
        <TouchableHighlight onPress={() => navigation.push('createOrder')}>
          <Text className={`p-3 bg-[#0B5ED7] text-white rounded-md `}> Create Order</Text>
        </TouchableHighlight>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="AdvanceBook" component={UpcomingOrder} options={{
          tabBarLabel: 'Upcoming Deliveries',
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
          headerShown: false
        }} />
        <Tab.Screen name="Home" component={BookHistory} options={{
          tabBarLabel: 'OrderHistory',
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          ),
          headerShown: false
        }} />
      </Tab.Navigator>
    </View>
  )
}

export default Order