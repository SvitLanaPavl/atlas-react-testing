import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import { vi } from 'vitest'; // Import Vitest's mock utility
import MusicPlayer from '../MusicPlayer';
import { usePlaylistData } from '@/hooks/UsePlayListData'; // Import the hook

// Mocking the `usePlaylistData` hook
vi.mock('@/hooks/UsePlayListData', () => ({
  usePlaylistData: vi.fn(),
}));

describe('MusicPlayer Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading skeleton when playlist data is loading', async () => {
    // Mock the hook to return a loading state
    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      loading: true, // Simulate loading
    });

    console.log(usePlaylistData());

    render(<MusicPlayer />);

    // Assert that loading skeletons are shown
    await waitFor(() => {
      expect(screen.getByTestId('loading-skeleton-current')).toBeInTheDocument();
      expect(screen.getByTestId('loading-skeleton-playlist')).toBeInTheDocument();
    });
  });

  it('renders the playlist when data is loaded', async () => {
    // Mock the hook to return a loaded playlist
    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false, // Simulate that data has loaded
    });

    render(<MusicPlayer />);

    await waitFor(() => {
      const items = screen.getAllByText('Painted in Blue');
      expect(items[0]).toBeInTheDocument();
    });
  });

  it('toggles shuffle mode when shuffle button is clicked', () => {
    // Mock the hook to simulate loaded playlist data
    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });
  
    render(<MusicPlayer />);
  
    // Ensure shuffle is initially off
    const shuffleButton = screen.getByRole('button', { name: /shuffle/i });
    fireEvent.click(shuffleButton);
  
    // Now we can assert that the shuffle state has been toggled
    expect(shuffleButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('plays the next song when the next button is clicked', () => {
    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });
  
    render(<MusicPlayer />);
  
    // Find the song that is currently playing, which should be the first one initially
    const currentlyPlayingSection = screen.getByTestId('currently-playing-section');
    expect(within(currentlyPlayingSection).getByText('Painted in Blue')).toBeInTheDocument();
  
    // Click the "Next" button
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
  
    // Now check that the second song is playing
    expect(within(currentlyPlayingSection).getByText('Tidal Drift')).toBeInTheDocument();
  });

  it('plays the previous song when the previous button is clicked', async () => {
    // Mock the hook to return a playlist with two songs
    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false, // Simulate that data has loaded
    });

    render(<MusicPlayer />);

    // Start by moving to the second song by clicking "Next"
    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    // Ensure that "Tidal Drift" is currently playing
    const currentlyPlayingSection = screen.getByTestId('currently-playing-section');
    expect(within(currentlyPlayingSection).getByText('Tidal Drift')).toBeInTheDocument();

    // Click the "Previous" button to go back to the first song
    fireEvent.click(screen.getByRole('button', { name: /previous/i }));

    // Ensure that "Painted in Blue" is now playing
    await waitFor(() => {
      expect(within(currentlyPlayingSection).getByText('Painted in Blue')).toBeInTheDocument();
    });
  });
  
  it('changes the current song when a song from the playlist is selected', () => {
    // Mock the hook to return a playlist with two songs
    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);

    // Get the playlist section to scope your queries
    const playlistSection = screen.getByTestId('playlist-section');

    // Simulate clicking on the song in the playlist
    fireEvent.click(within(playlistSection).getByText('Tidal Drift'));

    // Ensure that the selected song is now playing in the currently playing section
    const currentlyPlayingSection = screen.getByTestId('currently-playing-section');
    expect(within(currentlyPlayingSection).getByText('Tidal Drift')).toBeInTheDocument();
  });
  
  
});
