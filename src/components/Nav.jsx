import { Link } from 'react-router-dom';
import { NAV_LINKS, COMPANY } from '../constants/content';

export function Nav({ currentPage, theme, mobileMenuOpen, onMobileMenuToggle, themeSwitcher }) {
  return (
    <nav className="nav-sticky nav-backdrop" role="navigation" aria-label="Main">
      <div className="nav-inner">
        <Link
          to="/"
          className="logo link-hover"
          onClick={() => onMobileMenuToggle(false)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            color: 'var(--text)',
          }}
          aria-label={`${COMPANY.name} Home`}
        >
          REALIS SOLUTIONS GROUP
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', position: 'relative' }}>
          <div className="nav-links nav-links-desktop">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`link-hover ${currentPage === link.id ? 'active' : ''}`}
                onClick={() => onMobileMenuToggle(false)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontWeight: currentPage === link.id ? 600 : 400,
                  borderBottom: currentPage === link.id && theme === 'editorial' ? '3px solid var(--accent)' : 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {mobileMenuOpen && (
            <div className="nav-links nav-links-mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => onMobileMenuToggle(false)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--text)',
                    fontWeight: currentPage === link.id ? 600 : 400,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          {themeSwitcher}
          <button
            type="button"
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => onMobileMenuToggle(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
