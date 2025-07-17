import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const Gauge = ({
  value = 0,
  maxValue = 100,
  field = 'ABC',
  color = {r: 0, g: 0, b: 0, label: 'Unknown'},
}) => {
  const tintColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

  const percentage = Math.max(0, Math.min((value / maxValue) * 100, 100));

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={110}
        width={8}
        fill={percentage}
        tintColor={tintColor}
        backgroundColor="#e0e0e0"
        arcSweepAngle={240}
        rotation={240}
        lineCap="round">
        {() => (
          <View style={styles.textContainer}>
            <Text style={styles.Value}>{value}</Text>
            <Text style={styles.field}>{field}</Text>
            <Text style={styles.label}>{color.label}</Text>
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
  Value: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  field: {
    fontSize: 14,
    color: '#666',
  },
  label: {
    fontSize: 13,
    color: '#444',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default Gauge;
