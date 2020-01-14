import React, {useEffect} from 'react';


const Icons = ({icon, width, height}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 24} height={height || 24} viewBox="0 0 24 24">
      {React.createElement(icon[0].name, icon[0].attributes, null)}
    </svg>
  )
};

// Icons.propTypes = {};

export default Icons;
