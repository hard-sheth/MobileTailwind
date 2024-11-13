import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import AppText from '../../screencomponents/AppText';
import moment from 'moment';
import { Controller, useForm } from 'react-hook-form';
import ScreenDateinput from '../../screencomponents/Date';
import { TextInput } from 'react-native';

const BookOrder = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    return (
        <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
            <AppText appclassName='text-center text-3xl mt-4'>BookOrder</AppText>
            <View className='h-16 flex-row justify-evenly items-baseline mt-3 mx-1'>
                <AppText appclassName=' text-lg font-medium'>Booking Date</AppText>
                <AppText appclassName=' text-base  font-normal'>{
                    moment().format('DD/MM/YYYY')
                }</AppText>
            </View>
            <View className='h-16 mb-5'>
                <AppText appclassName='ml-3 text-lg font-medium'>Delivery Date</AppText>
                {/* <Controller
                 control={control}
                 render={({ field: { onChange, onBlur, value } }) => (
                   <TextInput
                     placeholder="Password"
                     secureTextEntry
                     onBlur={onBlur}
                     onChangeText={onChange}
                     value={value}
                     className={` bg-slate-100 text-black px-2 rounded-md border ${!isDarkMode ? '' : 'text-gray-500'} focus:border-blue-500 focus:border-4  `} 
                   />
                 )}
                 name="password"
                /> */}
                <ScreenDateinput />
            </View>
            <View className='h-16 mb-5'>
                <AppText appclassName='ml-3 text-lg font-medium'>Returning Date</AppText>
                <ScreenDateinput />
            </View>
            <View className=' mb-5'>
                <AppText appclassName='ml-3 text-lg font-medium'>Costume Details</AppText>
                <TextInput className={`rounded-md border border-slate-200 mx-2 h-32`} />
            </View>

        </View>
    )
}

export default BookOrder