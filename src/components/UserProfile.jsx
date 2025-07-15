import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import avatar from '../assets/avatar4.jpg';

const UserProfile = ({navigation}) => {
  return (
    <View className="flex-1 bg-gray-100 pt-6">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 mb-4">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MainScreen');
          }}>
          <Feather name="chevron-left" size={28} color="purple" />
        </TouchableOpacity>
        <Text className="font-bold text-xl text-purple-700">User Profile</Text>
        <View className="w-6" />
      </View>

      {/* Avatar and Name */}
      <View className="justify-center items-center mb-4">
        <View className="w-36 h-36 rounded-full overflow-hidden border-4 border-purple-300 shadow-md">
          <Image source={avatar} className="w-full h-full" />
        </View>
        <Text className="font-semibold text-2xl text-gray-800 mt-3">
          Veronica
        </Text>
      </View>

      {/* Details Section (Enclosed box) */}
      <View className="bg-white w-[90%] mx-auto rounded-3xl p-5 shadow-lg ">
        {/* Email */}
        <View className="flex-row items-center border border-purple-300 bg-purple-50 rounded-lg p-3 mb-3">
          <MaterialIcons name="email" size={22} color="#7e22ce" />
          <View className="ml-3 flex-1">
            <Text className="text-gray-500 text-xs mb-0.5">Email</Text>
            <Text className="text-gray-800 font-semibold">
              veronica@gmail.com
            </Text>
          </View>
        </View>

        {/* Gender */}
        <View className="flex-row items-center border border-purple-300 bg-purple-50 rounded-lg p-3 mb-3">
          <MaterialIcons name="wc" size={22} color="#db2777" />
          <View className="ml-3 flex-1">
            <Text className="text-gray-500 text-xs mb-0.5">Gender</Text>
            <Text className="text-gray-800 font-semibold">Female</Text>
          </View>
        </View>

        {/* DOB */}
        <View className="flex-row items-center border border-purple-300 bg-purple-50 rounded-lg p-3 mb-3">
          <MaterialIcons name="calendar-today" size={22} color="#16a34a" />
          <View className="ml-3 flex-1">
            <Text className="text-gray-500 text-xs mb-0.5">Date of Birth</Text>
            <Text className="text-gray-800 font-semibold">12 Dec 1995</Text>
          </View>
        </View>

        {/* Address */}
        <View className="flex-row items-center border border-purple-300 bg-purple-50 rounded-lg p-3">
          <MaterialIcons name="location-on" size={22} color="#ca8a04" />
          <View className="ml-3 flex-1">
            <Text className="text-gray-500 text-xs mb-0.5">Address</Text>
            <Text className="text-gray-800 font-semibold">
              123 Street, New York, USA
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
