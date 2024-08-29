import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import AppText from './AppText'

const OrderHistoryCard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className={`border ${!isDarkMode ? 'border-slate-100' : 'border-gray-500'} rounded-md mb-2`}>
      {/* <View className={`flex-1 flex-row`}>
      <AppText>OrderHistory</AppText>
      <AppText>OrderHistory</AppText>
      </View> */}
      <AppText appclassName='text-xl '>OrderHistory</AppText>
      <View className={`flex-row`}>
      <AppText appclassName='flex-1 text-md text-left '>Delivery Date:-</AppText>
      <AppText appclassName='flex-1 text-xs text-right '>2024/08/29</AppText>
      </View>
      <View className={`flex-row`}>
      <AppText appclassName='flex-1 text-md text-left '>Return Date:-</AppText>
      <AppText appclassName='flex-1 text-xs text-right '>2024/08/29</AppText>
      </View>
    </View>
  )
}

export default OrderHistoryCard