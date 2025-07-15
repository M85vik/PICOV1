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
import UserProfile from './src/components/UserProfile';
import MainScreen from './src/components/MainScreen.jsx';
import TestChart from './src/components/TestChart.jsx';
// apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="LandingScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        {/* <Stack.Screen name="ChartScreen" component={TestChart} /> */}
        <Stack.Screen name="UserProfileScreen" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import {View, Text} from 'react-native';
// import React from 'react';
// import UserProfile from './src/components/UserProfile';
// import ProfileScreen from './src/components/ProfileScreen';

// const App = () => {
//   return (
//     // <UserProfile />
//     <ProfileScreen />

//   );
// };

// export default App;
