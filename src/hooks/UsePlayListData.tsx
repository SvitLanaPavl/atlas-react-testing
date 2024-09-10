import { useEffect, useState } from 'react';

export interface Song {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

export const usePlaylistData = () => {
  const [data, setData] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      setLoading(true);

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second delay

      fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist')
        .then((response) => response.json())
        .then((data: Song[]) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching playlist:', error);
          setLoading(false);
        });
    };

    fetchPlaylist();
  }, []);

  return { data, loading };
};
