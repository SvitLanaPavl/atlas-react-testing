import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MusicPlayer from '../MusicPlayer';
import { usePlaylistData } from '../hooks/UsePlayListData';
import { describe, it, vi } from 'vitest';

// Mock the usePlaylistData hook
vi.mock('../hooks/UsePlayListData');

describe('MusicPlayer Component', () => {

  it('displays playlist and currently playing song once loaded', async () => {
    (usePlaylistData as vi.Mock).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);

    expect(await screen.findByText('Painted in Blue')).toBeInTheDocument();
    expect(screen.getByText('Soul Canvas')).toBeInTheDocument();
  });

  it('handles song navigation (next and previous)', async () => {
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
    fireEvent.click(screen.getByRole('button', { name: /next song/i }));
    expect(await screen.findByText('Tidal Drift')).toBeInTheDocument();

    // Simulate clicking the "Previous" button
    fireEvent.click(screen.getByRole('button', { name: /previous song/i }));
    expect(await screen.findByText('Painted in Blue')).toBeInTheDocument();
  });

  it('toggles shuffle mode', async () => {
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
    expect(shuffleButton).toHaveClass('text-green-500');
  });
});
