import React, { useState } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';
import { usePlaylistData } from './hooks/UsePlayListData';



const MusicPlayer: React.FC = () => {
  const {data: playlist, loading} = usePlaylistData();
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [songHistory, setSongHistory] = useState<number[]>([]); // Song history to track previous songs

  

  const handleSongChange = (index: number) => {
    if (index >= 0 && index < playlist.length) {
      setSongHistory((prevHistory) => [...prevHistory, currentSongIndex]);
      setCurrentSongIndex(index);
    }
  };

  const handleShuffleToggle = () => {
    setIsShuffle((prevShuffle) => !prevShuffle);
    setSongHistory([]); // Clear history when toggling shuffle
  };

  const handleNextSong = () => {
    if (isShuffle) {
      // Shuffle mode: pick a random song and store current song in history
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setSongHistory((prevHistory) => [...prevHistory, currentSongIndex]);
      setCurrentSongIndex(randomIndex);
    } else {
        setCurrentSongIndex(currentSongIndex + 1);
      }
  };

  const handlePrevSong = () => {
    if (isShuffle && songHistory.length > 0) {
      // In shuffle mode, go back to the last song in history
      const lastSongIndex = songHistory[songHistory.length - 1];
      setSongHistory((prevHistory) => prevHistory.slice(0, -1)); // Remove last entry from history
      setCurrentSongIndex(lastSongIndex);
    } else {
      // In normal mode, go back one song
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg shadow-lg md:flex-row">
      {loading ? (
        <p>Loading playlist...</p>
      ) : (
        <>
          {playlist.length > 0 && (
            <CurrentlyPlaying
              song={playlist[currentSongIndex]}
              onPrev={handlePrevSong}
              onNext={handleNextSong}
              isFirstSong={currentSongIndex === 0}
              isLastSong={currentSongIndex === playlist.length - 1}
              onShuffleToggle={handleShuffleToggle}
              isShuffle={isShuffle}
            />
          )}
          <Playlist
            playlist={playlist}
            currentSongIndex={currentSongIndex}
            onSongSelect={handleSongChange}
          />
        </>
      )}
    </div>
  );
};

export default MusicPlayer;
