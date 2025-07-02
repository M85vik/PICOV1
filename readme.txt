import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure to install: npm install react-native-vector-icons

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-white items-center justify-start pt-20">
      {/* Header */}
      <Text className="text-4xl font-bold text-purple-700 mb-10">LOGIN</Text>

      {/* Image */}
      {/* Replace 'your_image' with the actual path to your image */}
      {/* <Image source={require('./your_image.png')} className="w-64 h-48 mb-8" resizeMode="contain" /> */}

      {/* "Please Login" Text */}
      <Text className="text-gray-600 mb-6">
        Please Login to continue using the app
      </Text>

      {/* Input Fields */}
      <View className="w-[80%]">
        <View className="flex-row items-center bg-gray-100 rounded-xl mb-4 border border-gray-300">
          <Icon
            name="user"
            size={20}
            color="#A531E9"
            style={{marginLeft: 10, marginRight: 10}}
          />
          <TextInput
            placeholder="Phone/ Email"
            className="flex-1 h-12  rounded-xl px-4"
          />
        </View>

        <View className="flex-row items-center bg-gray-500 rounded-xl mb-2 border border-gray-300">
          <Icon
            name="lock"
            size={20}
            color="#A531E9"
            style={{marginLeft: 10, marginRight: 10}}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            className="flex-1 h-12 rounded-xl px-4"
          />
        </View>

        <Text className="text-purple-500 text-right mb-6">
          Forgot password?
        </Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity className="bg-purple-700 py-3 px-16 rounded-full mt-4">
        <Text className="text-white text-xl font-bold">LOGIN</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <View className="flex-row mt-8">
        <Text className="text-gray-600">Don't have an account?</Text>
        <TouchableOpacity>
          <Text className="text-purple-500 font-bold ml-2">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
