import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const AQIGauge = ({aqi = 0, color = {r: 0, g: 0, b: 0, label: 'Unknown'}}) => {
  const tintColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  const maxAQI = 500;
  const percentage = Math.min((aqi / maxAQI) * 100, 100);

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={220}
        width={18}
        fill={percentage}
        tintColor={tintColor}
        backgroundColor="#e0e0e0"
        arcSweepAngle={240}
        rotation={240}
        lineCap="round">
        {() => (
          <View style={styles.textContainer}>
            <Text style={styles.aqiValue}>{aqi}</Text>
            <Text style={styles.label}>AQI</Text>
            <Text style={styles.category}>{color.label}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  aqiValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  category: {
    fontSize: 13,
    color: '#444',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default AQIGauge;
