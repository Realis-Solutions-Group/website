import {
  SERVICES,
  PERSONAS,
  AWS_MARKETPLACE_COPY,
} from '../constants/content';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  return (
    <>
      <section className="section">
        <h1
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          Services & Products
        </h1>
        <p
          className="reveal container text-center"
          style={{
            maxWidth: 640,
            margin: '0 auto',
            color: 'var(--text-muted)',
          }}
        >
          Four contractual product types — Assessments, Briefings, Attorney-Led
          Services, and SaaS — to match your stage and needs.
        </p>
      </section>

      {SERVICES.map((group, gi) => (
        <section
          key={gi}
          className={`section section-service-group${gi % 2 === 1 ? ' section-service-group--alt' : ''}`}
          style={{
            background:
              gi % 2 === 1 ? 'var(--bg-alt, var(--bg-card))' : 'transparent',
          }}
        >
          <h2 className="section-header-bg reveal">
            {group.type}
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
            }}
          >
            {group.tagline}
          </p>
          <div className="card-grid card-grid--services">
            {group.items.map((item, ii) => (
              <article
                key={ii}
                className="card reveal"
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    marginTop: 0,
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    marginBottom: '0.75rem',
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  <em>Ideal for:</em> {item.ideal}
                </p>
                <Link
                  to="/contact"
                  className="link-cta"
                >
                  Contact Realis →
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="section section-persona-fit">
        <div className="container" style={{ maxWidth: 960 }}>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 2.5vw, 1.75rem)',
              textAlign: 'center',
              marginBottom: '0.5rem',
            }}
          >
            Persona → Service fit
          </h2>
          <p
            className="reveal"
            style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              fontSize: '1rem',
            }}
          >
            Match your role to the right engagements. Not sure? Start with a briefing or capability assessment.
          </p>
          <div className="persona-fit-cards">
            {PERSONAS.map((p) => (
              <article
                key={p.id}
                className="persona-fit-card card reveal"
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {p.title}
                </h3>
                <div className="persona-fit-tags" style={{ marginBottom: '1rem' }}>
                  {p.services.map((s) => (
                    <span
                      key={s}
                      className="persona-tag"
                      style={{
                        display: 'inline-block',
                        padding: '0.35rem 0.65rem',
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
                  className="link-cta"
                  style={{ marginTop: 'auto' }}
                >
                  {p.ctaText} →
                </Link>
              </article>
            ))}
          </div>
          <div
            className="reveal persona-fit-aws"
            style={{
              marginTop: '2rem',
              padding: '1.25rem 1.5rem',
              background: 'var(--bg-alt, var(--bg-card))',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: 'var(--accent)' }}>AWS Marketplace</strong>
              {' — '}
              {AWS_MARKETPLACE_COPY}
            </p>
            <Link
              to="/contact"
              className="link-cta"
              style={{ marginTop: '0.75rem', display: 'inline-block' }}
            >
              Inquire about AWS Marketplace →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
