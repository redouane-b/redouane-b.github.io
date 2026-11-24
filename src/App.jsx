import './App.css'

/*
 * Content for redouane-b.github.io
 *
 * Public page, kept short on purpose: key information only.
 * - No client names, client countries or other identifying details; no product code names.
 * - No internal infrastructure, schemas, pricing or personal details.
 * - `impact: null` = no number yet. Put a real figure (e.g. "Visit prep from X to Y min")
 *   and it shows on the card. Never invent numbers.
 */

const LINKS = {
  karetis: "https://www.karetis.com/",
  github: "https://github.com/redouane-b",
  linkedin: "https://www.linkedin.com/in/redouane-b-36446a165/",
  medium: "https://redouaneb.medium.com/",
  pharmaRepo: "https://github.com/redouane-b/pharma-data-hub-france",
  dataGouv: "https://www.data.gouv.fr/reuses/article-descriptif-de-openmedic-avec-visualisations",
  medium1: "https://redouaneb.medium.com/pharma-open-data-guide-des-sources-publiques-de-donn%C3%A9es-pharmaceutiques-en-france-partie-1-4-4b189e4e9703",
  medium2: "https://redouaneb.medium.com/pharma-open-data-guide-des-sources-publiques-de-donn%C3%A9es-pharmaceutiques-en-france-partie-2-5-0d7d5d36e545",
  egoDemo: "https://ego-graph.vercel.app",
};

const WHAT_I_DO = [
  { title: "Help field teams decide who to see and what to say", text: "Targeting, next-best-action and visit-preparation tools for sales reps and MSLs." },
  { title: "Turn AI from pilots into adopted tools", text: "Diagnostics, coaching and agents that teams keep using." },
  { title: "Make AI trustworthy in a regulated setting", text: "GDPR and EU AI Act built into the design, with humans approving what the AI writes." },
];

const FEATURED = [
  {
    flagship: true,
    title: "AI assistant for pharma field teams",
    visibility: "Case study · code private",
    text: "A voice assistant that prepares each visit, lets reps rehearse the conversation with a scored debrief, and drafts the visit notes.",
    choices: ["EU data residency", "The AI proposes, the user approves", "Designed for the EU AI Act"],
    impact: null, // TODO(Red)
    stack: "Python · LangGraph · speech-to-text & TTS · open-weight LLMs · Azure",
  },
  {
    title: "Who to visit next",
    visibility: "Case study · code private",
    text: "Scores doctors and pharmacies on value, urgency and proximity so reps know who to visit next.",
    impact: null, // TODO(Red)
    stack: "Python · SQL · PostGIS",
  },
  {
    title: "MSL briefing generator",
    visibility: "Case study · code private",
    text: "Turns project and expert-relationship data into a prioritized weekly brief for Medical Science Liaisons.",
    impact: null, // TODO(Red)
    stack: "Python · PostgreSQL · LLM pipeline",
  },
  {
    title: "AI adoption for a pharma analytics team",
    visibility: "Client project",
    text: "From a first diagnostic to hands-on coaching on six AI-agent projects, then a reusable method to evaluate agents.",
    impact: null, // TODO(Red)
    stack: "Microsoft 365 Copilot · Copilot Studio · Power Automate",
  },
  {
    title: "Data & AI maturity diagnostic",
    visibility: "Consulting offer",
    text: "A 4-pillar, 5-stage model that shows pharma leaders where they stand and what to invest in next.",
    impact: null,
    stack: null,
  },
  {
    title: "Compliance tracking",
    visibility: "Client project",
    text: "A tracker for regulatory transparency declarations that shows, at every step, who needs to act.",
    impact: null,
    stack: null,
  },
];

const NUMBERS = [
  { value: "−64%", label: "inspection testing costs" },
  { value: "+30%", label: "forecast accuracy" },
  { value: "150+", label: "clients served by models in production" },
  { value: "1", label: "patent" },
];

const ROLES = [
  { org: "IRT Jules Verne", role: "R&D Data Scientist · industrial AI", period: "2024 – 2026", line: "Deep learning for ultrasonic inspection, with uncertainty quantification." },
  { org: "Enerfox", role: "R&D Data Scientist · energy", period: "2023 – 2024", line: "Energy forecasting in production and patented load disaggregation." },
  { org: "Research internships", role: "Generative models · reinforcement learning", period: "2021 – 2022", line: "High-resolution image generation and deep RL for autonomous driving." },
];

const SKILLS = [
  { name: "AI & ML", items: ["LLM agents", "Scoring models", "Speech AI", "Generative models"] },
  { name: "Data", items: ["Python", "SQL · PostGIS", "Azure", "Power BI"] },
  { name: "Microsoft AI", items: ["M365 Copilot", "Copilot Studio", "Power Automate"] },
  { name: "Pharma", items: ["Sales force effectiveness", "Open data", "GDPR · EU AI Act"] },
];

const WRITING = [
  { title: "Pharma Open Data: Open Medic, with visualizations", tag: "FR · data.gouv.fr reuse", link: LINKS.medium2 },
  { title: "Pharma Open Data: the French public drug database", tag: "FR · Open data", link: LINKS.medium1 },
];

const ICONS = {
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  medium: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
};

function Icon({ name }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={ICONS[name]} /></svg>;
}

function External({ href, children, className }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function Socials() {
  return (
    <div className="socials">
      <External href={LINKS.linkedin}><Icon name="linkedin" /><span className="sr">LinkedIn</span></External>
      <External href={LINKS.github}><Icon name="github" /><span className="sr">GitHub</span></External>
      <External href={LINKS.medium}><Icon name="medium" /><span className="sr">Medium</span></External>
    </div>
  );
}

function SectionHead({ id, kicker, title }) {
  return (
    <header className="section-head" id={id}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
    </header>
  );
}

function CaseCard({ c }) {
  return (
    <article className={`case${c.flagship ? ' case--flagship' : ''}`}>
      <div className="case-top">
        <span className="badge">{c.visibility}</span>
        {c.flagship && <span className="badge badge--accent">Flagship</span>}
      </div>
      <h3>{c.title}</h3>
      <p className="case-text">{c.text}</p>
      {c.choices && (
        <ul className="choices">
          {c.choices.map(x => <li key={x}>{x}</li>)}
        </ul>
      )}
      {c.impact && <p className="impact">{c.impact}</p>}
      {c.stack && <p className="stack">{c.stack}</p>}
    </article>
  );
}

function App() {
  const [flagship, ...cases] = FEATURED;
  const base = import.meta.env.BASE_URL;

  return (
    <div className="page">
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">Redouane <strong>Bouazza</strong></a>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#open">Open data</a></li>
            <li><a href="#background">Background</a></li>
            <li><a href="#research">Research</a></li>
          </ul>
        </div>
      </nav>

      <main id="top">
        <section className="hero container">
          <div className="hero-text">
            <p className="kicker">Senior Data &amp; AI Solutions · <External href={LINKS.karetis}>Karetis</External> · Lyon</p>
            <h1>Redouane Bouazza</h1>
            <p className="hero-line">Decision intelligence: AI &amp; data for pharma sales performance.</p>
            <p className="tagline">From signal to strategy.</p>
            <p className="hero-lead">AI and data products that help pharma field teams and their managers make better decisions, built to be reliable and compliant.</p>
            <div className="hero-actions">
              <a href="#work" className="btn btn--primary">See the work</a>
              <Socials />
            </div>
          </div>
          <div className="hero-photo">
            <img src={`${base}portfolio/profile.webp`} alt="Portrait of Redouane Bouazza" width="320" height="320" />
          </div>
        </section>

        <section className="container block">
          <div className="outcomes">
            {WHAT_I_DO.map((o, i) => (
              <div key={o.title} className="outcome">
                <span className="outcome-num">0{i + 1}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container block">
          <SectionHead id="work" kicker="Featured work" title="Selected projects" />
          <p className="section-note">Client and company work, shown as case studies. Code is private and clients stay anonymous.</p>
          <CaseCard c={flagship} />
          <div className="case-grid">
            {cases.map(c => <CaseCard key={c.title} c={c} />)}
          </div>
        </section>

        <section className="container block">
          <SectionHead id="open" kicker="Open work" title="French pharma open data" />
          <div className="open-main">
            <div>
              <h3>Pharma Open Data Hub France</h3>
              <p>Analyses of France's public health datasets. The Open Medic analysis is published as a reuse on data.gouv.fr.</p>
            </div>
            <div className="link-list">
              <External href={LINKS.pharmaRepo} className="btn btn--ghost">Code on GitHub</External>
              <External href={LINKS.dataGouv} className="btn btn--ghost">data.gouv.fr reuse</External>
            </div>
          </div>
          <p className="also">Also: an <External href={LINKS.egoDemo}>ego-graph explorer</External> built on Google Suggest.</p>
        </section>

        <section className="container block">
          <SectionHead id="background" kicker="Background" title="From industrial AI to pharma" />
          <div className="numbers">
            {NUMBERS.map(n => (
              <div key={n.label} className="number">
                <span className="number-value">{n.value}</span>
                <span className="number-label">{n.label}</span>
              </div>
            ))}
          </div>
          <div className="roles">
            <div className="role role--current">
              <div className="role-head">
                <h3>Karetis</h3>
                <span className="period">Current role</span>
              </div>
              <p className="role-title">Senior Data &amp; AI Solutions</p>
              <p className="muted">Data and AI lead in a consultancy focused on pharma sales performance.</p>
            </div>
            {ROLES.map(r => (
              <div key={r.org} className="role">
                <div className="role-head">
                  <h3>{r.org}</h3>
                  <span className="period">{r.period}</span>
                </div>
                <p className="role-title">{r.role}</p>
                <p className="muted">{r.line}</p>
              </div>
            ))}
          </div>
          <p className="also">Education: INSA Rouen Normandie (engineering, mathematics) · Université de Rouen Normandie (MSc Data Science &amp; AI).</p>
          <div className="skills">
            {SKILLS.map(s => (
              <div key={s.name} className="skill-group">
                <h4>{s.name}</h4>
                <p>{s.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container block">
          <SectionHead id="research" kicker="Research" title="Trustworthy AI for healthcare" />
          <p className="section-note">Research interest: trustworthy generative AI for medical imaging, applied to the early detection of diabetic retinopathy, and keeping AI compliant once deployed.</p>
        </section>

        <section className="container block">
          <SectionHead kicker="Teaching & writing" title="Sharing what works" />
          <div className="teach">
            <ul className="teach-list">
              <li>Teach Microsoft Copilot and AI-agent evaluation to colleagues</li>
            </ul>
            <div className="writing">
              {WRITING.map(w => (
                <External key={w.link} href={w.link} className="post">
                  <span className="post-tag">{w.tag}</span>
                  <span className="post-title">{w.title}</span>
                </External>
              ))}
            </div>
          </div>
        </section>

        <section className="container block">
          <div className="karetis">
            <div>
              <h2>Working on pharma sales performance?</h2>
              <p>I work with clients through Karetis. For a project, contact the Karetis team.</p>
            </div>
            <External href={LINKS.karetis} className="btn btn--primary">Visit Karetis</External>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Redouane Bouazza · Lyon, France</p>
        <Socials />
      </footer>
    </div>
  );
}

export default App
