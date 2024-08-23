import { View, Text, useColorScheme, TextInput, Alert, TouchableWithoutFeedback, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type inputFormDetail = {
  label?: string;
  secured?: boolean;
  inputType: 'decimal' | 'email' | 'numeric' | 'search' | 'tel' | 'text' | 'url' | 'none' | 'date';
  onChange: any;
  onBlur: any;
  value: any;
  name: string;
};

type inputForm<T extends inputFormDetail> = T & (
  T['inputType'] extends 'date'
  ? { minDate?: Date; maxDate?: Date; }
  : { minDate?: never; maxDate?: never; }
);

export default function Screeninput<T extends inputFormDetail>({ inputType, label, secured, maxDate, minDate, name, value, onChange }: inputForm<T>) {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null | string>(value);
  const [inputValue, setInputValue] = useState(value);
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
    onChange(selectedDate);
  };
  const inputChange = (event: any) => {
    const valueText = event.nativeEvent.text;
    setInputValue(valueText);
    onChange(valueText);
  }
  useEffect(() => {
    setSelectedDate(value);
    setInputValue(value);
  }, [value])


  return (
    <View className={`mx-3 my-1`}>
      {label && <Text className={`${!isDarkMode ? 'text-slate-100' : 'text-gray-500'} mb-2 text-lg`}>{label}</Text>}
      {(inputType !== 'date') && <TextInput className={` bg-slate-100 text-black px-2 rounded-md border ${!isDarkMode ? '' : 'text-gray-500'} focus:border-blue-500 focus:border-4  `} inputMode={
        inputType
      }
        value={inputValue}
        returnKeyType="next"
        blurOnSubmit={false}
        onChange={inputChange}
        secureTextEntry={secured ? secured : false}
      />}
      {inputType === 'date' && (<View className={`bg-slate-100 rounded-md px-2 h-12`}>
        <TouchableWithoutFeedback onPress={showDatePicker} >
          <View >
            <Text className={`text-sm py-3`}>{selectedDate ? selectedDate : ''}</Text>
          </View>
        </TouchableWithoutFeedback>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={maxDate}
        // date={new Date('2024-08-20')}
        />
      </View>)}
    </View>
  )
}