import { render, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import VolumeControls from '@/components/VolumeControls';

test('VolumeControls correctly renders at default', () => {
  const { container, getByRole } = render(<VolumeControls />);
  
  // Ensure the button starts with the label "Mute"
  const button = getByRole('button');
  expect(button).toHaveAttribute('aria-label', 'Mute');

  expect(container).toMatchSnapshot();
});

test('Volume toggles mute', () => {
  const { container, getByRole } = render(<VolumeControls />);
  const button = getByRole('button');

  // Check the button starts with "Mute"
  expect(button).toHaveAttribute('aria-label', 'Mute');
  
  // Mute the volume
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-label', 'Unmute');
  expect(container).toMatchSnapshot();

  // Unmute the volume
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-label', 'Mute');
  expect(container).toMatchSnapshot();
});
