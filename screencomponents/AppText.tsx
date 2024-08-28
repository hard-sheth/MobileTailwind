import { View, Text, useColorScheme } from 'react-native'
import React, { ReactNode } from 'react'

interface AppTextProp {
    children?: ReactNode; // Typing children as ReactNode
    appclassName?: string;
  }

const AppText :React.FC<AppTextProp>= ({children,appclassName }:AppTextProp) => {
    const isDarkMode = useColorScheme() === 'dark';
  return (
      <Text className={`${isDarkMode ? 'text-gray-800' : 'text-slate-100'} ${appclassName}`}>{children?children:''}</Text>
  )
}

export default AppText