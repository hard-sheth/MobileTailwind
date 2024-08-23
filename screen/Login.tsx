import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import Form from '../screencomponents/Form';

const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className={`flex-1 justify-center ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
      <View>
        <Text className='px-3 text-white text-center text-4xl'> Login Form</Text>
        <Form />
      </View>
    </View>
  )
}

export default Login