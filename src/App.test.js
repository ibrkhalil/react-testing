import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const p = screen.getByText(/and save to reload/)
  expect(p.innerHTML).toContain('save to reload')
  expect(linkElement).toBeInTheDocument();
});
