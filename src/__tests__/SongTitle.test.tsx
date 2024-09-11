import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import SongTitle from '@/components/SongTitle';

test('Song title reders correctly', () => {
  const { container } = render(<SongTitle title='Painted in Blue' artist='Soul Canvas'  />);
  expect(container).toMatchSnapshot();
});