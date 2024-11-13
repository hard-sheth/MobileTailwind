import { View, Text } from 'react-native';
import React, { ReactNode, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Screeninput from '../screencomponents/Input';
import Btn from '../screencomponents/Btn';

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
  });
  const onSubmit = (data: object) => {
    console.log(data,'form data')
  }
  return (
    <View>
      {/* <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextInput className={` bg-slate-100 text-black px-2 rounded-md border ${!isDarkMode ? '' : 'text-gray-500'} focus:border-blue-500 focus:border-4  `} 
          {...field}
            
          />
        )}
        name="firstName"
      /> */}
        {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          className={` bg-slate-100 text-black px-2 rounded-md border ${!isDarkMode ? '' : 'text-gray-500'} focus:border-blue-500 focus:border-4  `} 
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      /> */}
      {/* {errors.username && <Text>{errors.username.message as ReactNode}</Text>} */}
{/* 
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className={` bg-slate-100 text-black px-2 rounded-md border ${!isDarkMode ? '' : 'text-gray-500'} focus:border-blue-500 focus:border-4  `} 
          />
        )}
        name="password"
      />
      {errors.password && <Text>{errors.password.message as ReactNode}</Text>} */}
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message:"Enter Confirm pass"
          },
        }}
        render={({ field ,}) => (
          <Screeninput inputType='text' label='Confirm Password' secured={true} {...field}   errormessage = {errors.cpass?.message} />
        )}
        name="cpass"
      />
      {/* <Controller
        // <Screeninput inputType='email' label='User Name' {...field} />
        control={control}
        rules={{
          required: {
            value: true,
            message:'Please pass the Correct pass'
          },
        }}
        render={({ field: { onChange, onBlur, value, },formState:{errors: passError} }) => (
          <Screeninput inputType='text' label='Password'  value={value}
          errormessage = {passError.pass?.message}
          onChange={onChange}
          secured={true} />
        )}
        name="pass"
      /> */}
      
      {/* <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Screeninput inputType='date' label='Dob' {...field} />
        )}
        name="dob"
      /> */}

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

export default LoginForm