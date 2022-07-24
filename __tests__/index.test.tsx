import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import { Campaign } from '../types';

let campaigns: Campaign[] = [
  {
    data: {},
    campaign: {
      title: '#BisaBangkit Bersama Kitabisa',
      donation_received: 178613497,
      days_remaining: 0,
      donation_percentage: 0.357227,
      donation_target: 0.002,
    },
    days_remaining: 0,
    donation_target: 0.002,
  },
];

describe('[Test Suite] <Home/> Components', () => {

  it('[Test] Render <App/> element and show text "Kitabisa.com"', () => {
    render(<Home campaigns={campaigns} />);

    const result = screen.getByText(/Kitabisa.com/i);
    expect(result).toBeInTheDocument();
  });

  it('Home page snapshot testing', () => {
    const { container } = render(<Home campaigns={campaigns} />);
    expect(container).toMatchSnapshot();
  })

});