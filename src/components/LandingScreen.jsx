import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import dummyImages from '../assets/LandingLogo.png';
import {
  LandingBottomRightIcon,
  LandingTopLeftIcon,
  LandingMiddleIcon,
  ProfileMiddleIcon,
} from '../components/AllSvgIcon.jsx';
const LandingScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoadingScreen'); // Replace with your actual screen name
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, [navigation]);

  return (
    <View className="flex-1 bg-white  justify-start items-center pt-20  ">
      <View className="absolute bottom-0 right-0">
        <LandingBottomRightIcon />
      </View>

      <View className="absolute top-0 left-0">
        <LandingTopLeftIcon />
      </View>

      <View className=" h-[20%] w-[70%] justify-center items-center">
        <Text className="text-5xl font-bold text-purple-700 ">AIR SAFE</Text>
      </View>

      <View className=" items-center relative w-[85%] h-[45%] ">
        <ProfileMiddleIcon />
        <Image
          source={dummyImages}
          className="  w-80 h-80 z-10 absolute "
          resizeMode="contain"
        />
      </View>

      <View className="  h-[10%] w-[60%] justify-center items-center">
        <Text className="text-3xl font-bold text-purple-700 ">WELCOME</Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity className="bg-purple-700 py-3 px-16 rounded-full mt-4">
        <Text className="text-white text-2xl font-bold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;
