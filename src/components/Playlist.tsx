import React from 'react'
import PlayListItem from './PlayListItem'

interface Song {
  title: string;
  artist: string;
  duration: string;
}

interface PlaylistProps {
  playlist: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist, currentSongIndex, onSongSelect }) => {
  return (
    <div className='border-t border-l-0 p-6 md:w-1/2 md:border-l md:border-customPurple-50 md:border-t-0' data-testid="playlist-section">
      <h3 className='mb-4 text-lg text-customPurple-600 leading-7 font-semibold'>Playlist</h3>
      {playlist.map((song, index) => (
        <PlayListItem
        key={index}
        title={song.title}
        artist={song.artist}
        duration={song.duration}
        isCurrent={index === currentSongIndex}
        onClick={() => onSongSelect(index)}
       />
      ))}
    </div>
  )
}

export default Playlist