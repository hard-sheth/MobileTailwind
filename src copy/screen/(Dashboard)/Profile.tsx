import { View, Text, useColorScheme, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react'
import Header from '../../screencomponents/CustomToggler';
import AppText from '../../screencomponents/AppText';
// import { useAppDispatch, useAppSelector } from '../../store';
// import { changeCustomNo, decreaseCount, increaseCount } from '../../store/appslicers/countSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const Profile = () => {
    const isDarkMode = useColorScheme() === 'dark';
    // const count = useAppSelector((state) => state.counter.count);
    const [country, setCountry] = React.useState();
    // const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    const bottomSheetRef = useRef(null);

    // Variables
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

    // Handle open and close
    const handlePresentModal = () => {
        bottomSheetRef.current?.expand();
    };

    return (
        <View className={`flex-1 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
            <Header />
            {/* <View>
      <AppText >Count: {count}</AppText>
      <Button onPress={() => dispatch(increaseCount())} title="Increment" />
      <Button onPress={() => dispatch(decreaseCount())} title="Decrement" />
      <Button
        onPress={() => dispatch(changeCustomNo(5))}
        title="Increment by 5"
      />
    </View> */}

            <AppText appclassName='text-center text-xl font-bold' > My Profile</AppText>
            <View className='flex-row justify-evenly align-bottom mt-3 '>
                <AppText appclassName='text-start flex-1 text-base font-medium'>Full Name</AppText>
                <AppText appclassName='text-end flex-1 text-sm  font-normal'>Hard Sheth</AppText>
                <AppText appclassName='text-start flex-1'></AppText>
            </View>
            <View className={`mx-2 mb-4 `}>
                <View className={`flex-row items-center `}>
                    <AppText appclassName={`text-base`}>Full Name</AppText>
                    <TouchableHighlight>
                        <AppText appclassName={`text-base ml-2 px-1 rounded-full border ${isDarkMode ? 'border-gray-800' : 'border-slate-100'} `}>
                            <Icon name="pencil" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} /></AppText>
                    </TouchableHighlight>
                </View>
                <AppText appclassName={` text-sm`}>Sheth Hard Vinaybhai</AppText>

            </View>
            <View className={`mx-2 mb-4 `}>
                <View className={`flex-row items-center `}>
                    <AppText appclassName={`text-base`}>Address</AppText>
                    <TouchableHighlight>
                        <AppText appclassName={`text-base ml-2 px-1 rounded-full border ${isDarkMode ? 'border-gray-800' : 'border-slate-100'} `}>
                            <Icon name="pencil" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} /></AppText>
                    </TouchableHighlight>
                </View>
                <AppText appclassName={` text-sm`}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</AppText>
            </View>
            <View className={`mx-2 mb-4 flex-row justify-around`}>
                <View className={`flex-1 `}>
                    <View className={`flex-row items-center `}>
                        <AppText appclassName={`text-base`}>Email Id</AppText>
                        <TouchableHighlight>
                            <AppText appclassName={`text-base ml-2 px-1 rounded-full border ${isDarkMode ? 'border-gray-800' : 'border-slate-100'} `}>
                                <Icon name="pencil" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} /></AppText>
                        </TouchableHighlight>
                    </View>
                    <AppText appclassName={` text-sm`}>hard.sheth.sa@gmail.com</AppText>
                </View>
                <View className={`flex-1 `}>
                    <View className={`flex-row items-center `}>
                        <AppText appclassName={`text-base`}>Mobile No</AppText>
                        <TouchableHighlight>
                            <AppText appclassName={`text-base ml-2 px-1 rounded-full border ${isDarkMode ? 'border-gray-800' : 'border-slate-100'} `}>
                                <Icon name="pencil" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} /></AppText>
                        </TouchableHighlight>
                    </View>
                    <AppText appclassName={` text-sm`}>+91 9428663751</AppText>
                </View>
            </View>
            <View className={`mx-2 mb-4 flex-row justify-around`}>

                <View className={`flex-1`}>
                    <View className={`flex-row items-center `}>
                        <AppText appclassName={`text-base`}>Dob</AppText>
                        <TouchableHighlight>
                            <AppText appclassName={`text-base ml-2 px-1 rounded-full border ${isDarkMode ? 'border-gray-800' : 'border-slate-100'} `}>
                                <Icon name="pencil" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} /></AppText>
                        </TouchableHighlight>
                    </View>
                    <AppText appclassName={` text-sm`}>2024/08/30</AppText>
                </View>
                <View className={`flex-1`}>
                    <View className={`flex-row items-center `}>
                        <AppText appclassName={`text-base`}>Age</AppText>
                    </View>
                    <AppText appclassName={` text-sm`}>25</AppText>
                </View>
                <View className={`flex-1`}>
                    <View className={`flex-row items-center `}>
                        <AppText appclassName={`text-base`}>Gender</AppText>
                        <TouchableHighlight>
                            <AppText appclassName={`text-base ml-2 px-1 rounded-full border ${isDarkMode ? 'border-gray-800' : 'border-slate-100'} `}>
                                <Icon name="pencil" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} /></AppText>
                        </TouchableHighlight>
                    </View>
                    <AppText appclassName={` text-sm`}>Male</AppText>
                </View>
            </View>
            <View>
                <AppText>Select a sport:</AppText>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>

            {/* <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                <Text className={`text-slate-100 flex-1 text-base font-medium border-b-orange-600`}>Full Name</Text>
                <Text className={`text-slate-100 w-100  flex-1`}>Hard Sheth</Text>
            </View> */}
            {/* <View
                className={`absolute bottom-0 left-0 right-0 p-3 ${isDarkMode ? 'bg-gray-800' : 'bg-slate-100'}`}
            >
                <TouchableOpacity onPress={() => alert('Update Content')} className={`bg-[#007AFF] rounded py-2`}>
                    <Text className='text-white text-center text-base'>Update Test Drawer</Text>
                </TouchableOpacity>
            </View> */}
            <Button title="Open Bottom Sheet" onPress={handlePresentModal} />
            <BottomSheet
                ref={bottomSheetRef}
                index={-1} // Start closed
                snapPoints={snapPoints}
                onChange={(index) => console.log('Bottom Sheet index changed to:', index)}
            >
                <View >
                    <Button title="Close" onPress={() => bottomSheetRef.current?.close()} />
                    {/* Add your content here */}
                </View>
            </BottomSheet>


        </View>
    )
}

export default Profile