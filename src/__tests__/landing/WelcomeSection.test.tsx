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
        title: 'Entrega rápida',
        highlightedWord: 'segura',
        subtitle: 'Tu carga, a tiempo',
        description: 'Cobertura nacional e internacional',
        buttonText: 'Empezar',
      },
      isLoading: false,
      error: null,
    }),
  };
});

import WelcomeSection from '../../features/landing/presentation/components/WelcomeSection';

describe('Welcome', () => {
  it('should show statistics text', () => {
    const wrapper = createTestWrapper();
    render(<WelcomeSection />, { wrapper });
    const stats = screen.getByText(/Paquetes enviados/i);
    expect(stats).toBeInTheDocument();
  });
});
