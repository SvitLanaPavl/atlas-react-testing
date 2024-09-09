import React, { useState } from 'react';
import volume from '../assets/volume.svg';

const VolumeControls = () => {
  const [volumeValue, setVolumeValue] = useState(50);

  const handleVolumeChange = (e) => {
    setVolumeValue(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <img src={volume} className="w-5 h-5 block align-middle" alt="volume icon" />
      <div className="flex items-center w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={volumeValue}
          onChange={handleVolumeChange}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none accent-customPurple-500"
          /*This inline style was necessary since tailwind does not support dynamic background - 
          I had to overwrite default type='range' with my colors*/
          style={{
            background: `linear-gradient(to right, #53389E ${volumeValue}%, #F4EBFF ${volumeValue}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default VolumeControls;
