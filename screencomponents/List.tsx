import { View, Text } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function List({item}:any) {
  return (
    <View className={`flex-row justify-between items-center`}>
      <AppText appclassName='flex-1 text-left'>Item Name {item}</AppText>
      <AppText appclassName='w-16 text-center'>Qty {item}</AppText>
      <AppText appclassName='w-14 text-right'>Pcs {item}</AppText>
    </View>
  )
}