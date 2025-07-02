import React, {useState} from 'react';
import {Alert} from 'react-native';
import {loginUser} from '../api/auth';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  LoginLeftUpperIcon,
  LoginRightBottomIcon,
  LoginMiddleIcon,
} from '../components/AllSvgIcon';
import dummyImages from '../assets/asd.png';

const LoginScreen = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!mobile || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setLoading(true);

    try {
      await loginUser({mobile, password});

      Alert.alert('Success', 'Logged in!');
      navigation.navigate('ProfileScreen'); // or your next screen
    } catch (err) {
      // Check for OTP not verified error
      if (err.response?.data?.code === 'OTP_NOT_VERIFIED') {
        // Redirect to OTP screen and pass mobile number
        navigation.navigate('OTPScreen', {mobile});
      } else {
        // Show other errors

        // navigation.navigate('MainScreen');

        Alert.alert('Login Error', err.response?.data?.error || 'Login failed');
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View className="flex-1 bg-white items-center justify-start pt-20">
        <View className="absolute top-0 left-0">
          <LoginLeftUpperIcon />
        </View>

        <Text className="text-4xl font-bold text-purple-700 mb-10">LOGIN</Text>

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
              placeholder="Mobile Number"
              placeholderTextColor="#A531E9"
              className="flex-1 h-12  rounded-xl px-4"
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <View className="flex-row items-center bg-gray-100 rounded-xl mb-2 border border-gray-300">
            <Icon
              name="lock"
              size={20}
              color="#A531E9"
              style={{marginLeft: 10, marginRight: 10}}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#A531E9"
              secureTextEntry={true}
              className="flex-1 h-12 rounded-xl px-4"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <Text
            className="text-purple-500 text-right mb-6"
            onPress={() => {
              navigation.navigate('MainScreen');
            }}>
            Forgot password?
          </Text>
        </View>

        {/* Login Button */}

        <TouchableOpacity
          className="bg-purple-700 py-3 px-16 rounded-full mt-4"
          onPress={handleLogin}
          disabled={loading}>
          <Text className="text-white text-xl font-bold">
            {loading ? 'Logging in...' : 'LOGIN'}
          </Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View className="flex-row mt-8">
          <Text className="text-gray-600">Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text className="text-purple-500 font-bold ml-2">Sign up</Text>
          </TouchableOpacity>
        </View>

        <View className="absolute bottom-0 right-0 ">
          <LoginRightBottomIcon />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

// <KeyboardAvoidingView
//       style={{flex: 1}}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//       <ScrollView
//         contentContainerStyle={{flexGrow: 1}}
//         keyboardShouldPersistTaps="handled">
//         <View className="flex-1 bg-white items-center justify-start pt-20">
//           {/* ...rest of your code... */}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
