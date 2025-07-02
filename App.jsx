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
        // initialRouteName="LandingScreen"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// HALF

// IMPORTANT
// import React, {useCallback, useRef, useMemo, useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   TouchableWithoutFeedback,
//   Image,
// } from 'react-native';

// import PollutantCard from './src/components/PollutantCard';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
// import {LoginLeftUpperIcon} from './src/components/AllSvgIcon';

// import {Dimensions} from 'react-native';
// const {width, height} = Dimensions.get('window');

// const App = () => {
//   const sheetRef = useRef(null);
//   const snapPoints = useMemo(() => ['3%', '65%', '90%'], []);
//   const [sheetIndex, setSheetIndex] = useState(1);

//   const handleSheetChange = useCallback(index => {
//     setSheetIndex(index);
//   }, []);

//   // Minimize sheet when main screen is pressed
//   const handleMainScreenPress = () => {
//     sheetRef.current?.snapToIndex(0);
//   };

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <TouchableWithoutFeedback onPress={handleMainScreenPress}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: '#334155',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text className=" text-amber-500 font-sans font-bold text-4xl  ">
//             HELLO !!
//           </Text>
//           <Button
//             title="Open Sheet"
//             onPress={() => sheetRef.current?.snapToIndex(1)}
//           />
//         </View>
//       </TouchableWithoutFeedback>
//       <BottomSheet
//         ref={sheetRef}
//         index={1}
//         snapPoints={snapPoints}
//         enableDynamicSizing={false}
//         onChange={handleSheetChange}
//         enableContentPanningGesture={sheetIndex !== 0}
//         enableHandlePanningGesture={true}>
//         <BottomSheetScrollView
//           style={{
//             backgroundColor: 'white',
//             borderRadius: 8,
//             paddingTop: 16,
//           }}>
//           <View className="w-[90%] h-60  rounded-xl bg-slate-800 flex-row items-center justify-between  mx-auto px-4 py-5">
//             {/* Left: AQI Info */}

//             <View className="flex-1">
//               {/* <View className="flex-row items-center mb-1">
//                 <View className="w-2 h-2 rounded-full bg-red-500 mr-2" />
//                 <Text className="text-white font-bold">Live AQI</Text>
//               </View> */}
//               <Text className="text-5xl font-extrabold text-orange-300 leading-none">
//                 110
//               </Text>
//               <View className="flex-row mt-2">
//                 <Text className="text-gray-200 font-bold mr-1">PM10 :</Text>
//                 <Text className="text-white font-bold mr-1">107</Text>
//                 <Text className="text-gray-200">µg/m³</Text>
//               </View>
//               <View className="flex-row mt-1">
//                 <Text className="text-gray-200 font-bold mr-1">PM2.5 :</Text>
//                 <Text className="text-white font-bold mr-1">39</Text>
//                 <Text className="text-gray-200">µg/m³</Text>
//               </View>

//               <Text className="text-gray-200 mb-1">Air Quality is</Text>
//               <View className="bg-white/20 px-4 py-1 rounded ">
//                 <Text className="text-orange-300  text-center font-bold text-xl">
//                   Poor
//                 </Text>
//               </View>
//             </View>

//             {/* Right: AQI Status and Image */}
//             <View className="items-center ml-4">
//               {/* Replace with your AQI image/icon */}

//               <Image
//                 source={require('./src/assets/aqipoor.png')}
//                 style={{
//                   width: width * 0.48, // 35% of screen width
//                   height: height * 0.24, // 24% of screen height

//                   borderRadius: 10,
//                   overflow: 'hidden',
//                   resizeMode: 'cover',
//                 }}
//               />
//             </View>
//           </View>

//           <View className="flex-1 bg-white items-center justify-start pt-5">
//             <PollutantCard
//               pollutantName="Ozone"
//               pollutantCode="(O₃)"
//               value="12"
//               unit="ppb"
//               indicatorColor="border-red-500"
//               onPress={() => alert('Ozone card pressed!')}
//             />

//             <PollutantCard
//               pollutantName="Ozone"
//               pollutantCode="(O₃)"
//               value="12"
//               unit="ppb"
//               indicatorColor="border-orange-400"
//               onPress={() => alert('Ozone card pressed!')}
//             />

//             <PollutantCard
//               pollutantName="Ozone"
//               pollutantCode="(O₃)"
//               value="12"
//               unit="ppb"
//               indicatorColor="border-green-400"
//               onPress={() => alert('Ozone card pressed!')}
//             />
//           </View>
//         </BottomSheetScrollView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// export default App;

// TERMINATE

// import {View, Text} from 'react-native';
// import React from 'react';
// import Map from './src/components/Map';

// const App = () => {
//   return <Map />;
// };

// export default App;

// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// import {StyleSheet, View} from 'react-native';
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// const App = () => {
//   <View style={styles.container}>
//     <MapView
//       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//       style={styles.map}
//       region={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.015,
//         longitudeDelta: 0.0121,
//       }}></MapView>
//   </View>;
// };

// export default App;
