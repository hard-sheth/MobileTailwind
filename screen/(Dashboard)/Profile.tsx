import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
            <Text>Profile</Text>
            <View 
            className= 'absolute bottom-0 left-0 right-0 p-3'
            >
                <TouchableOpacity onPress={() => alert('Update Content')} className={`bg-[#007AFF] rounded py-2`}>
                    <Text className='text-white text-center text-base'>Update Test Drawer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile