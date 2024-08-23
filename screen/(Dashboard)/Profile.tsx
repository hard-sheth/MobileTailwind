import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../screencomponents/CustomToggler';

const Profile = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
            <Header />
            <Text className={`${isDarkMode ? 'text-gray-800' : 'text-slate-100'}`}>Profile</Text>
            <Text className={`${isDarkMode ? 'text-gray-800' : 'text-slate-100'}`}>lorem10</Text>
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