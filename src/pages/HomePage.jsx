import {
  COMPANY,
  STAT_72,
  URGENCY_QUESTIONS,
  TOP_5_RISKS,
  PERSONAS,
} from '../constants/content';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <section
        className="hero hero-bg section hero--compact"
        style={{
          minHeight: 'clamp(40vh, 52vh, 60vh)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(2rem, 3rem, 4rem) 1.5rem',
          position: 'relative',
        }}
      >
        <h1
          className="hero-headline reveal"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {COMPANY.tagline}
        </h1>
        <p
          className="reveal"
          style={{
            fontSize: '1.25rem',
            marginTop: '1rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
          }}
        >
          {COMPANY.taglineSub}
        </p>
        <p
          className="reveal"
          style={{
            marginTop: '1.5rem',
            maxWidth: 560,
            fontFamily: 'var(--font-body)',
          }}
        >
          {COMPANY.northStar}. Premier AI security, product safety, and emerging
          risk advisory for Fortune 100 companies, federal agencies, and legal
          teams.
        </p>
      </section>

      <section
        className="reveal section section--stat"
        style={{ background: 'var(--bg-card)', margin: 0 }}
      >
        <div className="container container--narrow text-center">
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              margin: 0,
              color: 'var(--accent)',
            }}
          >
            {STAT_72.value}
          </p>
          <p
            style={{
              marginTop: '0.5rem',
              color: 'var(--text-muted)',
              fontSize: '1rem',
            }}
          >
            {STAT_72.text}
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Are you ready?
        </h2>
        <div className="container container--text">
          {URGENCY_QUESTIONS.map((q, i) => (
            <p
              key={i}
              className="reveal"
              style={{
                marginBottom: '1.25rem',
                fontSize: '1.05rem',
                lineHeight: 1.5,
              }}
            >
              {q}
            </p>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section section--alt section-personas">
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}
        >
          Who We Serve
        </h2>
        <p
          className="reveal"
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            maxWidth: 520,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Find your path. We meet you where you are — with the right mix of briefings, assessments, and advisory.
        </p>
        <div className="persona-cards">
          {PERSONAS.map((p, i) => (
            <article
              key={p.id}
              className="persona-card card reveal"
              style={{
                padding: '1.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <p
                className="persona-card__quote"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--text)',
                  marginBottom: '0.5rem',
                  fontSize: '1.05rem',
                  lineHeight: 1.5,
                }}
              >
                &ldquo;{p.quote}&rdquo;
              </p>
              {p.subquote && (
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                    lineHeight: 1.45,
                  }}
                >
                  {p.subquote}
                </p>
              )}
              <p
                className="persona-card__title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                {p.title}
              </p>
              {p.outcome && (
                <p
                  style={{
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                  }}
                >
                  {p.outcome}
                </p>
              )}
              <div className="persona-card__tags" style={{ marginBottom: '1.25rem' }}>
                {p.services.map((s) => (
                  <span
                    key={s}
                    className="persona-tag"
                    style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.6rem',
                      marginRight: '0.5rem',
                      marginBottom: '0.5rem',
                      fontSize: '0.8rem',
                      background: 'var(--bg-alt, var(--border))',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="btn-primary persona-card__cta"
                style={{
                  display: 'inline-flex',
                  padding: '0.6rem 1.25rem',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                {p.ctaText}
              </Link>
              {p.ctaHint && (
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {p.ctaHint}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Top 5 AI Risks to Address Now
        </h2>
        <ol
          className="container"
          style={{
            maxWidth: 640,
            margin: '0 auto',
            paddingLeft: '1.25rem',
          }}
        >
          {TOP_5_RISKS.map((r, i) => (
            <li
              key={i}
              className="reveal"
              style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}
            >
              {r}
            </li>
          ))}
        </ol>
      </section>

      <section
        className="cta-strip section text-center"
        style={{ padding: 'clamp(2rem, 3rem, 3rem) 1.5rem' }}
      >
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          Book 30 minutes with Realis experts.
        </p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="btn-primary"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Contact Realis to get started
              </a>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.9 }}>
          AWS Partner | Available on AWS Marketplace
        </p>
      </section>
    </>
  );
}
