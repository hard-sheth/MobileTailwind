
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
            {/* Dynamic content can be added here */}
            <View className={''}>
                <Text className={'text-center text-2xl'} >User Name</Text>
            </View>

            <DrawerItemList {...props} />

            {/* Bottom button container */}
            <View 
            className= 'absolute bottom-0 left-0 right-0 p-3'
            >
                <TouchableOpacity onPress={() => alert('Update Content')} className={`bg-[#007AFF] rounded py-2`}>
                    <Text className='text-white text-center text-base'>Update Test Drawer</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};


export default CustomDrawer;