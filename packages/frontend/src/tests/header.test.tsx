/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Header />);

  // ACT
  await userEvent.click(screen.getByText('Header'));
  //   await screen.findByRole('img');

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Header');
  //   expect(screen.getByRole('button')).toBeDisabled();
});
