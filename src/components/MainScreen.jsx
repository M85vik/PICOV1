// IMPORTANT
import React, {useCallback, useRef, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';

import PollutantCard from './PollutantCard';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {LoginLeftUpperIcon} from './src/components/AllSvgIcon';

import {Dimensions} from 'react-native';
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

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={handleMainScreenPress}>
        <View
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
          <View className="w-[90%] h-60  rounded-xl bg-slate-800 flex-row items-center justify-between  mx-auto px-4 py-5">
            {/* Left: AQI Info */}

            <View className="flex-1">
              {/* <View className="flex-row items-center mb-1">
                <View className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                <Text className="text-white font-bold">Live AQI</Text>
              </View> */}
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

            {/* Right: AQI Status and Image */}
            <View className="items-center ml-4">
              {/* Replace with your AQI image/icon */}

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
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default MainScreen;
