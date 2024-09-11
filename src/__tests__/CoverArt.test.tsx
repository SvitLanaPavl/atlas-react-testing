import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import CoverArt from '@/components/CoverArt';

test('CoverArt renders correctly with valid image', () => {
  const { container } = render(<CoverArt cover='https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn4.webp' />);
  expect(container).toMatchSnapshot();
});