import { useState } from 'react';
import { COMPANY, CONTACT_HELP_OPTIONS } from '../constants/content';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    help: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    alert(
      'Thank you. Your message has been received. Realis will be in touch shortly.'
    );
  };

  const inputStyle = {
    padding: '0.75rem',
    fontFamily: 'var(--font-body)',
    border: '1px solid var(--border)',
    background: 'var(--bg)',
    color: 'var(--text)',
    fontSize: '1rem',
    minHeight: 44,
  };

  return (
    <div className="page-contact">
      <section className="section text-center page-contact-intro">
        <h1
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
          }}
        >
          Contact / Book a Meeting
        </h1>
        <p
          className="reveal"
          style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}
        >
          Book 30 minutes with Realis experts. We&apos;re ready for what&apos;s
          next — and so are you.
        </p>
        <a
          href={`mailto:${COMPANY.email}`}
          className="btn-primary reveal"
          style={{
            display: 'inline-flex',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          Book 30 minutes → {COMPANY.email}
        </a>
        <div className="reveal contact-links-block">
          <p><strong>Phone:</strong> {COMPANY.phone}</p>
          <p><strong>Email:</strong>{' '}
            <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--accent)' }}>{COMPANY.email}</a>
          </p>
          <p className="contact-social">
            <a
              href={COMPANY.linkedInEmily}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', marginRight: '1rem' }}
            >
              Emily&apos;s LinkedIn
            </a>
            <a
              href={COMPANY.linkedInCompany}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              Company LinkedIn
            </a>
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            AWS Marketplace availability — inquire for details.
          </p>
        </div>
      </section>

      <section
        className="reveal section container contact-form-section page-contact-form"
        style={{ maxWidth: 560, padding: '2rem 1.5rem' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            marginBottom: '1rem',
          }}
        >
          Send a message
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
              aria-required="true"
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            Company
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
              aria-required="true"
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            How can we help?
            <select
              name="help"
              value={form.help}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select...</option>
              {CONTACT_HELP_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              style={inputStyle}
            />
          </label>
          <button
            type="submit"
            className="btn-primary"
            style={{
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              fontWeight: 600,
              minHeight: 44,
            }}
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
