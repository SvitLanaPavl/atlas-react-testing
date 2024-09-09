import React from 'react'
import CoverArt from './CoverArt'
import SongTitle from './SongTitle'
import PlayControls from './PlayControls'
import VolumeControls from './VolumeControls'

const CurrentlyPlaying: React.FC = () => {
  return (
    <div className='p-6 md:w-1/2'>
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  )
}

export default CurrentlyPlaying