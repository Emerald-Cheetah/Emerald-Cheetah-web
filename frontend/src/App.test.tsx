import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  it('should render the Home link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('should render the Payment link', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Payment' })).toBeInTheDocument();
});

  it('should render the Catalog link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Catalog' })).toBeInTheDocument();
  });

  it('should render the header title', () => {
    render(<App />);
    expect(screen.getByText('Emerald Cheetah')).toBeInTheDocument();
  });
});