import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {LoginLeftUpperIcon} from './AllSvgIcon';
const today = () => {
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  return (
    <GestureHandlerRootView className=" flex-1  ">
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}>
        <BottomSheetScrollView className=" bg-slate-500  rounded  ">
          <View className="flex-1 bg-white items-center justify-start pt-20">
            <View className="absolute top-0 left-0">
              <LoginLeftUpperIcon />
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default today;
