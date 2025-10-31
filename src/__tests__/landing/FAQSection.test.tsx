import { render, screen } from '@testing-library/react';
import FAQSection from '../../features/landing/presentation/components/FAQSection';
import { createTestWrapper } from '../../test/testUtils';

describe('FAQ', () => {
  it('should show section title', () => {
    const wrapper = createTestWrapper();
    render(<FAQSection />, { wrapper });
    const heading = screen.getByRole('heading', {
      name: /preguntas frecuentes/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
