import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dummyImages from '../assets/asd.png';

import {Alert} from 'react-native';
import {registerUser} from '../api/auth';

import {
  LoginLeftUpperIcon,
  LoginRightBottomIcon,
  LoginMiddleIcon,
} from '../components/AllSvgIcon.jsx';

const SignUpScreen = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    console.log('SignUp pressed');

    if (!mobile || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    setLoading(true);
    console.log('Loading set to true');

    try {
      await registerUser({mobile, password});
      Alert.alert('Success', 'Registered successfully!');
      navigation.navigate('OTPScreen', {mobile});
    } catch (error) {
      console.log('REGISTER ERROR:', error?.response?.data || error.message); // Add this line
      Alert.alert(
        'Error',
        error.response?.data?.message || 'Registration failed',
      );
    } finally {
      setLoading(false);
      console.log('Loading set to false');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View className="flex-1 bg-white items-center  justify-start pt-20">
        <View className="absolute left-0 top-0">
          <LoginLeftUpperIcon />
        </View>

        <Text className=" font-bold text-purple-700 text-4xl mb-5 ">
          Sign Up
        </Text>

        <View className="items-center mb-10">
          <View className="relative items-center w-[85%] h-64 mb-6">
            <LoginMiddleIcon className="absolute z-0" />
            <Image
              source={dummyImages}
              className="w-[85%] h-[100%] z-10  top-9"
              style={{position: 'absolute'}}
            />
          </View>
        </View>

        <Text className=" text-gray-500 mb-5">Please Create Your Account</Text>

        <View className=" w-[80%]">
          <View className="flex-row items-center bg-gray-200 rounded-xl mb-5">
            <Icon
              name="user"
              size={20}
              color="#A531E9"
              style={{marginLeft: 10, marginRight: 10}}
            />

            <TextInput
              placeholder="Mobile no."
              placeholderTextColor="#A531E9"
              className="flex-1 h-12 rounded-xl px-4"
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <View className="flex-row items-center bg-gray-200  rounded-xl mb-5">
            <Icon
              name="lock"
              size={20}
              color="#A531E9"
              style={{marginLeft: 10, marginRight: 10}}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#A531E9"
              style={{color: '#A531E9'}}
              secureTextEntry={true}
              className="flex-1 h-12 rounded-xl px-4"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View className="flex-row items-center bg-gray-200 rounded-xl mb-5">
            <Icon
              name="lock"
              size={20}
              color="#A531E9"
              style={{marginLeft: 10, marginRight: 10}}
            />

            <TextInput
              placeholder=" Confirm Password"
              placeholderTextColor="#A531E9"
              style={{color: '#A531E9'}}
              secureTextEntry={true}
              className="flex-1 h-12 rounded-xl px-4"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>

        <TouchableOpacity
          className="bg-purple-700 rounded-full w-[60%] self-center mt-6 py-3"
          onPress={handleSignUp}
          disabled={loading}>
          <Text className="text-white text-lg font-bold text-center">
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        <View className="flex-row mt-8">
          <Text className="text-gray-600">Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text className="text-purple-500 font-bold ml-2">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
