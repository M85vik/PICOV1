import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

// Assuming these are custom components you've created
import {OTPMiddleIcon, OTPTopLeftIcon} from '../components/AllSvgIcon';
import dummyImages from '../assets/OTPLogo.png';
import {verifyOtp} from '../api/auth';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;
const RESEND_OTP_TIME_LIMIT = 30; // Set the countdown time in seconds

const OTPScreen = ({navigation, route}) => {
  const {mobile} = route.params; // Get mobile number from navigation

  const handleSubmit = async () => {
    try {
      await verifyOtp({mobile, otp: value}); // Send both mobile and OTP
      Alert.alert('Success', 'OTP Verified!');
      navigation.navigate('ProfileScreen', {mobile}); // Pass mobile to next screen
    } catch (error) {
      console.log('OTP VERIFY ERROR:', error?.response?.data || error.message);
      Alert.alert(
        'Error',
        error.response?.data?.message || 'OTP verification failed',
      );
    }
  };

  const [value, setValue] = useState('');
  // --- Start: New State for Countdown Timer ---
  const [resendButtonDisabled, setResendButtonDisabled] = useState(true);
  const [countdown, setCountdown] = useState(RESEND_OTP_TIME_LIMIT);
  // --- End: New State for Countdown Timer ---

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const isOtpComplete = value.length === CELL_COUNT;

  // --- Start: Logic for Countdown Timer ---
  useEffect(() => {
    // Start the timer only when the button is disabled
    if (resendButtonDisabled) {
      const timer = setInterval(() => {
        if (countdown > 0) {
          setCountdown(prev => prev - 1);
        } else {
          // When countdown reaches 0, enable the button
          setResendButtonDisabled(false);
          clearInterval(timer);
        }
      }, 1000);
      // Cleanup the interval on component unmount
      return () => clearInterval(timer);
    }
  }, [countdown, resendButtonDisabled]);

  const handleResend = () => {
    // Logic to resend OTP (e.g., API call)
    Alert.alert('OTP Resent', 'A new code has been sent.');

    // Reset the timer
    setCountdown(RESEND_OTP_TIME_LIMIT);
    setResendButtonDisabled(true);
  };
  // --- End: Logic for Countdown Timer ---

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View className="flex-1 justify-center items-center bg-white ">
        <View className="absolute top-0 left-0 ">
          <OTPTopLeftIcon />
        </View>

        <Text className="text-4xl  font-bold text-purple-700  mb-1">OTP</Text>
        <Text className="text-4xl font-bold text-purple-700 mb-10">
          VERIFICATION
        </Text>

        <View className="items-center">
          <View className="relative items-center w-[85%] h-64 mb-6">
            <OTPMiddleIcon className="absolute z-0" />
            <Image
              source={dummyImages}
              className="w-[65%] h-[85%] z-10"
              style={{position: 'absolute'}}
            />
          </View>
        </View>
        <View className="w-full items-center">
          <Text className="text-md text-gray-600 mb-4 text-center">
            A {CELL_COUNT}-digit code has been sent to you.
          </Text>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => {
              const hasValue = Boolean(symbol);
              const boxStyle = `border-2 h-16 w-14 rounded-lg flex items-center justify-center ${
                isFocused
                  ? 'border-blue-500'
                  : hasValue
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`;
              const textStyle = `font-semibold text-2xl ${
                hasValue ? 'text-gray-800' : 'text-gray-400'
              }`;
              return (
                <View
                  key={index}
                  className={boxStyle}
                  onLayout={getCellOnLayoutHandler(index)}>
                  <Text className={textStyle}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              );
            }}
          />

          {/* FIX #2: Add the Resend Code button and logic */}
          <View className="flex-row justify-center items-center mt-6">
            <Text className="text-gray-500">Didn't receive the code? </Text>
            {resendButtonDisabled ? (
              <Text className="text-gray-400">Resend in {countdown}s</Text>
            ) : (
              <TouchableOpacity onPress={handleResend}>
                <Text className="text-blue-500 font-semibold">Resend Code</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            onPress={handleSubmit}
            disabled={!isOtpComplete}
            className={`w-[90%] py-4 rounded-lg mt-8 ${
              isOtpComplete ? 'bg-blue-500' : 'bg-gray-400'
            }`}>
            <Text className="text-white text-center text-lg font-bold">
              Verify OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    gap: 16,
  },
});

export default OTPScreen;
