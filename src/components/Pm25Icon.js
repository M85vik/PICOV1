// src/components/Pm25Icon.js
import React from 'react';
import Svg, {Path, Text as SvgText, G} from 'react-native-svg';

// This is a custom SVG component that closely matches the one in the image.
const Pm25Icon = ({color = '#94a3b8', size = 56}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 60 48">
      <G stroke={color} strokeWidth="1.5">
        <Path
          d="M45.73,16.27a10.37,10.37,0,0,0-19.49-5.4A8.34,8.34,0,0,0,14.08,27.1a8,8,0,0,0-1.84,15.73H42.6a10.15,10.15,0,0,0,3.13-19.95Z"
          fill={color}
          fillOpacity="0.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <SvgText
          x="28.5"
          y="31"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill={color}>
          PM2.5
        </SvgText>
        {/* Dots representing particles */}
        <Path
          d="M20 20.5h.01M26 21.5h.01M23 25.5h.01M34 23.5h.01M37 27.5h.01M29 28.5h.01M23 35.5h.01M35 36.5h.01"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};

export default Pm25Icon;
