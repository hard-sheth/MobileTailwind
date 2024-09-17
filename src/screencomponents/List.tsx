import { View, Text } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function List(props:any) {
  const {item} = props;
  const {title, id} = item;
  const detailId = Number(id)+1;
  return (
    <View className={`flex-row justify-between items-center`}>
      <AppText appclassName='flex-1 text-left'>Item Name {detailId}</AppText>
      <AppText appclassName='w-16 text-center'>Qty {detailId}</AppText>
      <AppText appclassName='w-14 text-right'>Pcs {detailId}</AppText>
    </View>
  )
}