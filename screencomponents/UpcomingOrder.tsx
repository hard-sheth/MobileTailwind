import { View, Text, useColorScheme, TouchableHighlight } from 'react-native';
import React from 'react'
import AppText from './AppText'

const UpcomingOrderCard = ({item, navigation}:any) => {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <View className={`border ${!isDarkMode ? 'border-slate-100' : 'border-gray-500'} rounded-md mb-2 mx-2 px-2`}>
      <TouchableHighlight onPress={()=>navigation.navigate(`orderDetail`,{orderId:item})}>
        <View>
          <AppText appclassName='text-xl '>Upcoming Order</AppText>
          <View className={`flex-row`}>
            <AppText appclassName='flex-1 text-md text-left '>Booking Date:-</AppText>
            <AppText appclassName='flex-1 text-xs text-right '>2024/08/29</AppText>
          </View>
          <View className={`flex-row`}>
            <AppText appclassName='flex-1 text-md text-left '>Delivery Date:-</AppText>
            <AppText appclassName='flex-1 text-xs text-right '>2024/08/29</AppText>
          </View>
          <View className={`flex-row`}>
            <AppText appclassName='flex-1 text-md text-left '>Return Date:-</AppText>
            <AppText appclassName='flex-1 text-xs text-right '>2024/08/29</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default UpcomingOrderCard