import { render, screen } from '@testing-library/react';
import WelcomeSection from '../../features/landing/presentation/components/WelcomeSection';
import { createTestWrapper } from '../../test/testUtils';

describe('Welcome', () => {
  it('should show statistics text', () => {
    const wrapper = createTestWrapper();
    render(<WelcomeSection />, { wrapper });
    const stats = screen.getByText(/Paquetes enviados/i);
    expect(stats).toBeInTheDocument();
  });
});
