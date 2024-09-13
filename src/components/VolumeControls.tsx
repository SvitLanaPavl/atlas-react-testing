import React, { useState } from 'react';
import volume from '../assets/volume.svg';
import volume_disabled from '../assets/volume_dis.svg';
import './VolumeControls.css'; // Import the CSS file

const VolumeControls: React.FC = () => {
  const [volumeValue, setVolumeValue] = useState<number>(50);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);

    // Unmute if user interacts with the slider when muted
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }

    setVolumeValue(newVolume);

    // Auto mute when slider reaches 0
    if (newVolume === 0) {
      setIsMuted(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      setVolumeValue(50); // Restore volume to previous level when unmuted
    } else {
      setVolumeValue(0); // Set volume to 0 when muted
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Volume Icon */}
      <button onClick={toggleMute} aria-label={isMuted || volumeValue === 0 ? 'Unmute' : 'Mute'}>
        <img
          src={isMuted || volumeValue === 0 ? volume_disabled : volume}
          className="w-5 h-5 block align-middle"
          alt={isMuted || volumeValue === 0 ? 'Volume disabled icon' : 'Volume icon'}
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
          className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none volume-slider ${
            isMuted ? 'muted' : ''
          }`}
          style={{
            background: isMuted
              ? '#F4EBFF'
              : `linear-gradient(to right, #53389E ${volumeValue}%, #F4EBFF ${volumeValue}%)`, // Dynamic gradient
          }}
        />
      </div>
    </div>
  );
};

export default VolumeControls;
