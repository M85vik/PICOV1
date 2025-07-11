// IMPORTANT
import React, {useCallback, useRef, useMemo, useState, use} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {getLocation} from './Location'; // adjust path if needed

import Icon from 'react-native-vector-icons/Feather'; // You can use any icon set

import PollutantCard from './PollutantCard';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {Dimensions} from 'react-native';
import {getAQI, getWeatherData} from '../api/auth';
const {width, height} = Dimensions.get('window');

const MainScreen = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['3%', '65%', '90%'], []);
  const [sheetIndex, setSheetIndex] = useState(1);

  const handleSheetChange = useCallback(index => {
    setSheetIndex(index);
  }, []);

  // Minimize sheet when main screen is pressed
  const handleMainScreenPress = () => {
    sheetRef.current?.snapToIndex(0);
  };

  const [weatherData, setWeatherData] = useState(null);
  const [temprature, setTemprature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [AQI, setAQI] = useState(null);
  const fetchWeather = async () => {
    try {
      if (coords) {
        const data = await getWeatherData(coords.latitude, coords.longitude);
        console.log('data : ', data);

        const dataAQI = await getAQI(coords.latitude, coords.longitude);
        console.log('AQI Data:', dataAQI);

        if (data) {
          setWeatherData(data.weatherData);
          setTemprature(data.weatherData.temperature?.degrees);
          setHumidity(data.weatherData.relativeHumidity);
        }

        if (dataAQI) {
          console.log('AQI :', dataAQI.indexes[0]?.aqi);

          setAQI(dataAQI.indexes[0]?.aqi);
        }
      }
    } catch (error) {
      console.error(' log from MainScreen Failed to get weatherData:', err);
    }
  };

  const [coords, setCoords] = useState(null);
  const handleGetLocation = async () => {
    try {
      const coords = await getLocation();
      if (coords) {
        console.log('Lat:', coords.latitude);
        console.log('Lng:', coords.longitude);
        console.log('Accuracy:', coords.accuracy);
        setCoords(coords);
      } else {
        console.log('Permission denied or no coords');
      }
    } catch (err) {
      console.error('Failed to get location:', err);
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={handleMainScreenPress}>
        {/* <View
          style={{
            flex: 1,
            backgroundColor: '#334155',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MapView
            style={{width: '100%', height: '100%'}}
            initialRegion={{
              latitude: 28.6936091,
              longitude: 77.214643,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
            }}>
            <Text>React Native Geolocation Test</Text>
            <Button title="Get Location" onPress={handleGetLocation} />
          </View>
        </View>
 */}

        {/* <View style={{flex: 1}}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
              latitude: 28.6936091,
              longitude: 77.214643,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', marginBottom: 5}}>
              React Native Geolocation Test
            </Text>
            <Button title="Get Location" onPress={handleGetLocation} />
          </View>
        </View>
 */}

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

          <View
            style={{
              flex: 1,
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
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
        enableDynamicSizing={false}
        onChange={handleSheetChange}
        enableContentPanningGesture={sheetIndex !== 0}
        enableHandlePanningGesture={true}>
        <BottomSheetScrollView
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            paddingTop: 16,
          }}>
          {/* <View className="w-[90%] h-60  rounded-xl bg-slate-800 flex-row items-center justify-between  mx-auto px-4 py-5">
          

            <View className="flex-1">
             
              <Text className="text-5xl font-extrabold text-orange-300 leading-none">
                110
              </Text>
              <View className="flex-row mt-2">
                <Text className="text-gray-200 font-bold mr-1">PM10 :</Text>
                <Text className="text-white font-bold mr-1">107</Text>
                <Text className="text-gray-200">µg/m³</Text>
              </View>
              <View className="flex-row mt-1">
                <Text className="text-gray-200 font-bold mr-1">PM2.5 :</Text>
                <Text className="text-white font-bold mr-1">39</Text>
                <Text className="text-gray-200">µg/m³</Text>
              </View>

              <Text className="text-gray-200 mb-1">Air Quality is</Text>
              <View className="bg-white/20 px-4 py-1 rounded ">
                <Text className="text-orange-300  text-center font-bold text-xl">
                  Poor
                </Text>
              </View>
            </View>

          
            <View className="items-center ml-4">
        

              <Image
                source={require('../assets/aqipoor.png')}
                style={{
                  width: width * 0.48, // 35% of screen width
                  height: height * 0.24, // 24% of screen height

                  borderRadius: 10,
                  overflow: 'hidden',
                  resizeMode: 'cover',
                }}
              />
            </View>
          </View>

          <View className="flex-1 bg-white items-center justify-start pt-5">
            <PollutantCard
              pollutantName="Ozone"
              pollutantCode="(O₃)"
              value="12"
              unit="ppb"
              indicatorColor="border-red-500"
              onPress={() => alert('Ozone card pressed!')}
            />

            <PollutantCard
              pollutantName="Ozone"
              pollutantCode="(O₃)"
              value="12"
              unit="ppb"
              indicatorColor="border-orange-400"
              onPress={() => alert('Ozone card pressed!')}
            />

            <PollutantCard
              pollutantName="Ozone"
              pollutantCode="(O₃)"
              value="12"
              unit="ppb"
              indicatorColor="border-green-400"
              onPress={() => alert('Ozone card pressed!')}
            />
          </View> */}

          <View className="bg-[#242d47] w-[90%] h-[220px] mx-5 rounded-lg drop-shadow-lg flex-row px-2 pt-6">
            <TouchableOpacity
              className="bg-[#E0F7FA] h-[150px] flex-1 items-center justify-center mx-1 rounded-lg"
              onPress={() => {
                fetchWeather();
                console.log('temp pressed');
              }}>
              <Text className="absolute top-0 pt-8 font-semibold text-center text-[#00796B]">
                Temp
              </Text>
              <Text className="text-3xl font-bold text-[#00796B]">
                {temprature !== null ? `${temprature}\u00B0C` : `--\u00B0C`}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-[#FFF3E0] h-[150px] flex-1 items-center justify-center mx-1 rounded-lg"
              onPress={() => console.log('Humidity pressed')}>
              <Text className="absolute top-0 pt-8 font-semibold text-center text-[#EF6C00]">
                Humidity
              </Text>
              <Text className="text-3xl font-bold text-[#EF6C00]">
                {humidity !== null ? `${humidity}%` : `--%`}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-[#E8F5E9] h-[150px] flex-1 items-center justify-center mx-1 rounded-lg"
              onPress={() => console.log('AQI pressed')}>
              <Text className="absolute top-0 pt-8 font-semibold text-center text-[#2E7D32]">
                AQI
              </Text>
              <Text className="text-3xl font-bold text-[#2E7D32]">
                {' '}
                {AQI !== null ? `${AQI}` : `--`}
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default MainScreen;
