import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(137, 72, 203, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  fillShadowGradient: '#8948cb',
  fillShadowGradientOpacity: 1,
  barPercentage: 0.6,
  barRadius: 6,
  propsForBackgroundLines: {
    stroke: '#e3e3e3',
    strokeDasharray: '',
  },
};

const TestChart = ({chartData}) => {
  if (!chartData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>AQI Forecast</Text>
      <BarChart
        data={chartData}
        width={screenWidth - 35}
        height={320}
        chartConfig={chartConfig}
        fromZero
        showValuesOnTopOfBars
        withInnerLines={false}
        withHorizontalLabels
        showBarTops={false}
        style={styles.graphStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   alignItems: 'center',
  //   backgroundColor: '#fff',
  //   paddingVertical: 20,
  // },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  graphStyle: {
    marginVertical: 10,
    borderRadius: 15,
    elevation: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default TestChart;
