import { View, Text, useColorScheme, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Header from '../../screencomponents/CustomToggler';
import AppText from '../../screencomponents/AppText';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeCustomNo, decreaseCount, increaseCount } from '../../store/appslicers/countSlice';

const Profile = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const count = useAppSelector((state) => state.counter.count);
    
    const dispatch = useAppDispatch();
    return (
        <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
            <Header />
         <View>
      <AppText >Count: {count}</AppText>
      <Button onPress={() => dispatch(increaseCount())} title="Increment" />
      <Button onPress={() => dispatch(decreaseCount())} title="Decrement" />
      <Button
        onPress={() => dispatch(changeCustomNo(5))}
        title="Increment by 5"
      />
    </View>
            <AppText appclassName='text-center text-xl font-bold' > My Profile</AppText>
            <View className='flex-row justify-evenly align-bottom mt-3 '>
        <AppText appclassName='text-start flex-1 text-base font-medium'>Full Name</AppText>
        <AppText appclassName='text-end flex-1 text-sm  font-normal'>Hard Sheth</AppText>
        <AppText appclassName='text-start flex-1'></AppText>
            </View>
            <View 
            style={{
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems: 'center'
            }}>
                <Text className={`text-slate-100 flex-1 text-base font-medium border-b-orange-600`}>Full Name</Text>
                <Text className={`text-slate-100 w-100  flex-1`}>Hard Sheth</Text>
            </View>
            <View
                className={`absolute bottom-0 left-0 right-0 p-3 ${isDarkMode ? 'bg-gray-800' : 'bg-slate-100'}`}
            >
                <TouchableOpacity onPress={() => alert('Update Content')} className={`bg-[#007AFF] rounded py-2`}>
                    <Text className='text-white text-center text-base'>Update Test Drawer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile