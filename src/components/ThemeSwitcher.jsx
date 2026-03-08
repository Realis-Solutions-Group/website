import { useState, useRef, useEffect } from 'react';
import { THEMES } from '../constants/themes';

export function ThemeSwitcher({ theme, onThemeChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  const currentLabel = THEMES.find((t) => t.id === theme)?.label ?? 'Theme';

  return (
    <div ref={containerRef} className="theme-switcher-wrap" style={{ position: 'relative' }}>
      <button
        type="button"
        className="theme-switcher"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Current theme: ${currentLabel}. Change theme.`}
        style={{
          padding: '0.5rem 0.75rem',
          minHeight: 44,
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
          cursor: 'pointer',
          minWidth: 160,
          textAlign: 'left',
        }}
      >
        Theme: {currentLabel} ▼
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Select theme"
          className="theme-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 4,
            listStyle: 'none',
            padding: 0,
            margin: 0,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            minWidth: 200,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}
        >
          {THEMES.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                role="option"
                aria-selected={theme === t.id}
                onClick={() => {
                  onThemeChange(t.id);
                  setOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '0.6rem 1rem',
                  textAlign: 'left',
                  fontFamily: 'var(--font-body)',
                  background: theme === t.id ? 'var(--accent)' : 'transparent',
                  color: theme === t.id ? 'var(--bg)' : 'var(--text)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
