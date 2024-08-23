import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

type submitResetbtnDetails = {
  text: string;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'custom';
  btnClick?: () => void;
}

type submitResetbtn<T extends submitResetbtnDetails> = T & (
  T['type'] extends 'custom'
  ? {
    textColor: string;
    bgColor: string;
  }
  : {
    textColor?: never;
    bgColor?: never;
  }
);
{/* <Text className={`rounded bg-[#0B5ED7] px-3 text-center text-lg text-white`}>{text}</Text> */ }

export default function Btn<T extends submitResetbtnDetails>({ type, text, bgColor, textColor, btnClick }: submitResetbtn<T>) {

  console.log(`rounded bg-[${bgColor}] px-3 text-center text-[${textColor}] text-lg`, btnClick);

  return (
    <View>
      {
        type === 'primary' && (
          <TouchableHighlight onPress={btnClick} activeOpacity={0.6} >
            <Text className={`rounded bg-[#0B5ED7] px-3 text-center text-lg text-white`}>
              {text}
            </Text>
          </TouchableHighlight >
        )
      }
      {
        type === 'danger' && (<TouchableHighlight onPress={btnClick} activeOpacity={0.6} ><Text className={`rounded bg-[#BB2D3B] px-3 text-center text-lg text-white`}>{text}</Text></TouchableHighlight >)
      }
      {
        type === 'success' && (<TouchableHighlight onPress={btnClick} ><Text className={`rounded bg-[#157347] px-3 text-center text-lg text-white`}>{text}</Text></TouchableHighlight >)
      }
      {
        type === 'secondary' && (<TouchableHighlight onPress={btnClick} ><Text className={`rounded bg-[#5C636A] px-3 text-center text-lg text-slate-200`}>{text}</Text></TouchableHighlight >)
      }
      {
        type === 'warning' && (<TouchableHighlight onPress={btnClick} ><Text className={`rounded bg-[#FFC107] px-3 text-center text-lg`}>{text}</Text></TouchableHighlight >)
      }
      {
        type === 'info' && (<TouchableHighlight onPress={btnClick} ><Text className={`rounded bg-[#31D2F2] px-3 text-center text-lg`}>{text}</Text></TouchableHighlight >)
      }
      {
        type === 'light' && (<TouchableHighlight onPress={btnClick} ><Text className={`rounded bg-[#F8F9FA] px-3 text-center text-lg`}>{text}</Text></TouchableHighlight >)
      }
      {
        type === 'dark' && (<TouchableHighlight onPress={btnClick} ><Text className={`rounded bg-[#1C1F23] px-3 text-white text-center text-lg`}>{text}</Text></TouchableHighlight >)
      }
      {
        type === 'custom' && (<TouchableHighlight onPress={btnClick} ><Text className={`rounded bg-[${bgColor}] px-3 text-center text-[${textColor}] text-lg`}>{text}</Text></TouchableHighlight >)
      }
    </View>
  )
}


{/* // #0B5ED7 */ }