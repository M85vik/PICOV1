import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const BottomSheetComponent = () => {


      const sheetRef = useRef(null);

     const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);



  return (
    <View>
      <Text>BottomSheet</Text>
    </View>
  );
};

export default BottomSheet;
