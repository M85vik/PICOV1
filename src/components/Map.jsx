import MapView from 'react-native-maps';

import {View, Text} from 'react-native';
import React from 'react';

const Map = () => {
  return (
    <View>
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
  );
};

export default Map;
