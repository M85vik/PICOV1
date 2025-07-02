import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

const OTPScreen = () => {
  // State to hold each digit
  const [otp, setOtp] = useState(['', '', '', '']);
  // Refs to control focus
  const inputs = useRef([]);

  // Find the first empty field (only this should be focusable)
  const currentIndex = otp.findIndex(d => d === '');
  const activeIndex = currentIndex === -1 ? otp.length - 1 : currentIndex;

  // Focus the first input on mount
  useEffect(() => {
    if (inputs.current[0]) {
      inputs.current[0].focus();
    }
  }, []);

  // Handle digit entry
  const handleChange = (text, idx) => {
    if (/^[0-9]$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[idx] = text;
      setOtp(newOtp);

      // Move to next input if a digit is entered
      if (text && idx < otp.length - 1) {
        inputs.current[idx + 1].focus();
      }
      // Move to previous input if cleared
      if (!text && idx > 0) {
        inputs.current[idx - 1].focus();
      }
    }
  };

  // Handle submit
  const handleSubmit = () => {
    const otpValue = otp.join('');
    console.log('Entered OTP:', otpValue);
    Keyboard.dismiss();
    // Add your verification logic here
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View className="flex-1 bg-white justify-center items-center px-6">
        <Text className="text-3xl font-bold text-purple-700 mb-6">
          Enter OTP
        </Text>
        <Text className="text-gray-600 mb-8 text-center">
          Please enter the 4-digit code sent to your phone
        </Text>
        <View className="flex-row justify-center mb-8">
          {otp.map((digit, idx) => (
            <TextInput
              key={idx}
              ref={el => (inputs.current[idx] = el)}
              value={digit}
              onChangeText={text => handleChange(text, idx)}
              keyboardType="number-pad"
              maxLength={1}
              className={`w-14 h-14 mx-2 border-2 rounded-xl text-2xl text-center ${
                digit
                  ? 'border-green-500 bg-green-100 text-green-700'
                  : 'border-purple-400 bg-gray-100 text-purple-700'
              }`}
              editable={true}
              selectTextOnFocus={true}
              onFocus={() => {
                // Only redirect focus if user tries to focus a field after the active one
                if (idx > activeIndex && inputs.current[activeIndex]) {
                  inputs.current[activeIndex].focus();
                }
              }}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace' && !otp[idx] && idx > 0) {
                  const newOtp = [...otp];
                  newOtp[idx - 1] = '';
                  setOtp(newOtp);
                  // Move focus to previous field
                  setTimeout(() => {
                    inputs.current[idx - 1]?.focus();
                  }, 10); // Small delay helps prevent keyboard flicker
                }
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          className="bg-purple-700 py-3 px-16 rounded-full"
          onPress={handleSubmit}
          disabled={otp.some(d => d === '')}>
          <Text className="text-white text-xl font-bold">Verify</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPScreen;
