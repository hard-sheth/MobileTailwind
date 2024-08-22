import { View, Text, useColorScheme, TextInput, Alert, TouchableWithoutFeedback, Modal } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type inputFormDetail = {
  label?: string;
  secured?: boolean;
  inputType: 'decimal' | 'email' | 'numeric' | 'search' | 'tel' | 'text' | 'url' | 'none' | 'date';
};

type inputForm<T extends inputFormDetail> = T & (
  T['inputType'] extends 'date'
  ? { minDate?: Date; maxDate?: Date; }
  : { minDate?: never; maxDate?: never; }
);

export default function Screeninput<T extends inputFormDetail>({ inputType, label, secured, maxDate, minDate }: inputForm<T>) {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const selectedDate = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    setSelectedDate(selectedDate);
    hideDatePicker();
    Alert.alert('Selected Date', selectedDate);
  };
  return (
    <View className={`mx-3`}>

      {label && <Text className={`${!isDarkMode ? 'text-slate-100' : 'text-gray-500'} mb-2 text-lg`}>{label}</Text>}
      {(inputType !== 'date') && <TextInput className={` bg-slate-100 text-black px-2 rounded-md border ${!isDarkMode ? '' : 'text-gray-500'} focus:border-blue-500 focus:border-4  `} inputMode={
        inputType
      }
        secureTextEntry={secured ? secured : false}
      />}
      {inputType === 'date' && (<View>
        <TouchableWithoutFeedback className={` bg-slate-100 text-black`} onPress={showDatePicker} >

          <Text className={`bg-slate-100 mb-2 rounded-md px-2 text-4xl`} />
        </TouchableWithoutFeedback>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={maxDate}
        />
      </View>)}
    </View>
  )
}