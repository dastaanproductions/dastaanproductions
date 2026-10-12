import { render, screen, fireEvent } from '@testing-library/react';
import Reviews from './Reviews';

const items = [
  { quote: 'First sample review.', client: 'Client A', project: 'Video editing', rating: 5 },
  { quote: 'Second sample review.', client: 'Client B', rating: 4 },
];

test('shows one review at a time and steps through them with the arrows', () => {
  render(<Reviews items={items} />);

  const first = screen.getByText('First sample review.').closest('figure');
  const second = screen.getByText('Second sample review.').closest('figure');
  expect(first).toHaveClass('on');
  expect(second).not.toHaveClass('on');
  expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /next review/i }));
  expect(second).toHaveClass('on');
  expect(screen.getByText('02 / 02')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /next review/i }));
  expect(first).toHaveClass('on');
});
