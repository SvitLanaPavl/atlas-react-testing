import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className='mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg shadow-lg md:flex-row'>
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
