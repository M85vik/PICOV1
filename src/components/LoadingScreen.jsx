import {View, Image} from 'react-native';
import React, {useEffect} from 'react';

import dummyImages from '../assets/logo.png';
import {
  LoadingBottomLeftIcon,
  LoadingTopRightIcon,
} from '../components/AllSvgIcon.jsx';
const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignUpScreen'); // Replace with your actual screen name
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, [navigation]);
  return (
    <View className="flex-1 bg-white  justify-start items-center pt-10 ">
      <View className="absolute bottom-0 left-0">
        <LoadingBottomLeftIcon />
      </View>

      <View className="absolute top-0 right-0">
        <LoadingTopRightIcon />
      </View>

      <View className="mt-[45%]  h-[45%] w-[80%] ">
        <Image
          source={dummyImages}
          className=" w-[100%] h-[100%]"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default LoadingScreen;
