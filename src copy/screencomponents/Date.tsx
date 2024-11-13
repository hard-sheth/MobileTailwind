import { View, Text, useColorScheme, TextInput, Alert, TouchableWithoutFeedback, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppText from './AppText';
import Icon from 'react-native-vector-icons/FontAwesome';

type inputFormDetail = {
  value: any;
  name: string;
};

export default function ScreenDateinput() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null | string>('');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date: Date) => {
    const selectedDate = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    setSelectedDate(selectedDate);
    hideDatePicker();
  };
  const clearDate = () => {
    setSelectedDate('')
  }

  return (
    <View >
      {selectedDate && <View className={`flex-row mx-2 h-14 items-center px-3 rounded-md border ${!isDarkMode ? 'border-slate-100' : 'border-slate-950'}`}>
        <AppText appclassName={`text-base flex-1 `}>{selectedDate}</AppText>
        <TouchableWithoutFeedback onPress={clearDate} >
          <Icon name="close" size={30} color={`${isDarkMode ? '#900' : '#fff'}`} />
        </TouchableWithoutFeedback>
      </View>
      }
      {!selectedDate && <View className={`flex-row mx-2 h-14 items-center rounded-md border ${!isDarkMode ? 'border-slate-100' : 'border-slate-950'}  px-3`}>
        <TouchableWithoutFeedback  onPress={showDatePicker}>
          <Text className={`text-base flex-1 `}></Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={showDatePicker} >
          <Icon name="calendar" size={30} color={`${isDarkMode ? '#900' : '#fff'}`} />
        </TouchableWithoutFeedback>
      </View>
      }
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      // date={new Date('2024-08-20')}
      />
    </View>
  )
}