import { View, Text, useColorScheme, ScrollView, TouchableHighlight } from 'react-native';
import React from 'react'
import Header from '../../../screencomponents/CustomToggler';
import AppText from '../../../screencomponents/AppText';
import OrderHistoryCard from '../../../screencomponents/OrderHistory';


const BookHistory = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
      <ScrollView>
        <AppText appclassName='' >OrderHistory</AppText>
        <OrderHistoryCard />
        <OrderHistoryCard />
        <OrderHistoryCard />
        <OrderHistoryCard />
      </ScrollView>
    </View>
  )
}

export default BookHistory