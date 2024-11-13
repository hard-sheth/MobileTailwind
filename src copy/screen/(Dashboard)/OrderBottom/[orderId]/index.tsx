import { View, useColorScheme, FlatList } from 'react-native'
import React from 'react'
import AppText from '../../../../screencomponents/AppText';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from '../../../../screencomponents/List';

const OrderDetails = ({ route, navigation }: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { orderId } = route.params;
    console.log(orderId,'orderId');
    
    return (
        <View className={`flex-1 px-2 ${!isDarkMode ? 'bg-gray-800' : 'bg-slate-100'} `}>
            <View className={`flex-row justify-evenly`}>
                <View className={`flex-1`}>
                    <AppText appclassName='font-bold text-lg'>Book Date</AppText>
                    <AppText appclassName='text-sm'>{moment('2024-08-03').format('DD/MM/YYYY')}</AppText>
                </View>
                <View className={`flex-1`}>
                    <AppText appclassName='font-bold text-lg'>Delivery Date</AppText>
                    <AppText appclassName='text-sm'>{moment('2024-08-27').format('DD/MM/YYYY')}</AppText>
                </View>
                <View className={`flex-1`}>
                    <AppText appclassName='font-bold text-lg'>Return Date</AppText>
                    <AppText appclassName='text-sm'>{moment('2024-08-29').format('DD/MM/YYYY')}</AppText>
                </View>
            </View>
            <View className={`flex-row justify-around items-center `}>
                <AppText appclassName='flex-1 text-left text-lg font-bold'>Status</AppText>
                {/* <AppText appclassName='flex-1 text-right mr-4 text-red-500 text-md font-light'>Returned</AppText> */}
                <AppText appclassName='flex-1 text-right mr-4 text-orange-700 text-md font-light'>Pending</AppText>
                {/* <AppText appclassName='flex-1 text-right mr-4 text-green-500 text-md font-light'>Delivered</AppText> */}
            </View>
            <AppText appclassName={`mt-3 font-extrabold text-lg border-b ${isDarkMode ? 'border-gray-800' : 'border-slate-100'}`}>Amount</AppText>
            <View className={`flex-row justify-between`}>
                <AppText appclassName='font-bold text-base'>Rent</AppText>
                <AppText appclassName='text-sm'><AppText appclassName='text-green-700 text-sm'>UPI</AppText><AppText appclassName='text-sm text-orange-700'>Cash</AppText> 450 <Icon name="rupee" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} />
                </AppText>
            </View>
            <View className={`flex-row justify-between text`}>
                <AppText appclassName='font-bold text-base '>Deposit</AppText>
                <AppText appclassName='text-sm'><AppText appclassName='text-green-700 text-sm'>UPI</AppText><AppText appclassName='text-sm text-orange-700'>Cash</AppText> 550 <Icon name="rupee" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} /> </AppText>
            </View>
            <AppText appclassName={`mt-3 font-extrabold text-lg border-b ${isDarkMode ? 'border-gray-800' : 'border-slate-100'}`}>Paid Amount</AppText>
            <View className={`flex-row justify-between`}>
                <AppText appclassName='font-bold text-base'>Advance Paid</AppText>
                <AppText appclassName='text-sm'><AppText appclassName='text-green-700 text-sm'>UPI</AppText><AppText appclassName='text-sm text-orange-700'>Cash</AppText> 450 <Icon name="rupee" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} />
                </AppText>
            </View>
            <View className={`flex-row justify-between`}>
                <AppText appclassName='font-bold text-base '>Fee Settled</AppText>
                <AppText appclassName='text-sm'><AppText appclassName='text-green-700 text-sm'>UPI</AppText><AppText appclassName='text-sm text-orange-700'>Cash</AppText> 550 <Icon name="rupee" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} /> </AppText>
            </View>
            <AppText appclassName={`mt-3 font-extrabold text-lg border-b ${isDarkMode ? 'border-gray-800' : 'border-slate-100'}`}>Refund Amount</AppText>
            <View className={`flex-row justify-between`}>
                <AppText appclassName='font-bold text-base'>Amount</AppText>
                <AppText appclassName='text-sm'><AppText appclassName='text-green-700 text-sm'>UPI</AppText><AppText appclassName='text-sm text-orange-700'>Cash</AppText> 450 <Icon name="rupee" size={15} color={`${isDarkMode ? '#900' : '#fff'}`} />
                </AppText>
            </View>
            <AppText appclassName={`mt-3 font-extrabold text-lg border-b ${isDarkMode ? 'border-gray-800' : 'border-slate-100'}`}>Dress Details</AppText>
            <View className={`flex-row justify-between`}>
                <AppText appclassName='text-base font-bold flex-1'>Item Name</AppText>
                <AppText appclassName='text-base text-right font-bold w-24'>Qty</AppText>
                <AppText appclassName='text-base font-bold w-20 text-right'>Pcs</AppText>
            </View>
            <FlatList
                data={
                    Array.from({ length: 80 }, (_, index) => ({
                        id: index.toString(), 
                        title: `Item ${index + 1}`,
                    })
                    )
                }
                renderItem={List}
                keyExtractor={item => item.id} // Unique key prop
            />
        </View>
    )
}

export default OrderDetails

/**
import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

const FlatListExample = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/data?page=${page}`);
      setData((prevData) => [...prevData, ...response.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
      fetchData();
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setData([]);
    fetchData().finally(() => setRefreshing(false));
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ListItem item={item} />}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading && (
          <View style={{ padding: 10 }}>
            <ActivityIndicator />
          </View>
        )
      }
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
};

export default FlatListExample;
 */

