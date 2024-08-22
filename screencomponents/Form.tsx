import { View, Text } from 'react-native'
import React from 'react'
import Screeninput from './Input'

const Form = () => {
  return (
    <View>
      <Text className='text-white'>Form</Text>
      <Screeninput inputType='email' label='User Name' />
      <Screeninput inputType='text' label='Password' />
      <Screeninput inputType='numeric' label='Confirm Password' secured={true} />
      <Screeninput inputType='date' label='Dob' />
    </View>
  )
}

export default Form