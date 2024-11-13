import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import SignInForm from '../screenforms/Signupform';

const Signup = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
            <Text className='text-white text-center text-2xl'>Signup</Text>
            <SignInForm />
        </View>
    )
}

export default Signup