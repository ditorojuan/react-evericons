import React from 'react';
import icons from '../const/icons.json'

const Icons = ({icon, width, height}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 24} height={height || 24} viewBox="0 0 24 24">
      <path fill-rule="evenodd" d={icons[icon]}/>
    </svg>
  )
    ;
};

export default Icons;
