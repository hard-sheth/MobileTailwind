import { View, Text, useColorScheme, ScrollView, TouchableHighlight, FlatList } from 'react-native';
import React from 'react'
import Header from '../../../screencomponents/CustomToggler';
import UpcomingOrderCard from '../../../screencomponents/UpcomingOrder';


const UpcomingOrder = ({ navigation }) => {
  const upcomingCard=[
    1,2,3,4,5
  ]
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
      <FlatList className={`mt-2`}
        data={upcomingCard}
        renderItem={({item}) => <UpcomingOrderCard item={item} navigation={navigation} />}
        keyExtractor={item => item}
      />
    </View>
  )
}

export default UpcomingOrder