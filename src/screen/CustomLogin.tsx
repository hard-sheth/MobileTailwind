import { ActivityIndicator, Text, View, } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';


const CustomLogin = ({navigation}:any) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser]:any = useState();
  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }



const updateUserInfo =async()=>{
  // const userInfo = auth()
  // .signInAnonymously()
  // .then(() => {
  //   console.log('User signed in anonymously');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/operation-not-allowed') {
  //     console.log('Enable anonymous in your firebase console.');
  //   }

  //   console.error(error);
  // });
  try {
    // const infoUser = await auth().createUserWithEmailAndPassword('hardsheth17@gmail.com', 'Hard@123456789');
    const infoUser = await auth().signInWithPhoneNumber('+91 9106730830');
    console.log(infoUser, 'infoUser');
  } catch (error) {
    console.error(error, );
  }
  
}

  useEffect(/**
   * Description placeholder
   *
auth()
  .signOut()
  .then(() => console.log('User signed out!'));
   * @returns {*}
   */
  () => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // console.log(subscriber, 'subscriber');
    updateUserInfo()
    return subscriber; // unsubscribe on unmount

    
  }, []);

  console.log(initializing,'intializing', user,'user');
  
  if (initializing) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" /> 
      </View>
    );
  }

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome </Text>
    </View>
  );
}

export default CustomLogin