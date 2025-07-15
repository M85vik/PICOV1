// src/components/PollutantCard.js
// import React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import Pm25Icon from './Pm25Icon';

// const PollutantCard = ({
//   pollutantName = 'Particulate Matter',
//   pollutantCode = '(PM2.5)',
//   value = '39',
//   unit = 'µg/m³',
//   indicatorColor = 'border-yellow-400', // Tailwind CSS class for the indicator
//   onPress,
// }) => {
//   const iconColor = '#94a3b8'; // Corresponds to slate-400

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       activeOpacity={0.8}
//       // Main container with row layout, padding, background, and rounded corners
//       className={`
//         flex-row items-center justify-between p-4 bg-slate-800 rounded-xl
//         border-l-4 ${indicatorColor}
//       `}>
//       {/* Left Column: Icon and Text */}
//       <View className="flex-row items-center space-x-3 bg-red-400">
//         <Pm25Icon color={iconColor} size={56} />
//         <View>
//           <Text className="text-base font-semibold text-slate-200">
//             {pollutantName}
//           </Text>
//           <Text className="text-sm text-slate-400">{pollutantCode}</Text>
//         </View>
//       </View>

//       {/* Right Column: Value, Unit, and Arrow */}
//       <View className="flex-row items-center space-x-2  bg-blue-200 ">
//         <View className="items-end">
//           <Text className="text-3xl font-bold text-slate-100">{value}</Text>
//           <Text className="text-sm text-slate-400">{unit}</Text>
//         </View>
//         <Feather name="chevron-right" size={24} color={iconColor} />
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default PollutantCard;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Icon from 'react-native-vector-icons/FontAwesome';
const PollutantCard = ({
  pollutantName = 'Particulate Matter',
  pollutantCode = '(PM2.5)',
  value = '39',
  unit = 'µg/m³',
  indicatorColor = 'border-yellow-400',
  onPress,
  disabled = true,
}) => {
  const iconColor = '#94a3b8';

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      className={`
        flex-row w-[90%] p-4 bg-slate-800 rounded-xl
        border-l-4 ${indicatorColor} mb-2
      `}
      style={{minHeight: 100}}>
      {/* Left: Icon and Text */}
      <View className="flex-row items-center space-x-3 flex-1">
        {/* <Pm25Icon color={iconColor} size={48} /> */}
        <Icon
          name="cloud"
          size={20}
          color="white"
          style={{marginLeft: 10, marginRight: 10}}
        />

        <View className="flex-1">
          <Text className="text-base font-semibold text-slate-200 flex-shrink">
            {pollutantName}
          </Text>
          <Text className="text-sm text-slate-400">{pollutantCode}</Text>
        </View>
      </View>

      {/* Right: Value, Unit, Arrow */}
      <View className="items-end ml-2 ">
        <Text className="text-3xl  font-bold text-slate-100">{value}</Text>
        <Text className="text-sm text-slate-400">{unit}</Text>
        <Feather
          name="chevron-right"
          size={24}
          color={iconColor}
          style={{marginTop: 4}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PollutantCard;
