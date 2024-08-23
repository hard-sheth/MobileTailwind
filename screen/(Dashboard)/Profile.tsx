import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

const Profile = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile