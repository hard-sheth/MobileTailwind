import { View, Text } from 'react-native'
import React from 'react'
import Screeninput from './Input'
import { Controller, useForm } from 'react-hook-form'
import Btn from './Btn'

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm({});
  const onSubmit = (data: object) => {
    console.log(data,'form data')
  }
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Screeninput inputType='email' label='User Name' {...field} />
        )}
        name="firstName"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Screeninput inputType='text' label='Password' {...field} />
        )}
        name="pass"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Screeninput inputType='numeric' label='Confirm Password' secured={true} {...field} />
        )}
        name="cpass"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Screeninput inputType='date' label='Dob' {...field} />
        )}
        name="dob"
      />

      <View className='flex flex-row justify-evenly mt-2'>
      <Btn text='Submit' type='primary' btnClick={handleSubmit(onSubmit)} />
      <Btn text='Reset' type='danger' btnClick={()=>reset()} />
      {/* <Btn text='Warning' type='warning'  /> */}
      {/* <Btn text='Reset' type='custom' textColor='#fff' bgColor='#0B5ED7' /> */}
      </View>
      {/* <View className='mt-3 px-3'>
        <Btn text='Submit Form' type='danger' />
      </View> */}
    </View>
  )
}

export default Form