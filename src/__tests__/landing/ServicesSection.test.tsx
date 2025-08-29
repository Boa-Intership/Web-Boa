import { render, screen } from '@testing-library/react';
import ServicesSection from '../../features/landing/presentation/components/ServicesSection';

describe('Services', () => {
  it('should show section title', () => {
    render(<ServicesSection />);
    const heading = screen.getByRole('heading', {
      name: /clientes/i,
      level: 4,
    });
    expect(heading).toBeInTheDocument();
  });
});
