import { View, Text, useColorScheme, TextInput, Alert, TouchableWithoutFeedback, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type inputFormDetail = {
  label?: string;
  onChange: any;
  onBlur: any;
  value: any;
  name: string;
};




export default function ScreenTextArea<T extends inputFormDetail>({ inputType, label, secured, maxDate, minDate, name, value, onChange, multiline }: inputForm<T>) {
  const isDarkMode = useColorScheme() === 'dark';
  const [inputValue, setInputValue] = useState(value);
  const inputChange = (event: any) => {
    const valueText = event.nativeEvent.text;
    setInputValue(valueText);
    onChange(valueText);
  }
  useEffect(() => {
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
        multiline={multiline ? multiline : false}
        onChange={inputChange}
        secureTextEntry={secured ? secured : false}
      />}
   
    </View>
  )
}