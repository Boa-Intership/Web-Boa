import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando cambia de ruta
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // También forza al montar (al recargar)
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTop;
