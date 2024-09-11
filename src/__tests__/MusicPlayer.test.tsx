import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MusicPlayer from '../MusicPlayer'; // Adjust the path to your component
import { usePlaylistData } from '../hooks/UsePlayListData'; // Mock the hook

// Mock the usePlaylistData hook
vi.mock('../hooks/UsePlayListData');

describe('MusicPlayer Component', () => {

  it('displays playlist and currently playing song once loaded', async () => {
    // Mock the hook to return playlist data
    (usePlaylistData as vi.Mock).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);

    // Ensure the playlist and song are rendered
    expect(await screen.findByText('Painted in Blue')).toBeInTheDocument();
    expect(screen.getByText('Soul Canvas')).toBeInTheDocument();
  });

  it('handles song navigation (next and previous)', async () => {
    // Mock the hook to return playlist data
    (usePlaylistData as vi.Mock).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);

    // Initially, the first song should be displayed
    expect(await screen.findByText('Painted in Blue')).toBeInTheDocument();

    // Simulate clicking the "Next" button
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(await screen.findByText('Tidal Drift')).toBeInTheDocument();

    // Simulate clicking the "Previous" button
    fireEvent.click(screen.getByRole('button', { name: /previous/i }));
    expect(await screen.findByText('Painted in Blue')).toBeInTheDocument();
  });

  it('toggles shuffle mode', async () => {
    // Mock the hook to return playlist data
    (usePlaylistData as vi.Mock).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);

    // Simulate clicking the "Shuffle" button
    const shuffleButton = screen.getByRole('button', { name: /shuffle/i });
    fireEvent.click(shuffleButton);

    // Assuming there's some visual change to indicate shuffle is enabled
    expect(shuffleButton).toHaveClass('enabled');
  });
});
