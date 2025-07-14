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
        <Stack.Screen name="ChartScreen" component={TestChart} />
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

// import React, {useState} from 'react';
// import {View, Text, Button, ScrollView} from 'react-native';
// import {getAQI} from './src/api/auth'; // adjust your import path

// const App = () => {
//   const [aqiData, setAqiData] = useState(null);

//   const handleFetchAQI = async () => {
//     // Example coordinates for Delhi
//     const lat = '28.6139';
//     const lon = '77.2090';
//     const data = await getAQI(lat, lon);
//     setAqiData(data);
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={{
//         flexGrow: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: 'white',
//       }}>
//       <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>
//         Test AQI Fetch
//       </Text>
//       <Button title="Fetch AQI" onPress={handleFetchAQI} />

//       {aqiData && (
//         <View style={{marginTop: 20}}>
//           <Text style={{fontSize: 18}}>Region: {aqiData.regionCode}</Text>
//           <Text style={{fontSize: 18}}>Date: {aqiData.dateTime}</Text>

//           {aqiData.indexes.map(index => (
//             <View key={index.code} style={{marginTop: 10}}>
//               <Text style={{fontSize: 16}}>Index: {index.displayName}</Text>
//               <Text>AQI: {index.aqi}</Text>
//               <Text>Category: {index.category}</Text>
//               <Text>Dominant Pollutant: {index.dominantPollutant}</Text>
//             </View>
//           ))}

//           <Text style={{fontSize: 20, marginTop: 20}}>Pollutants</Text>
//           {aqiData.pollutants.map(pollutant => (
//             <View key={pollutant.code} style={{marginTop: 5}}>
//               <Text style={{fontSize: 16}}>
//                 {pollutant.fullName} ({pollutant.displayName}):{' '}
//                 {pollutant.concentration.value} {pollutant.concentration.units}
//               </Text>
//             </View>
//           ))}

//           <Text style={{fontSize: 20, marginTop: 20}}>
//             Health Recommendations
//           </Text>
//           <Text>
//             General: {aqiData.healthRecommendations.generalPopulation}
//           </Text>
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// export default App;

// const unitMap: Record<string, string> = {
//   PARTS_PER_BILLION: 'ppb',
//   MICROGRAMS_PER_CUBIC_METER: 'µg/m³',
//   PARTS_PER_MILLION: 'ppm',
//   MILLIGRAMS_PER_CUBIC_METER: 'mg/m³',
//   NANOGRAMS_PER_CUBIC_METER: 'ng/m³',
// };

//getweather

// import React, {useEffect, useState} from 'react';
// import {View, Text, Button, SafeAreaView} from 'react-native';
// import {getWeatherData} from './src/api/auth'; // adjust the path

// const App = () => {
//   const [weather, setWeather] = useState(null);

//   const fetchWeather = async () => {
//     // Provide sample lat/lon (example: Delhi)
//     const lat = '28.6139';
//     const lon = '77.2090';
//     const data = await getWeatherData(lat, lon);
//     console.log('Data:', data.weatherData);

//     if (data) {
//       // If you're using Axios, the actual data is usually in data.data
//       setWeather(data.weatherData); // adjust this if needed based on your actual response shape
//     }
//   };

//   useEffect(() => {
//     fetchWeather();
//   }, []);

//   return (
//     <SafeAreaView
//       style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       {weather ? (
//         <View>
//           <Text>Temperature: {weather.temperature.degrees}°C</Text>
//           <Text>Humidity: {weather.relativeHumidity}%</Text>
//         </View>
//       ) : (
//         <Text>Loading weather data...</Text>
//       )}
//       <Button title="Refresh" onPress={fetchWeather} />
//     </SafeAreaView>
//   );
// };

// export default App;
