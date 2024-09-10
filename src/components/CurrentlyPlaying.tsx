import React from 'react'
import CoverArt from './CoverArt'
import SongTitle from './SongTitle'
import PlayControls from './PlayControls'
import VolumeControls from './VolumeControls'

interface Song {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

interface CurrentlyPlayingProps {
  song: Song;
  onPrev: () => void;
  onNext: () => void;
  isFirstSong: boolean;
  isLastSong: boolean;
  onShuffleToggle: () => void;
  isShuffle: boolean;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  song, onPrev, onNext, isFirstSong, isLastSong, onShuffleToggle, isShuffle
}) => {
  return (
    <div className='p-6 md:w-1/2'>
      <CoverArt cover={song.cover} />
      <SongTitle title={song.title} artist={song.artist} />
      <PlayControls 
      onPrev={onPrev} 
      onNext={onNext} 
      isFirstSong={isFirstSong} 
      isLastSong={isLastSong} 
      onShuffleToggle={onShuffleToggle}
      isShuffle={isShuffle}
      />
      <VolumeControls />
    </div>
  )
}

export default CurrentlyPlaying