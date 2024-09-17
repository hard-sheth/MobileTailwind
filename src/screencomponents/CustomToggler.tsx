import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View className={`flex-row items-center py-1 h-14 ${isDarkMode ? 'bg-gray-800' : 'bg-slate-100'}`} >
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                className='px-4'
            >
                <Text className={`text-lg `}>☰</Text>
            </TouchableOpacity>
            <Text className='text-lg font-bold'>My Screen</Text>
        </View>
    );
};

export default Header;