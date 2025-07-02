import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {makeUserProfile} from '../api/auth';
import {
  ProfileTopLeftIcon,
  LoginRightBottomIcon,
  ProfileMiddleIcon,
} from './AllSvgIcon';
import dummyImages from '../assets/profileMiddleIcon.png';

const genderOptions = [
  {key: 'male', label: 'Male', icon: 'mars'},
  {key: 'female', label: 'Female', icon: 'venus'},
  {key: 'other', label: 'Other', icon: 'genderless'},
];

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [address, setAddress] = useState('');

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (event.type === 'set' && selectedDate) {
      const day = selectedDate.getDate().toString().padStart(2, '0');
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = selectedDate.getFullYear();
      setDob(`${day}/${month}/${year}`);
    }
  };

  const handleProfile = async () => {
    if (!name || !email || !gender || !dob || !address) {
      alert('Please fill all fields');
      return;
    }
    try {
      const profileData = {name, email, gender, DOB: dob, address};
      await makeUserProfile(profileData);
      alert('Profile created successfully!');
      navigation.navigate('MainScreen');
    } catch (error) {
      alert('Failed to create profile. Please try again.');
      console.log('Profile creation error:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View className="flex-1 min-h-screen bg-white items-center pt-6">
        <View className="absolute top-0 left-0">
          <ProfileTopLeftIcon />
        </View>

        <Text className="text-3xl font-bold text-purple-700 mb-1">PROFILE</Text>
        <Text className="text-3xl font-bold text-purple-700 mb-4">
          CREATION
        </Text>

        <View className="items-center mb-5">
          <View className="relative items-center w-11/12 h-56 mb-6">
            <ProfileMiddleIcon className="absolute z-0" />
            <Image
              source={dummyImages}
              className="w-11/12 h-full z-10 left-10 top-10 absolute"
            />
          </View>
        </View>

        <Text className="text-gray-600 mb-6">Please Complete your Profile</Text>

        {/* Input Fields */}
        <View className="w-11/12 space-y-4">
          {/* NAME */}
          <View className="flex-row items-center bg-gray-100 rounded-xl border border-gray-300 px-3">
            <Icon name="user" size={20} color="#A531E9" />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#A531E9"
              className="flex-1 h-12 px-4 text-base text-purple-700"
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* EMAIL */}
          <View className="flex-row items-center bg-gray-100 rounded-xl border border-gray-300 px-3">
            <Icon name="envelope" size={20} color="#A531E9" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#A531E9"
              className="flex-1 h-12 px-4 text-base text-purple-700"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* GENDER */}
          <Text className="ml-1 font-semibold">Gender</Text>
          <View className="flex-row justify-between">
            {genderOptions.map(option => (
              <TouchableOpacity
                key={option.key}
                className={`flex-row items-center px-4 py-2 rounded-xl border ${
                  gender === option.key
                    ? 'border-purple-700 bg-purple-100'
                    : 'border-gray-300'
                }`}
                onPress={() => setGender(option.key)}>
                <Icon
                  name={option.icon}
                  size={20}
                  color={gender === option.key ? '#A531E9' : '#888'}
                />
                <Text
                  className={`ml-2 ${
                    gender === option.key
                      ? 'text-purple-700 font-bold'
                      : 'text-gray-700'
                  }`}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* DOB */}
          <View className="flex-row items-center bg-gray-100 rounded-xl border border-gray-300 px-3">
            <Icon name="calendar" size={20} color="#A531E9" />
            <TouchableOpacity
              className="flex-1 h-12 justify-center pl-4"
              onPress={() => setShowDatePicker(true)}
              activeOpacity={0.7}>
              <Text className="text-base text-purple-700">
                {dob ? dob : 'Date of Birth (DD/MM/YYYY)'}
              </Text>
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={
                dob ? new Date(dob.split('/').reverse().join('-')) : new Date()
              }
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
          )}

          {/* ADDRESS */}
          <View className="flex-row items-center bg-gray-100 rounded-xl border border-gray-300 px-3">
            <Icon name="map-marker" size={20} color="#A531E9" />
            <TextInput
              placeholder="Address"
              placeholderTextColor="#A531E9"
              className="flex-1 h-12 px-4 text-base text-purple-700"
              value={address}
              onChangeText={setAddress}
            />
          </View>
        </View>

        {/* Create Button */}
        <TouchableOpacity
          className="bg-purple-700 py-3 px-16 rounded-full mt-6"
          onPress={handleProfile}>
          <Text className="text-white text-xl font-bold">CREATE</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View className="flex-row mt-8">
          <Text className="text-gray-600">Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MainScreen');
            }}>
            <Text className="text-purple-500 font-bold ml-2">Sign up</Text>
          </TouchableOpacity>
        </View>

        <View className="absolute bottom-0 right-0">
          <LoginRightBottomIcon />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
