import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('home page shows the hero, the real contact details and plays a reel', () => {
  window.location.hash = '#/';
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/stories worth watching/i);
  expect(screen.getAllByText('teamdastaanproductions@gmail.com').length).toBeGreaterThan(0);

  fireEvent.click(screen.getAllByRole('button', { name: /play famous wolf/i })[0]);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(screen.getByTitle('Famous Wolf')).toHaveAttribute('src', expect.stringContaining('KxyMWSQurgM'));

  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('long-form page lists only categories that have videos', () => {
  window.location.hash = '#/work';
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/every story/i);
  expect(screen.getByRole('heading', { name: /podcast episodes/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /faceless videos/i })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /wedding/i })).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: /play crime niche/i })).toBeInTheDocument();
});
