import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../../screencomponents/CustomToggler';

const Dashboard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
       <Header />
      <Text className={`${!isDarkMode ? 'text-slate-100' : 'text-gray-500'} mb-2 text-lg`}>Dashboard</Text>
    </View>
  )
}

export default Dashboard