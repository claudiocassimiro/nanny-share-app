import { render, screen } from '@testing-library/react';
import App from './App';

describe('test for application hero section', () => {
  it('does the h1 element exist?', () => {
    render(<App />);
    const titleH1 = screen.getByRole('heading',
      { level: 1, name: 'Easily create or join a local nanny share with Hapu' });
      
    expect(titleH1).toBeInTheDocument();
  });

  it('does the p element exist?', () => {
    render(<App />);
    const paragraph = screen.getByText(
      'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.'
    );

    expect(paragraph).toBeInTheDocument();
  });
})
