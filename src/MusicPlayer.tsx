import React, { useEffect, useState } from 'react';
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

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
    setIsShuffle((prevShuffle) => !prevShuffle)
  }

  const handleNextSong = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSongIndex(randomIndex);
    } else {
      handleSongChange(currentSongIndex + 1);
    }
  }

  return (
    <div className='mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg shadow-lg md:flex-row'>
      {isLoading ? (
        <p>Will develop loading later ... </p>
      ) : (
        <>
        {playlist.length > 0 && (
          <CurrentlyPlaying
            song={playlist[currentSongIndex]}
            onPrev={() => handleSongChange(currentSongIndex - 1)}
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
}

export default MusicPlayer