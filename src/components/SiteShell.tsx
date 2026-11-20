import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../theme';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/apps', label: 'Products' },
  { to: '/about', label: 'Who we are' },
  { to: '/contact', label: 'Contact' },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className={`brand-lockup ${compact ? 'is-compact' : ''}`}>
      <span className="brand-mark" aria-hidden="true">
        K
      </span>
      <span className="brand-word">Knics</span>
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label="Site">
        <Link className="footer-link" to="/about">
          Who we are
        </Link>
        <Link className="footer-link" to="/privacy">
          Privacy
        </Link>
        <Link className="footer-link" to="/contact">
          Contact us
        </Link>
        <Link className="footer-link" to="/apps">
          Products
        </Link>
      </nav>
      <p className="footer-copy">Knics@2026</p>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <header className="site-header desktop-header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="btn primary header-cta" to="/apps">
            Explore products
          </Link>
        </div>
      </header>

      <header className="mobile-bar">
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bars" />
        </button>
        <BrandMark compact />
        <div className="mobile-bar-actions">
          <ThemeToggle />
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? '' : ' is-hidden'}`} hidden={!menuOpen}>
        <nav className="mobile-menu-nav" aria-label="Mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/privacy" className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>
            Privacy
          </NavLink>
        </nav>
        <div className="mobile-menu-footer">
          <Link className="mobile-cta" to="/apps" onClick={() => setMenuOpen(false)}>
            Explore products
          </Link>
        </div>
      </div>

      <main className="site-main">{children}</main>
      <SiteFooter />
    </div>
  );
}
