import { render, screen } from '@testing-library/react';
import WelcomeSection from '../../features/landing/presentation/components/WelcomeSection';
import { BrowserRouter } from 'react-router-dom';

describe('Welcome', () => {
  it('should show statistics text', () => {
    render(<WelcomeSection />, { wrapper: BrowserRouter });
    const stats = screen.getByText(/Paquetes enviados/i);
    expect(stats).toBeInTheDocument();
  });
});
