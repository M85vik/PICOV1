// import React, {useCallback, useRef, useMemo, useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
// } from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// import {getLocation} from './Location'; // adjust if needed
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
// import {Dimensions} from 'react-native';
// import {getAQI, getWeatherData} from '../api/auth';
// import TestChart from './TestChart';

// const MainScreen = ({navigation}) => {
//   const sheetRef = useRef(null);
//   const snapPoints = useMemo(() => ['3%', '65%', '90%'], []);
//   const [sheetIndex, setSheetIndex] = useState(1);

//   const [coords, setCoords] = useState(null);
//   const [temprature, setTemprature] = useState(null);
//   const [humidity, setHumidity] = useState(null);
//   const [AQI, setAQI] = useState(null);

//   const handleSheetChange = useCallback(index => {
//     setSheetIndex(index);
//   }, []);

//   const handleMainScreenPress = () => {
//     sheetRef.current?.snapToIndex(0);
//   };

//   const fetchWeather = async (lat, lon) => {
//     try {
//       const data = await getWeatherData(lat, lon);
//       console.log('Weather data:', data);

//       const dataAQI = await getAQI(lat, lon);
//       console.log('AQI data:', dataAQI);

//       if (data) {
//         setTemprature(data.temperature?.degrees);
//         setHumidity(data.relativeHumidity);
//       }
//       if (dataAQI) {
//         setAQI(dataAQI.indexes[0]?.aqi);
//       }
//     } catch (error) {
//       console.error('Failed to get weather data:', error);
//     }
//   };

//   const handleGetLocation = async () => {
//     try {
//       const location = await getLocation();
//       if (location) {
//         console.log('Lat:', location.latitude);
//         console.log('Lng:', location.longitude);
//         console.log('Accuracy:', location.accuracy);
//         setCoords(location);

//         // Immediately fetch weather when location is set
//         fetchWeather(location.latitude, location.longitude);
//       } else {
//         console.log('Permission denied or no coords');
//       }
//     } catch (err) {
//       console.error('Failed to get location:', err);
//     }
//   };

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <TouchableWithoutFeedback onPress={handleMainScreenPress}>
//         <View style={{flex: 1}}>
//           <MapView
//             style={StyleSheet.absoluteFillObject}
//             initialRegion={{
//               latitude: 28.6936091,
//               longitude: 77.214643,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             }}
//             region={
//               coords
//                 ? {
//                     latitude: coords.latitude,
//                     longitude: coords.longitude,
//                     latitudeDelta: 0.01,
//                     longitudeDelta: 0.01,
//                   }
//                 : undefined
//             }>
//             {coords && (
//               <Marker
//                 coordinate={{
//                   latitude: coords.latitude,
//                   longitude: coords.longitude,
//                 }}
//                 title="You are here"
//                 description={`Accuracy: ${coords.accuracy} m`}
//               />
//             )}
//           </MapView>

//           <View style={{flex: 1, alignItems: 'center'}}>
//             <Text style={{color: 'white', marginBottom: 5}}>
//               React Native Geolocation Test
//             </Text>
//             <Button title="Get Location" onPress={handleGetLocation} />
//           </View>
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
//           <View
//             style={{
//               backgroundColor: '#242d47',
//               width: '90%',
//               height: 220,
//               marginHorizontal: '5%',
//               borderRadius: 12,
//               flexDirection: 'row',
//               padding: 8,
//               marginBottom: 20,
//             }}>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: '#E0F7FA',
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: 4,
//                 borderRadius: 10,
//               }}
//               onPress={() => {
//                 if (coords) {
//                   fetchWeather(coords.latitude, coords.longitude);
//                   console.log('Temp pressed');
//                 }
//               }}>
//               <Text style={{fontWeight: '600', color: '#00796B'}}>Temp</Text>
//               <Text
//                 style={{fontSize: 24, fontWeight: 'bold', color: '#00796B'}}>
//                 {temprature !== null ? `${temprature}\u00B0C` : `--\u00B0C`}
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={{
//                 backgroundColor: '#FFF3E0',
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: 4,
//                 borderRadius: 10,
//               }}
//               onPress={() => console.log('Humidity pressed')}>
//               <Text style={{fontWeight: '600', color: '#EF6C00'}}>
//                 Humidity
//               </Text>
//               <Text
//                 style={{fontSize: 24, fontWeight: 'bold', color: '#EF6C00'}}>
//                 {humidity !== null ? `${humidity}%` : `--%`}
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={{
//                 backgroundColor: '#E8F5E9',
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: 4,
//                 borderRadius: 10,
//               }}
//               onPress={() => {
//                 console.log('AQI pressed');
//                 navigation.navigate('ChartScreen');
//               }}>
//               <Text style={{fontWeight: '600', color: '#2E7D32'}}>AQI</Text>
//               <Text
//                 style={{fontSize: 24, fontWeight: 'bold', color: '#2E7D32'}}>
//                 {AQI !== null ? `${AQI}` : `--`}
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {coords && (
//             <View>
//               <TestChart lat={coords.latitude} lon={coords.longitude} />
//             </View>
//           )}
//         </BottomSheetScrollView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// export default MainScreen;

import React, {useCallback, useRef, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {getLocation} from './Location';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {getAQI, getWeatherData, getAQIForecast} from '../api/auth';
import TestChart from './TestChart';
import PollutantCard from './PollutantCard';

// import tempIcon from '../assets/tempicon.svg';
const MainScreen = ({navigation}) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['3%', '65%', '90%'], []);
  const [sheetIndex, setSheetIndex] = useState(1);

  const [coords, setCoords] = useState(null);
  const [temprature, setTemprature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [AQI, setAQI] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [pollutants, setPollutants] = useState(null);

  const handleSheetChange = useCallback(index => {
    setSheetIndex(index);
  }, []);

  const handleMainScreenPress = () => {
    sheetRef.current?.snapToIndex(0);
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const data = await getWeatherData(lat, lon);
      console.log('Weather data:', data);

      const dataAQI = await getAQI(lat, lon);
      console.log('AQI data:', dataAQI);

      if (data) {
        setTemprature(data.temperature?.degrees);
        setHumidity(data.relativeHumidity);
      }
      if (dataAQI) {
        setAQI(dataAQI.indexes[0]?.aqi);
        setPollutants(dataAQI.pollutants);
      }

      if (pollutants != null) console.log('Pollutants Data : ', pollutants);
      // Also fetch chart data
      const forecast = await getAQIForecast(lat, lon);
      const formatted = {
        labels: forecast.map(item => item.dateTime.split(' ')[1]),
        datasets: [{data: forecast.map(item => item.aqi)}],
      };
      setChartData(formatted);
    } catch (error) {
      console.error('Failed to get weather data or AQI forecast:', error);
    }
  };

  const handleGetLocation = async () => {
    try {
      const location = await getLocation();
      if (location) {
        console.log('Lat:', location.latitude);
        console.log('Lng:', location.longitude);
        console.log('Accuracy:', location.accuracy);
        setCoords(location);

        // Fetch weather & chart data when location is set
        await fetchWeather(location.latitude, location.longitude);
      } else {
        console.log('Permission denied or no coords');
      }
    } catch (err) {
      console.error('Failed to get location:', err);
    }
  };

  const unitMap = {
    PARTS_PER_BILLION: 'ppb',
    PARTS_PER_MILLION: 'ppm',
    MICROGRAMS_PER_CUBIC_METER: 'µg/m³',
    MILLIGRAMS_PER_CUBIC_METER: 'mg/m³',
    NANOGRAMS_PER_CUBIC_METER: 'ng/m³',
  };

  const indicatorColorMap = {
    pm25: 'border-yellow-400',
    pm10: 'border-green-400',
    no2: 'border-orange-400',
    so2: 'border-red-400',
    co: 'border-blue-400',
    o3: 'border-teal-400',
    nh3: 'border-purple-400',
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={handleMainScreenPress}>
        <View style={{flex: 1}}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
              latitude: 28.6936091,
              longitude: 77.214643,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            region={
              coords
                ? {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }
                : undefined
            }>
            {coords && (
              <Marker
                coordinate={{
                  latitude: coords.latitude,
                  longitude: coords.longitude,
                }}
                title="You are here"
                description={`Accuracy: ${coords.accuracy} m`}
              />
            )}
          </MapView>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{color: 'white', marginBottom: 5}}>
              React Native Geolocation Test
            </Text>
            <Button title="Get Location" onPress={handleGetLocation} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        enableContentPanningGesture={sheetIndex !== 0}
        enableHandlePanningGesture={true}>
        <BottomSheetScrollView
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            paddingTop: 16,
          }}
          contentContainerStyle={{
            paddingBottom: 100, // 👈 This ensures bottom spacing regardless of content height
          }}>
          <View
            style={{
              backgroundColor: '#242d47',
              width: '90%',
              height: 150,
              marginHorizontal: '5%',
              borderRadius: 12,
              flexDirection: 'row',
              padding: 8,
              marginBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#E0F7FA',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 4,
                borderRadius: 10,
              }}
              // onPress={() => {
              //   if (coords) {
              //     fetchWeather(coords.latitude, coords.longitude);
              //     console.log('Temp pressed');
              //   }
              // }}
            >
              <Text style={{fontWeight: '600', color: '#00796B'}}>Temp</Text>
              <Text
                style={{fontSize: 24, fontWeight: 'bold', color: '#00796B'}}>
                {temprature !== null ? `${temprature}\u00B0C` : `--\u00B0C`}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#FFF3E0',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 4,
                borderRadius: 10,
              }}
              onPress={() => console.log('Humidity pressed')}>
              <Text style={{fontWeight: '600', color: '#EF6C00'}}>
                Humidity
              </Text>
              <Text
                style={{fontSize: 24, fontWeight: 'bold', color: '#EF6C00'}}>
                {humidity !== null ? `${humidity}%` : `--%`}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#E8F5E9',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 4,
                borderRadius: 10,
              }}
              onPress={() => {
                console.log('AQI pressed');
                navigation.navigate('UserProfileScreen');
              }}>
              <Text style={{fontWeight: '600', color: '#2E7D32'}}>AQI</Text>
              <Text
                style={{fontSize: 24, fontWeight: 'bold', color: '#2E7D32'}}>
                {AQI !== null ? `${AQI}` : `--`}
              </Text>
            </TouchableOpacity>
          </View>

          {coords && chartData && (
            <View className="bg-white justify-center items-center">
              <TestChart chartData={chartData} />
            </View>
          )}

          {pollutants && (
            <View className="w-full justify-center items-center mx-auto py-5 ">
              {pollutants.map(pollutant => {
                const indicatorColor = indicatorColorMap[pollutant.code];
                return (
                  <PollutantCard
                    key={pollutant.code}
                    pollutantName={pollutant.fullName}
                    pollutantCode={pollutant.code}
                    value={pollutant.concentration.value}
                    unit={
                      unitMap[pollutant.concentration.units] ||
                      pollutant.concentration.units
                    }
                    indicatorColor={indicatorColor}

                    // onPress={() =>
                    //   Alert.alert(`${pollutant.fullName} Pressed...`)
                    // }
                  />
                );
              })}
            </View>
          )}

          {/* <View className="bg-red-500 h-500 w-full mt-10">
            <Text>Hello</Text>
            <Image
              source={tempIcon}
              className=" w-[100%] h-[100%]"
              resizeMode="contain"
            />
          </View> */}
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default MainScreen;
