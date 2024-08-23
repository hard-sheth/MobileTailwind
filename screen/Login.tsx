import { View, Text, useColorScheme } from 'react-native';
import React from 'react';
import LoginForm from '../screenforms/Loginform';
import Btn from '../screencomponents/Btn';
import { useNavigation } from '@react-navigation/native';

const Login = ({navigation}:any) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
      <View className={`flex-row justify-end me-40`}>
      <Btn text='Register' type='primary' btnClick={()=>navigation.push('singup')} />
      </View>
      <View className={`flex-1  justify-center`}>
        <Text className='px-3 text-white text-center text-4xl'> Login Form</Text>
        <LoginForm />
      </View>
    </View>
  )
}

export default Login