import { useState, useEffect } from 'react';

// Define the Song interface (can also import if you have it in another file)
interface Song {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

// Create the usePlaylistData hook
export const usePlaylistData = () => {
  const [data, setData] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
        const result: Song[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylistData();
  }, []);

  return { data, loading };
};
