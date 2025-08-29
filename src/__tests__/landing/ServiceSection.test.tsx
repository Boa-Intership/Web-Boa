import { render, screen } from '@testing-library/react';
import ServiceSection from '../../features/landing/presentation/components/ServiceSection';
import { BrowserRouter } from 'react-router-dom';

describe('Customer Service', () => {
  it('should show section title', () => {
    render(<ServiceSection />, { wrapper: BrowserRouter });
    const heading = screen.getByRole('heading', {
      name: /atención al cliente/i,
      level: 4,
    });
    expect(heading).toBeInTheDocument();
  });
});
