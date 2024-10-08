import { View, Text, useColorScheme } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Dashboard from './Dashboard';
import CustomDrawer from '../../screencomponents/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BookOrder from './Order';
import Order from './OrderBottom';

const DashboardIndex = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="order" component={Order} />
      {/* <Drawer.Screen name="bookOrder" component={BookOrder} /> */}
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{
        drawerIcon: ({ color }) => (
          <Icon name="home-outline" size={24} color={color} />
        ),
      }} />
    </Drawer.Navigator>
  )
}

export default DashboardIndex