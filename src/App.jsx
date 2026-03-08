import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Nav, Footer, ThemeSwitcher } from './components';
import { HomePage, ServicesPage, AboutPage, ContactPage } from './pages';
import { useReveal } from './hooks/useReveal';
import { useThemeFonts } from './hooks/useThemeFonts';
import { DEFAULT_THEME } from './constants/themes';
import { NAV_LINKS } from './constants/content';

function pathnameToPageId(pathname) {
  const p = pathname.replace(/\/$/, '') || '/';
  const link = NAV_LINKS.find((l) => l.path === p);
  return link ? link.id : 'home';
}

export function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rootRef = useRef(null);

  const currentPageId = pathnameToPageId(location.pathname);

  useThemeFonts(theme);
  useReveal(location.pathname);

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.setAttribute('data-theme', theme);
    }
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div ref={rootRef} className="app-root" data-theme={theme}>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="grain" aria-hidden="true" />
      <Nav
        currentPage={currentPageId}
        theme={theme}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={setMobileMenuOpen}
        themeSwitcher={
          <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
        }
      />
      <main id="main" role="main" className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
