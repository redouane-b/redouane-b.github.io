import './App.css'

/*
 * Content for redouane-b.github.io
 *
 * Public page: no client names, client staff, internal infrastructure, schemas,
 * pricing or personal-life details. Client work is described anonymously.
 *
 * `impact: null` = no number yet. Fill in a real figure (e.g. "Visit prep from X to Y min")
 * and it appears on the card; null shows nothing. Never invent numbers.
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
  egoPost: "https://redouaneb.medium.com/tutoriel-comment-construire-un-ego-graph-en-utilisant-lapi-google-suggest-0528210a498d",
  egoDemo: "https://ego-graph.vercel.app",
  egoRepo: "https://github.com/redouane-b/ego_graph_generator",
};

const WHAT_I_DO = [
  {
    title: "Help field teams decide who to see and what to say",
    text: "Targeting, next-best-action and visit-preparation tools that sales reps and MSLs use in their day, not dashboards they have to go looking for.",
  },
  {
    title: "Turn AI from pilots into adopted tools",
    text: "Maturity diagnostics, hands-on coaching and agents that pharma teams keep using after the workshop ends.",
  },
  {
    title: "Make AI trustworthy in a regulated setting",
    text: "GDPR, EU AI Act and transparency rules built into the design, with humans approving what the AI writes.",
  },
];

const FEATURED = [
  {
    flagship: true,
    name: "Kairos",
    note: "καιρός: the opportune moment",
    title: "Voice AI assistant for pharma field teams",
    visibility: "Karetis product · case study, code private",
    problem: "Medical reps and MSLs need to prepare visits, rehearse conversations and log notes without spending more time in the CRM.",
    approach: "Kairos builds a pre-visit briefing, runs a roleplay of the doctor conversation with a scored debrief, and drafts the visit notes. Earlier phases added batch next-best-action scoring and project tracking.",
    choices: [
      "EU data residency as a hard constraint",
      "Propose / dispose: the AI proposes, nothing is saved until the user approves",
      "AI-generated audio is watermarked (EU AI Act, Art. 50)",
      "Compliance in the content: competitors appear only as objections, and denigration blocks the debrief score",
      "A separate MSL mode with no promotional content",
    ],
    impact: null, // TODO(Red): e.g. "Visit prep from X to Y min" or "N reps in pilot"
    stack: "Python · FastAPI · LangGraph · faster-whisper · open-weight LLMs · Chatterbox TTS · Azure",
  },
  {
    title: "Who to visit next: HCP prioritization",
    visibility: "Case study · code private",
    problem: "Which doctors and pharmacies should a rep visit next, and in what order?",
    approach: "A three-part score. Value covers territory performance and market share, urgency covers time since the last visit and the gap to the call plan, and efficiency uses proximity as a routing anchor. The scores drive the prioritization maps and visit lists reps work from in the SFE platform.",
    impact: null, // TODO(Red)
    stack: "Python · SQL · PostGIS",
  },
  {
    title: "MSL briefing generator",
    visibility: "Case study · code private",
    problem: "Medical Science Liaisons juggle many projects and expert relationships and need to know what matters this week.",
    approach: "Reads the project hierarchy, groups projects by urgency and priority, and writes a briefing. It covers key indicators, budget at risk per objective, a top-5 action list tied to upcoming visits, late projects in three buckets, and where each expert relationship stands.",
    impact: null, // TODO(Red)
    stack: "Python · PostgreSQL · multi-step LLM pipeline",
  },
  {
    title: "AI adoption program for a pharma analytics team",
    visibility: "Client engagement · anonymized",
    problem: "A global biopharma's French Business Analytics team wanted to use AI in its work but didn't know where to start.",
    approach: "A diagnostic, then an awareness workshop, use-case demonstrators and per-project coaching across six Copilot-agent projects, such as a compliance-checking agent, an automated insights engine and a shared prompt library. This led to a recurring \"AI flash\" news-and-demo session and a method for evaluating and scoring agents, now packaged as a reusable offer.",
    impact: null, // TODO(Red): e.g. "N people coached, N agents in use"
    stack: "Microsoft 365 Copilot · Copilot Studio · Power Automate",
  },
  {
    title: "Data & AI maturity diagnostic",
    visibility: "Consulting offer · Karetis",
    problem: "Pharma leaders need to know where they stand on data and AI before deciding what to invest in.",
    approach: "A model with 4 pillars and 5 stages, built on a review of the Gartner, MIT CISR, McKinsey, Deloitte and CMMI frameworks. The pillars are decision & analytics, data foundation, process & automation, and organization & culture. It comes as a diagnostic and roadmap, a diagnostic plus a proof of concept, or a full transformation.",
    ladder: ["Artisanal", "Exploratory", "Industrialized", "Generalized", "Native"],
    impact: null,
    stack: null,
  },
  {
    title: "Transparency-declaration tracking",
    visibility: "Client engagement · anonymized",
    problem: "A Japanese pharma affiliate's operations team had to follow regulatory transparency declarations as they passed between many people.",
    approach: "Discovery with the team, then a tracker that follows each declaration through 16 milestones and always shows whose court the ball is in. It was built as an Excel/VBA workbook and validated on synthetic data.",
    impact: null,
    stack: "Excel · VBA",
  },
];

const ALSO = "Also: Helm, a task agent inside Microsoft Teams (Power Automate, AI Builder), plus tooling that turns platform configuration into Excel, planning mock-ups and branded slide decks.";

const TRACK_RECORD = {
  numbers: [
    { value: "−64%", label: "inspection testing costs" },
    { value: "+30%", label: "forecast accuracy" },
    { value: "150+", label: "clients served by models in production" },
    { value: "1", label: "patent (load disaggregation)" },
  ],
  roles: [
    {
      org: "IRT Jules Verne",
      role: "R&D Data Scientist · industrial AI",
      period: "2024 – 2026",
      bullets: [
        "Decision aid for ultrasonic inspection, from signal acquisition to deep learning detection to operator recommendations. It cut testing costs by 64%.",
        "Computer vision for aeronautic and nuclear part characterization, with uncertainty quantification",
        "Won 2 research contracts worth €150k",
      ],
    },
    {
      org: "Enerfox",
      role: "R&D Data Scientist · energy",
      period: "2023 – 2024",
      bullets: [
        "Solar production and consumption forecasting (LSTM, Transformers): +30% accuracy, in production for 150+ business clients with monitoring",
        "Automated energy diagnostic: analysis time cut from 10–15 h to 20 min",
        "Load disaggregation on electrical signals (NILM), patented by the company",
      ],
    },
    {
      org: "Research internships",
      role: "Institut de Mathématiques de Bordeaux · ENSET Mohammedia",
      period: "2021 – 2022",
      bullets: [
        "High-resolution generative models (VD-VAE, StyleGAN) with latent-space editing",
        "Deep reinforcement learning for autonomous driving in simulation",
      ],
    },
  ],
};

const SKILLS = [
  { name: "AI & ML", items: ["LLM orchestration (LangGraph)", "Agent design & evaluation", "Scoring models", "Speech (Whisper, TTS)", "Generative models", "Reinforcement learning", "Uncertainty quantification"] },
  { name: "Data", items: ["Python (pandas, Polars)", "SQL · PostgreSQL / PostGIS", "Azure", "Power BI", "Docker"] },
  { name: "Microsoft AI", items: ["M365 Copilot", "Copilot Studio", "Power Automate", "AI Builder", "Azure AI Foundry", "Semantic Kernel"] },
  { name: "Pharma & consulting", items: ["Sales force effectiveness", "Targeting & segmentation", "Next-best-action", "French pharma open data", "GDPR · EU AI Act", "AI maturity & adoption"] },
];

const WRITING = [
  { title: "Pharma Open Data, part 2: Open Medic, drug consumption in France, with visualizations", tag: "FR · data.gouv.fr reuse", link: LINKS.medium2 },
  { title: "Pharma Open Data, part 1: the French public drug database (BDPM)", tag: "FR · Open data", link: LINKS.medium1 },
  { title: "Building an ego graph with the Google Suggest API", tag: "FR · Graphs", link: LINKS.egoPost },
];

const ICONS = {
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  medium: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
};

function Icon({ name }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={ICONS[name]} /></svg>
  );
}

function External({ href, children, className }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
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
      {c.name && <p className="case-name">{c.name} <span>{c.note}</span></p>}
      <h3>{c.title}</h3>
      <dl className="case-body">
        <dt>Problem</dt><dd>{c.problem}</dd>
        <dt>Approach</dt><dd>{c.approach}</dd>
      </dl>
      {c.ladder && (
        <ol className="ladder" aria-label="Maturity stages">
          {c.ladder.map(step => <li key={step}>{step}</li>)}
        </ol>
      )}
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
        {/* Hero */}
        <section className="hero container">
          <div className="hero-text">
            <p className="kicker">Senior Data &amp; AI Solutions · <External href={LINKS.karetis}>Karetis</External> · Lyon</p>
            <h1>Redouane “Red” Bouazza</h1>
            <p className="hero-line">Decision intelligence: AI &amp; data for pharma sales performance.</p>
            <p className="tagline">From signal to strategy.</p>
            <p className="hero-lead">
              I decide what to build and why, then build it: AI and data products that help pharma field teams and their managers
              make better calls, designed to be reliable, auditable and compliant from day one.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn--primary">See the work</a>
              <div className="socials">
                <External href={LINKS.linkedin}><Icon name="linkedin" /><span className="sr">LinkedIn</span></External>
                <External href={LINKS.github}><Icon name="github" /><span className="sr">GitHub</span></External>
                <External href={LINKS.medium}><Icon name="medium" /><span className="sr">Medium</span></External>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <img src={`${base}portfolio/profile.webp`} alt="Portrait of Redouane Bouazza" width="320" height="320" />
          </div>
        </section>

        {/* What I do */}
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

        {/* Featured work */}
        <section className="container block">
          <SectionHead id="work" kicker="Featured work" title="Problem, approach, outcome" />
          <p className="section-note">Most of this work belongs to Karetis or its clients, so these are case studies with the code kept private and the clients anonymized.</p>
          <CaseCard c={flagship} />
          <div className="case-grid">
            {cases.map(c => <CaseCard key={c.title} c={c} />)}
          </div>
          <p className="also">{ALSO}</p>
        </section>

        {/* Open work */}
        <section className="container block">
          <SectionHead id="open" kicker="Open work" title="French pharma open data" />
          <div className="open-main">
            <div>
              <h3>Pharma Open Data Hub France</h3>
              <p>
                Pipelines and analyses of France's public health datasets: the drug database (BDPM), Open Medic reimbursements,
                RPPS, FINESS and Transparence Santé. The Open Medic analysis is published as an official reuse on data.gouv.fr.
              </p>
              <p className="muted">Next: mapping these datasets to sales-force-effectiveness questions such as targeting, segmentation and pricing.</p>
            </div>
            <div className="link-list">
              <External href={LINKS.pharmaRepo} className="btn btn--ghost">Code on GitHub</External>
              <External href={LINKS.dataGouv} className="btn btn--ghost">data.gouv.fr reuse</External>
              <External href={LINKS.medium2} className="btn btn--ghost">Article series</External>
            </div>
          </div>
          <p className="also">
            Smaller: an <External href={LINKS.egoDemo}>ego-graph explorer</External> built on Google Suggest
            (<External href={LINKS.egoRepo}>code</External>).
          </p>
        </section>

        {/* Background */}
        <section className="container block">
          <SectionHead id="background" kicker="Background" title="From industrial AI to pharma" />
          <p className="section-note">
            Before pharma, I worked on industrial inspection, energy and research. The common thread is uncertainty and trust:
            making models reliable enough that people act on them.
          </p>
          <div className="numbers">
            {TRACK_RECORD.numbers.map(n => (
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
              <p className="muted">
                A boutique consultancy in pharma sales force effectiveness, data and AI. I lead the firm's data and AI work,
                from client diagnostics and coaching to products such as Kairos.
              </p>
            </div>
            {TRACK_RECORD.roles.map(r => (
              <div key={r.org} className="role">
                <div className="role-head">
                  <h3>{r.org}</h3>
                  <span className="period">{r.period}</span>
                </div>
                <p className="role-title">{r.role}</p>
                <ul>{r.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="also">Education: engineering degree in mathematics, INSA Rouen Normandie · Master's in Data Science &amp; AI, Université de Rouen Normandie.</p>
          <div className="skills">
            {SKILLS.map(s => (
              <div key={s.name} className="skill-group">
                <h4>{s.name}</h4>
                <p>{s.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="container block">
          <SectionHead id="research" kicker="Research" title="Trustworthy AI for healthcare" />
          <div className="research">
            <div>
              <p>
                <strong>Doctorate (in preparation)</strong> with ENSET Mohammedia, Université Hassan II de Casablanca, as a part-time thesis by publication.
                The subject is a unified generative-AI framework to synthesize, enhance and interpret medical images, applied to
                the early detection of diabetic retinopathy.
              </p>
              <p>
                My angle is AI that stays trustworthy once deployed. That means monitoring after deployment ("algorithmovigilance"),
                conformity built into the design rather than documented afterwards, and the overlap between the AI Act, the MDR,
                HAS and CNIL requirements.
              </p>
            </div>
            <div className="interests">
              <h4>Longer-term interests</h4>
              <p>Multi-agent reinforcement learning · Explainable AI (Shapley values) · Model alignment · Bio-inspired algorithms</p>
            </div>
          </div>
        </section>

        {/* Teaching & writing */}
        <section className="container block">
          <SectionHead kicker="Teaching & writing" title="Sharing what works" />
          <div className="teach">
            <ul className="teach-list">
              <li>Teach an internal Microsoft Copilot course to colleagues</li>
              <li>Building a course on scoring and evaluating AI agents</li>
              <li>Supervising a Data &amp; AI intern from January 2027</li>
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

        {/* Working together: via Karetis */}
        <section className="container block">
          <div className="karetis">
            <div>
              <h2>Working on pharma sales performance?</h2>
              <p>I work with clients through Karetis, a consultancy in sales force effectiveness, data and AI for pharma. For a project, contact the Karetis team.</p>
            </div>
            <External href={LINKS.karetis} className="btn btn--primary">Visit Karetis</External>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Redouane Bouazza · Lyon, France</p>
        <div className="socials">
          <External href={LINKS.linkedin}><Icon name="linkedin" /><span className="sr">LinkedIn</span></External>
          <External href={LINKS.github}><Icon name="github" /><span className="sr">GitHub</span></External>
          <External href={LINKS.medium}><Icon name="medium" /><span className="sr">Medium</span></External>
        </div>
      </footer>
    </div>
  );
}

export default App
