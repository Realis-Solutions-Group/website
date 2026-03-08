import { COMPANY } from '../constants/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {COMPANY.name}. {COMPANY.tagline}.</p>
      <p>
        {COMPANY.website} | {COMPANY.email} | {COMPANY.phone}
      </p>
    </footer>
  );
}
