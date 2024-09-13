import { render, fireEvent, screen } from '@testing-library/react';
import PlayControls from '@/components/PlayControls';
import { vi } from 'vitest';

test('changes speed when speed button is clicked', () => {
  render(
    <PlayControls
      onPrev={vi.fn()}
      onNext={vi.fn()}
      isFirstSong={false}
      isLastSong={false}
      onShuffleToggle={vi.fn()}
      isShuffle={false}
    />
  );

  const speedButton = screen.getByRole('button', { name: /Set play speed to/i });

  // Initially the speed is 1x
  expect(speedButton).toHaveTextContent('1x');

  // Click to change speed to 2x
  fireEvent.click(speedButton);
  expect(speedButton).toHaveTextContent('2x');

  // Click to change speed to 3x
  fireEvent.click(speedButton);
  expect(speedButton).toHaveTextContent('3x');

  // Click to change back to 1x
  fireEvent.click(speedButton);
  expect(speedButton).toHaveTextContent('1x');
});

test('toggles play/pause state when button is clicked', () => {
  render(
    <PlayControls
      onPrev={vi.fn()}
      onNext={vi.fn()}
      isFirstSong={false}
      isLastSong={false}
      onShuffleToggle={vi.fn()}
      isShuffle={false}
    />
  );

  const playPauseButton = screen.getByRole('button', { name: /Pause/i });

  // Initially the button should show "Pause"
  expect(playPauseButton).toHaveAttribute('aria-label', 'Pause');

  // Click to toggle play/pause
  fireEvent.click(playPauseButton);
  expect(playPauseButton).toHaveAttribute('aria-label', 'Play');

  // Click again to toggle back to pause
  fireEvent.click(playPauseButton);
  expect(playPauseButton).toHaveAttribute('aria-label', 'Pause');
});