import { render, screen } from '@testing-library/react';
import FAQSection from '../../features/landing/presentation/components/FAQSection';

describe('FAQ', () => {
  it('should show section title', () => {
    render(<FAQSection />);
    const heading = screen.getByRole('heading', {
      name: /preguntas frecuentes/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
