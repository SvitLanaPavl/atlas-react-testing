import React, { useState } from 'react'

interface PlayControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirstSong: boolean;
  isLastSong: boolean;
  onShuffleToggle: () => void;
  isShuffle: boolean;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  onPrev, onNext, isFirstSong, isLastSong, onShuffleToggle, isShuffle
}) => {
  const [speed, setSpeed] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);


  const handleSpeedChange = () => {
    setSpeed((prevSpeed) => (prevSpeed === 3 ? 1 : prevSpeed + 1));
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };


  return (
    <div className='mb-5 flex items-center justify-between'>
      {/* Speed Button */}
      <button 
      className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out' 
      onClick={handleSpeedChange}>
        <span className='text-lg text-customPurple-500'>{speed}x</span>
      </button>
      {/* Prev Button */}
      <button 
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out ${isFirstSong ? 'text-customPurple-100' : 'text-customPurple-500'}`}
      onClick={onPrev}
      disabled={isFirstSong}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
          <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
        </svg>
      </button>
      {/* Play/Pause Button */}
      <button 
      className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out outline outline-1.5 outline-customPurple-500 focus:outline-offset-2" 
      onClick={togglePlay}
      >
      { isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-customPurple-500">
        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
      </svg>
       ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-customPurple-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>
       ) }
        
      </button>
       {/* Next Button */}
      <button 
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out ${isLastSong ? 'text-customPurple-100' : 'text-customPurple-500'}`}
      onClick={onNext}
      disabled={isLastSong}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
        </svg>
      </button>
      {/* Shuffle Button */}
      <button 
      className={`inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out ${isShuffle ? 'text-green-500' : 'text-customPurple-500'}`}
      onClick={onShuffleToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default PlayControls
