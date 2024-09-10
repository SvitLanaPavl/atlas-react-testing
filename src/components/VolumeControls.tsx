import React, { useState } from 'react';
import volume from '../assets/volume.svg';
import volume_disabled from '../assets/volume_dis.svg'

const VolumeControls: React.FC = () => {
  const [volumeValue, setVolumeValue] = useState<number>(50);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolumeValue(Number(e.target.value));
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Volume icon */}
      <button onClick={toggleMute}>
        <img src={isMuted ? volume_disabled : volume} 
          className="w-5 h-5 block align-middle" 
          alt={isMuted ? 'Volume disabled icon' : 'Volume icon'} 
        />
      </button>
      <div className="flex items-center w-full">
        {/* Volume Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volumeValue}
          onChange={handleVolumeChange}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none accent-customPurple-500"
          /*This inline style was necessary since tailwind does not support dynamic background - 
          I had to overwrite default type='range' with my colors*/
          style={{
            background: `linear-gradient(to right, #53389E ${volumeValue}%, #F4EBFF ${volumeValue}%)`,
          }}
          disabled={isMuted}
        />
      </div>
    </div>
  );
};

export default VolumeControls;
