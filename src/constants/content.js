/**
 * Site copy and structured content.
 * Keep content here so copy and product updates don’t require touching component code.
 */

export const NAV_LINKS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const COMPANY = {
  name: 'Realis Solutions Group',
  tagline: 'With you, from Boardroom to Courtroom',
  taglineSub: "Ready for what's next",
  northStar: 'Your defensibility is our North Star',
  email: 'contact@realissolutions.com',
  phone: '+1 (833) 777-2844',
  website: 'www.realissolutions.com',
  linkedInCompany: 'https://www.linkedin.com/company/realis-solutions-group/',
  linkedInEmily: 'https://www.linkedin.com/in/eksoward/',
};

export const STAT_72 = {
  value: '72%',
  text: 'of S&P 500 companies reported material risks from AI in the Risk Factors section of their 2025 SEC 10-K filings.',
};

export const URGENCY_QUESTIONS = [
  'Do your regulatory, compliance, and legal strategies account for emerging technology and advanced threats?',
  'If a vendor or competitor is hit with a novel cyber attack, how quickly can you mobilize a team to assess whether you are or will be impacted?',
  'How quickly can you call every owner of an AI system in development and production to update them on an unfolding situation?',
  'Are your teams fully prepared to use AI or any new emerging technology without risk of compromising corporate policies?',
  'How do you protect your reputation, brand equity, and market position while adopting new technologies?',
  'Do your analysts, investigators, auditors, and legal teams have the skills, procedures, and tools to assess advanced technology for emerging risks?',
];

export const TOP_5_RISKS = [
  'Include AI in TPRM, threat, and vulnerability programs',
  "Regulatory interest is high — don't wait to begin AI governance",
  'AI litigation is increasing — address risk and gap proactively',
  'Create paved-paths for AI R&D, SDLC integration, and AI apps',
  'AI-involved compromises are rising — update procedures for crisis & breach',
];

export const PERSONAS = [
  {
    id: 'exploring',
    title: 'The Exploring Leader',
    quote: "We haven't figured out security or governance for AI, and I'm not feeling confident yet.",
    subquote: "I need to make the ROI case for AI security and governance to the business.",
    outcome: 'Clarify the case and get a clear path forward.',
    services: ['Emerging Risk Briefings', 'Capability Assessment & Roadmapping'],
    ctaText: 'Start with a briefing',
    ctaHint: 'Or book a capability assessment',
  },
  {
    id: 'advancing',
    title: 'The Advancing Leader',
    quote: 'I have specific needs for a single program, product, M&A, or due diligence process.',
    subquote: "We haven't looked at TPRM or supply chain for AI yet.",
    outcome: 'Get targeted support for the initiative that matters now.',
    services: ['Advanced Risk Analysis', 'Product Security & Safety Acceleration'],
    ctaText: 'Explore risk analysis',
    ctaHint: 'Or product security acceleration',
  },
  {
    id: 'aligning',
    title: 'The Aligning Leader',
    quote: 'Our AI keeps stalling out — we are heavily regulated and need specific controls.',
    subquote: 'We need program-level guidance for AI PSIRT, AI Red Teams, AI Audit, and AI SRE.',
    outcome: 'Align governance and unblock high-stakes programs.',
    services: ['Corporate Governance Alignment', 'Attorney-Led Services'],
    ctaText: 'Discuss governance alignment',
    ctaHint: 'Or attorney-led support',
  },
];

export const SERVICES = [
  {
    type: 'Assessments',
    tagline: 'Advisory assess-and-recommend engagements',
    items: [
      {
        name: 'Emerging Risk Capability Assessment & Roadmapping',
        desc: 'Baseline point-in-time capabilities, prioritize a 2-year plan, present to the Board.',
        ideal: 'Clarify the case for AI security & governance.',
      },
      {
        name: 'Advanced Risk Analysis Services',
        desc: 'Technology due diligence and analysis to promote surety in investments and strengthen programs.',
        ideal: 'Evaluate AI risk sources and investment decisions.',
      },
      {
        name: 'Product Security & Safety Acceleration',
        desc: 'Industry-vetted expertise to grow product impact, expand in regulated markets, and strengthen M&A case.',
        ideal: 'Unblock AI adoption in regulated sectors.',
      },
      {
        name: 'Corporate Governance Alignment',
        desc: 'Align emerging risk strategy with risk appetite across lines of defense.',
        ideal: 'Drive outcomes in high-stakes matters.',
      },
    ],
  },
  {
    type: 'Briefings',
    tagline: 'Expert-led trainings & speaking engagements',
    items: [
      {
        name: 'Emerging Risk Briefings',
        desc: 'Prescient, industry-relevant briefings from world-class speakers and trainers. Multi-briefing discounts available.',
        ideal: 'Exploring and Advancing Leaders.',
      },
    ],
  },
  {
    type: 'Attorney-Led Services',
    tagline: 'Privileged, high-stakes matters',
    items: [
      {
        name: 'Litigation Support & Expert Services',
        desc: 'Technical SMEs, Expert Witnesses, and Special Masters. Works under supervision of attorney-in-charge.',
        ideal: 'Aligning Leaders; legal teams.',
      },
      {
        name: 'Privileged Investigations & Crisis Management',
        desc: 'Resolve and recover from significant challenges. Works under supervision of attorney-in-charge.',
        ideal: 'Aligning Leaders; crisis response.',
      },
    ],
  },
  {
    type: 'SaaS',
    tagline: 'Governed via SLA/OLA and EULA',
    items: [
      {
        name: 'Quantitative & Factors-Based Risk Analysis',
        desc: 'Technology for proactively assessing and measuring organizational resilience.',
        ideal: 'Available on AWS Marketplace.',
      },
    ],
  },
];

export const PERSONA_SERVICE_FIT = [
  { persona: 'Exploring Leader', services: 'Emerging Risk Briefings, Capability Assessment & Roadmapping' },
  { persona: 'Advancing Leader', services: 'Advanced Risk Analysis, Product Security & Safety Acceleration' },
  { persona: 'Aligning Leader', services: 'Corporate Governance Alignment, Attorney-Led Services' },
];

export const AWS_MARKETPLACE_COPY =
  'Our quantitative risk analysis technology is available on AWS Marketplace. Governed via SLA/OLA and EULA.';

export const CONTACT_HELP_OPTIONS = [
  'Assessments',
  'Briefings',
  'Attorney-Led Services',
  'SaaS / AWS Marketplace',
];

export const EMILY_BIO = {
  name: 'Emily Soward',
  title: 'CEO, Founder & Chief AI Officer',
  credentials: 'Distinguished MSc Artificial Intelligence.',
  highlights:
    'Emily has led AI engagements for 28%+ of the Fortune 100 and dozens of public sector organizations. Speaker at MITRE ATT&CKcon.',
  standards:
    'Active and influential in standards for innovation, emerging risk, and advanced threat — including AWS Well-Architected, AWS Cloud Adoption Frameworks, and HITRUST.',
};

export const TEAM_HIGHLIGHTS = [
  'Collective experience across 43%+ of the Fortune 100 — including Amazon, Apple, Microsoft, NSA, CIA, FBI, US-CYBERCOM, and Google.',
  'AWS Partner. Available on AWS Marketplace.',
];

export const COMPANY_STORY =
  'Realis Solutions Group (f/k/a Applied Threat Intelligence Group — ATI Group) is your partner from boardroom to courtroom. We bring technical, legal, and policy expertise under one roof so you can face emerging risk with confidence.';
