import {
  COMPANY,
  EMILY_BIO,
  COMPANY_STORY,
} from '../constants/content';

export function AboutPage() {
  return (
    <>
      <section className="section">
        <h1
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          About Emily & Team
        </h1>

        <article
          className="reveal card container container--narrow"
          style={{
            marginBottom: '2rem',
            padding: '2rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              marginTop: 0,
            }}
          >
            {EMILY_BIO.name}
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              marginBottom: '1rem',
            }}
          >
            {EMILY_BIO.title}
          </p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
            {EMILY_BIO.credentials} {EMILY_BIO.highlights}
          </p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
            {EMILY_BIO.standards}
          </p>
          <a
            href={COMPANY.linkedInEmily}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
            style={{ color: 'var(--accent)', textDecoration: 'none' }}
          >
            Emily&apos;s LinkedIn →
          </a>
        </article>

        <div
          className="reveal container container--narrow"
          style={{ marginBottom: '2rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            Team & Credibility
          </h2>
          <ul style={{ lineHeight: 1.8 }}>
            <li>
              Collective experience across <strong>43%+ of the Fortune 100</strong> — including
              Amazon, Apple, Microsoft, NSA, CIA, FBI, US-CYBERCOM, and Google.
            </li>
            <li>AWS Partner. Available on AWS Marketplace.</li>
          </ul>
        </div>

        <div className="reveal container container--narrow">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            Company Story
          </h2>
          <p style={{ lineHeight: 1.6 }}>{COMPANY_STORY}</p>
        </div>
      </section>
    </>
  );
}
