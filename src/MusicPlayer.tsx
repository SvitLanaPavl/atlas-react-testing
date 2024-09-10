import React, { useEffect, useState } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

interface Song {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [songHistory, setSongHistory] = useState<number[]>([]); // Song history to track previous songs

  // Fetch playlist data from the API
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist')
      .then((response) => response.json())
      .then((data: Song[]) => {
        setPlaylist(data);
        setCurrentSongIndex(0);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching playlist: ', error);
        setIsLoading(false);
      });
  }, []);

  const handleSongChange = (index: number) => {
    if (index >= 0 && index < playlist.length) {
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
      // Normal mode: move to the next song and add current song to history
      if (currentSongIndex + 1 < playlist.length) {
        setSongHistory((prevHistory) => [...prevHistory, currentSongIndex]);
        setCurrentSongIndex(currentSongIndex + 1);
      }
    }
  };

  const handlePrevSong = () => {
    if (isShuffle && songHistory.length > 0) {
      // In shuffle mode, go back to the last song in history
      const lastSongIndex = songHistory[songHistory.length - 1];
      setSongHistory((prevHistory) => prevHistory.slice(0, -1)); // Remove last entry from history
      setCurrentSongIndex(lastSongIndex);
    } else if (!isShuffle && currentSongIndex > 0) {
      // In normal mode, go back one song
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg shadow-lg md:flex-row">
      {isLoading ? (
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
            onSongSelect={(index) => handleSongChange(index)}
          />
        </>
      )}
    </div>
  );
};

export default MusicPlayer;
