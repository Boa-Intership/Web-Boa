import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createTestWrapper } from '../../test/testUtils';

vi.mock('@tanstack/react-query', async () => {
  const actual =
    await vi.importActual<typeof import('@tanstack/react-query')>('@tanstack/react-query');
  return {
    ...actual,
    useQuery: () => ({
      data: {
        titulo: 'Preguntas frecuentes',
        preguntas: [{ question: '¿Qué es Boa?', answer: 'Una empresa de logística.' }],
      },
      isLoading: false,
      error: null,
    }),
  };
});

import FAQSection from '../../features/landing/presentation/components/FAQSection';

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
