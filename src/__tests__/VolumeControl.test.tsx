import { render, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import VolumeControls from '@/components/VolumeControls';

test('VolumeControls correctly renders at default', () => {
  const { container } = render(<VolumeControls />);
  expect(container).toMatchSnapshot();
});

test('Volume toggles mute', () => {
  const { container, getByRole } = render(<VolumeControls />);
  const button = getByRole('button');

  // Mute the volume
  fireEvent.click(button);
  expect(container).toMatchSnapshot();

  // Unmute the volume
  fireEvent.click(button);
  expect(container).toMatchSnapshot(); 
});