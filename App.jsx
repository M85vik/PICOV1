import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/components/LoginScreen.jsx';
import SignUpScreen from './src/components/SignUpScreen.jsx';
import ProfileScreen from './src/components/ProfileScreen.jsx';
import LoadingScreen from './src/components/LoadingScreen.jsx';
import LandingScreen from './src/components/LandingScreen.jsx';
import OTPScreen from './src/components/OTPScreen.jsx';

import MainScreen from './src/components/MainScreen.jsx';
// apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// HALF

// App.jsx
// import React, {useEffect} from 'react';
// import {View, Button, Text} from 'react-native';
// import {getLocation} from './src/components/Location'; // adjust path if needed

// const App = () => {
//   const handleGetLocation = async () => {
//     try {
//       const coords = await getLocation();
//       if (coords) {
//         console.log('Lat:', coords.latitude);
//         console.log('Lng:', coords.longitude);
//         console.log('Accuracy:', coords.accuracy);
//       } else {
//         console.log('Permission denied or no coords');
//       }
//     } catch (err) {
//       console.error('Failed to get location:', err);
//     }
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>React Native Geolocation Test</Text>
//       <Button title="Get Location" onPress={handleGetLocation} />
//     </View>
//   );
// };

// export default App;
