// import { View, Text, TouchableHighlight } from 'react-native';
// import React from 'react'

// export default function CustomDrawer(props: any) {
//     const {navigation, navigate}= props;
//     return (

//         <View className='flex-1 bg-gray-800'>
//             <TouchableHighlight onPress={()=>{
//                 // navigate.push('index')
//             }}>
//             <Text className='text-white'>Dashboard</Text>
//             </TouchableHighlight>
//             <TouchableHighlight onPress={()=>{
//                 // navigate.push('profile')
//             }}>
//             <Text className='text-white'>Profile</Text>
//             </TouchableHighlight>

//             <View className='absolute bottom-2 end-0 start-0 bg-red-700'>
//                 <Text className='text-white'>Bottom</Text>
//             </View>
//         </View>
//     )
// }
// CustomDrawer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            {/* Dynamic content can be added here */}
            <View style={styles.profileContainer}>
                <Text style={styles.profileName}>User Name</Text>
            </View>

            <DrawerItemList {...props} />

            {/* Bottom button container */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => alert('Update Content')} style={styles.updateButton}>
                    <Text style={styles.updateButtonText}>Update Drawer</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Allow the content to take up the full height
    },
    profileContainer: {
        padding: 20,
        alignItems: 'center',
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        position: 'absolute', // Position the button container absolutely
        bottom: 0, // Align to the bottom of the drawer
        left: 0,
        right: 0,
        padding: 20, // Add padding around the button
    },
    updateButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        borderRadius: 5,
    },
    updateButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default CustomDrawer;