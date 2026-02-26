import { useState } from 'react'
import './App.css'

const SOCIAL_LINKS = {
  github: "https://github.com/redouane-b",
  linkedin: "https://www.linkedin.com/in/redouane-b-36446a165/",
  medium: "https://redouaneb.medium.com/",
  email: "mailto:bouazza.re@gmail.com",
};

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      experience: "Expérience",
      realisation: "Projets",
      contact: "Contact"
    },
    hero: {
      hello: "Bonjour",
      im: "Je suis",
      name: "Redouane BOUAZZA",
      subtitle: "AI/ML · Pharma & Healthcare · Lyon, France",
      description: "Je conçois et déploie des <span class='text-highlight'>systèmes d'intelligence décisionnelle</span> — de l'ingestion de données brutes aux modèles ML jusqu'aux interfaces où les humains prennent de vraies décisions.",
      cta_projects: "Mes projets",
      cta_cv: "Me contacter",
      experience_title: "EXPÉRIENCES"
    },
    stats: [
      { id: 1, label: "Années d'expérience", value: "2.5+" },
      { id: 2, label: "Clients déployés", value: "150+" },
      { id: 3, label: "Appels d'offres remportés", value: "150k€" },
      { id: 4, label: "Certifications", value: "5+" }
    ],
    experiences: [
      {
        role: "Ingénieur Data Scientist R&D",
        company: "IRT Jules Verne",
        period: "Mai 2024 – Présent",
        location: "Nantes, France",
        bullets: [
          "Réduction de 64% des coûts de contrôle non destructif par ultrasons via un outil d'aide à la décision (deep learning + traitement du signal)",
          "Computer vision pour la caractérisation de pièces aéronautiques / nucléaires avec quantification d'incertitude",
          "Remporté 2 appels d'offres de recherche pour 150k€ (prospection, rédaction cahier des charges, négociation)"
        ]
      },
      {
        role: "Data Scientist R&D",
        company: "Enerfox (EnergyTech Startup)",
        period: "Mars 2023 – Avril 2024",
        location: "Laval, France",
        bullets: [
          "Modèles de prévision énergétique (LSTM, Transformers) : +30% de précision, déployés sur 150+ clients professionnels avec monitoring/alerting",
          "Outil de diagnostic énergétique automatisé : temps d'analyse réduit de 10-15h à 20 minutes",
          "Algorithme NILM breveté pour la désagrégation énergétique professionnelle",
          "Collaboration directe CEO & Directeur Commercial pour définir KPIs et roadmap produit"
        ]
      },
      {
        role: "Research Assistant",
        company: "Institut Mathématique de Bordeaux",
        period: "Mai – Août 2022",
        location: "Bordeaux, France",
        bullets: [
          "Modèles génératifs profonds (VD-VAE, StyleGAN) pour la synthèse d'images haute résolution photo-réalistes",
          "Manipulation d'espaces latents pour le contrôle sémantique (face editing)"
        ]
      },
      {
        role: "Research Intern",
        company: "ENSET Mohammedia",
        period: "Juin – Août 2021",
        location: "Mohammedia, Maroc",
        bullets: [
          "Modèles de Deep Reinforcement Learning pour la conduite autonome en environnements simulés",
          "Algorithmes génétiques pour l'optimisation combinatoire sur graphes"
        ]
      }
    ],
    skills: {
      title: "COMPÉTENCES TECHNIQUES",
      categories: [
        {
          name: "Machine Learning",
          items: ["Deep Learning", "Time Series", "Computer Vision", "NLP", "Reinforcement Learning", "Signal Processing", "Uncertainty Quantification"]
        },
        {
          name: "Stack Technique",
          items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "SQL", "Git", "Linux", "Docker", "MLflow"]
        },
        {
          name: "Cloud & MLOps",
          items: ["AWS", "GCP", "Azure", "CI/CD", "MLOps", "Monitoring"]
        }
      ]
    },
    projects: {
      title: "RÉALISATIONS PHARES",
      learn_more: "En savoir plus →",
      items: [
        {
          id: 0,
          title: "Pharma Open Data Hub France",
          description: "Pipeline ETL pour les datasets publics de santé français (Open Medic, RPPS, FINESS, Transparence Santé). Analyse et exploration des données pharmaceutiques nationales.",
          tags: ["Python", "ETL", "Healthcare", "Open Data"],
          category: "Data Engineering · Pharma",
          link: "https://redouaneb.medium.com/pharma-open-data-guide-des-sources-publiques-de-donn%C3%A9es-pharmaceutiques-en-france-partie-1-4-4b189e4e9703"
        },
        {
          id: 1,
          title: "Inspection Industrielle par Ultrasons",
          description: "Système d'aide à la décision end-to-end : acquisition signal → détection deep learning → recommandations opérateur. Réduction de 64% des coûts de contrôle non destructif.",
          tags: ["Deep Learning", "Signal Processing", "PyTorch", "NDT"],
          category: "Industrial AI · Computer Vision"
        },
        {
          id: 2,
          title: "Prévision Énergétique LSTM / Transformers",
          description: "Modèles de forecasting state-of-the-art pour la production solaire et la consommation. +30% de précision, déployés en production avec monitoring pour 150+ clients.",
          tags: ["PyTorch", "LSTM", "Transformers", "MLOps", "Time Series"],
          category: "Time Series Forecasting"
        },
        {
          id: 3,
          title: "Diagnostic Énergétique Automatisé",
          description: "Outil automatisé transformant les données en leads qualifiés et recommandations actionnables pour les contrats de performance énergétique. Analyse : 10-15h → 20 min.",
          tags: ["Python", "Pandas", "Data Pipeline", "Analytics"],
          category: "Energy Analytics"
        },
        {
          id: 4,
          title: "Algorithme NILM Breveté",
          description: "Adaptation d'algorithmes NILM (Non-Intrusive Load Monitoring) pour la désagrégation énergétique en milieu professionnel. Déposé comme brevet par Enerfox.",
          tags: ["Signal Processing", "Python", "NILM", "Patent"],
          category: "Signal Processing · Energy"
        },
        {
          id: 5,
          title: "Ego Graph via Google Suggest API",
          description: "Construction d'un ego graph exploitant l'API Google Suggest pour visualiser les relations sémantiques autour d'un concept clé.",
          tags: ["Python", "Graph", "NLP", "API"],
          category: "Data Visualization · NLP",
          link: "https://redouaneb.medium.com/tutoriel-comment-construire-un-ego-graph-en-utilisant-lapi-google-suggest-0528210a498d"
        }
      ]
    },
    blog: {
      title: "DERNIERS ARTICLES",
      read_more: "Lire sur Medium →",
      items: [
        {
          title: "Pharma Open Data: Guide des sources publiques de données pharmaceutiques en France — Partie 1/4",
          link: "https://redouaneb.medium.com/pharma-open-data-guide-des-sources-publiques-de-donn%C3%A9es-pharmaceutiques-en-france-partie-1-4-4b189e4e9703",
          tag: "Healthcare · Open Data"
        },
        {
          title: "Comment construire un Ego Graph en utilisant l'API Google Suggest",
          link: "https://redouaneb.medium.com/tutoriel-comment-construire-un-ego-graph-en-utilisant-lapi-google-suggest-0528210a498d",
          tag: "NLP · Graph"
        }
      ]
    },
    contact: {
      title: "CONSTRUISONS QUELQUE CHOSE ENSEMBLE",
      description: "Je cherche des opportunités en <span class='text-highlight'>Data Science</span>, <span class='text-highlight'>ML Engineering</span> et <span class='text-highlight'>Decision Intelligence</span> dans la pharma, la santé ou l'industrie."
    },
    footer: "© 2026 Redouane BOUAZZA · Decision Intelligence Systems"
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      realisation: "Projects",
      contact: "Contact"
    },
    hero: {
      hello: "Hello",
      im: "I'm",
      name: "Redouane BOUAZZA",
      subtitle: "AI/ML · Pharma & Healthcare · Lyon, France",
      description: "I design and deploy <span class='text-highlight'>decision intelligence systems</span> — from raw data ingestion to ML models to the interfaces where humans make real decisions.",
      cta_projects: "My projects",
      cta_cv: "Contact me",
      experience_title: "EXPERIENCES"
    },
    stats: [
      { id: 1, label: "Years of experience", value: "2.5+" },
      { id: 2, label: "Clients deployed", value: "150+" },
      { id: 3, label: "Contracts won", value: "€150k" },
      { id: 4, label: "Certifications", value: "5+" }
    ],
    experiences: [
      {
        role: "R&D Data Scientist Engineer",
        company: "IRT Jules Verne",
        period: "May 2024 – Present",
        location: "Nantes, France",
        bullets: [
          "64% reduction in ultrasonic NDT costs via a decision support tool (deep learning + signal processing)",
          "Computer vision for aeronautical / nuclear part characterization with uncertainty quantification",
          "Won 2 research contracts totaling €150k (prospecting, specs writing, negotiation)"
        ]
      },
      {
        role: "R&D Data Scientist",
        company: "Enerfox (EnergyTech Startup)",
        period: "March 2023 – April 2024",
        location: "Laval, France",
        bullets: [
          "Energy forecasting models (LSTM, Transformers): +30% accuracy, deployed for 150+ professional clients with monitoring/alerting",
          "Automated energy diagnostic tool: analysis time reduced from 10-15h to 20 minutes",
          "Patented NILM algorithm for professional energy disaggregation",
          "Direct collaboration with CEO & Sales Director to define KPIs and product roadmap"
        ]
      },
      {
        role: "Research Assistant",
        company: "Institut Mathématique de Bordeaux",
        period: "May – August 2022",
        location: "Bordeaux, France",
        bullets: [
          "Deep generative models (VD-VAE, StyleGAN) for photorealistic high-resolution image synthesis",
          "Latent space manipulation for semantic control (face editing)"
        ]
      },
      {
        role: "Research Intern",
        company: "ENSET Mohammedia",
        period: "June – August 2021",
        location: "Mohammedia, Morocco",
        bullets: [
          "Deep Reinforcement Learning models for autonomous driving in simulated environments",
          "Genetic algorithms for combinatorial optimization on graphs"
        ]
      }
    ],
    skills: {
      title: "TECHNICAL SKILLS",
      categories: [
        {
          name: "Machine Learning",
          items: ["Deep Learning", "Time Series", "Computer Vision", "NLP", "Reinforcement Learning", "Signal Processing", "Uncertainty Quantification"]
        },
        {
          name: "Tech Stack",
          items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "SQL", "Git", "Linux", "Docker", "MLflow"]
        },
        {
          name: "Cloud & MLOps",
          items: ["AWS", "GCP", "Azure", "CI/CD", "MLOps", "Monitoring"]
        }
      ]
    },
    projects: {
      title: "KEY PROJECTS",
      learn_more: "Learn more →",
      items: [
        {
          id: 0,
          title: "Pharma Open Data Hub France",
          description: "ETL pipeline for French public health datasets (Open Medic, RPPS, FINESS, Transparence Santé). Exploration and analysis of national pharmaceutical data.",
          tags: ["Python", "ETL", "Healthcare", "Open Data"],
          category: "Data Engineering · Pharma",
          link: "https://redouaneb.medium.com/pharma-open-data-guide-des-sources-publiques-de-donn%C3%A9es-pharmaceutiques-en-france-partie-1-4-4b189e4e9703"
        },
        {
          id: 1,
          title: "Ultrasonic Industrial Inspection",
          description: "End-to-end decision support system: signal acquisition → deep learning detection → operator recommendations. 64% reduction in non-destructive testing costs.",
          tags: ["Deep Learning", "Signal Processing", "PyTorch", "NDT"],
          category: "Industrial AI · Computer Vision"
        },
        {
          id: 2,
          title: "LSTM / Transformer Energy Forecasting",
          description: "State-of-the-art forecasting models for solar production and energy consumption. +30% accuracy, deployed in production with monitoring for 150+ professional clients.",
          tags: ["PyTorch", "LSTM", "Transformers", "MLOps", "Time Series"],
          category: "Time Series Forecasting"
        },
        {
          id: 3,
          title: "Automated Energy Diagnostic Tool",
          description: "Automated diagnostic tool turning data into qualified leads and actionable recommendations for energy performance contracts. Analysis time: 10-15h → 20 min.",
          tags: ["Python", "Pandas", "Data Pipeline", "Analytics"],
          category: "Energy Analytics"
        },
        {
          id: 4,
          title: "Patented NILM Algorithm",
          description: "Adaptation of NILM (Non-Intrusive Load Monitoring) algorithms for professional energy disaggregation. Filed as a patent by Enerfox.",
          tags: ["Signal Processing", "Python", "NILM", "Patent"],
          category: "Signal Processing · Energy"
        },
        {
          id: 5,
          title: "Ego Graph via Google Suggest API",
          description: "Construction of an ego graph using the Google Suggest API to visualize semantic relationships around a key concept.",
          tags: ["Python", "Graph", "NLP", "API"],
          category: "Data Visualization · NLP",
          link: "https://redouaneb.medium.com/tutoriel-comment-construire-un-ego-graph-en-utilisant-lapi-google-suggest-0528210a498d"
        }
      ]
    },
    blog: {
      title: "LATEST ARTICLES",
      read_more: "Read on Medium →",
      items: [
        {
          title: "Pharma Open Data: Guide to French public pharmaceutical data sources — Part 1/4",
          link: "https://redouaneb.medium.com/pharma-open-data-guide-des-sources-publiques-de-donn%C3%A9es-pharmaceutiques-en-france-partie-1-4-4b189e4e9703",
          tag: "Healthcare · Open Data"
        },
        {
          title: "How to build an Ego Graph using the Google Suggest API",
          link: "https://redouaneb.medium.com/tutoriel-comment-construire-un-ego-graph-en-utilisant-lapi-google-suggest-0528210a498d",
          tag: "NLP · Graph"
        }
      ]
    },
    contact: {
      title: "LET'S BUILD SOMETHING TOGETHER",
      description: "I'm looking for opportunities in <span class='text-highlight'>Data Science</span>, <span class='text-highlight'>ML Engineering</span> and <span class='text-highlight'>Decision Intelligence</span> in pharma, healthcare or industry."
    },
    footer: "© 2026 Redouane BOUAZZA · Decision Intelligence Systems"
  }
}

function App() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];

  return (
    <div className="portfolio">
      <nav>
        <div className="container nav-content">
          <div className="logo-text">Redouane<span style={{ color: 'var(--accent-secondary)', fontWeight: 400 }}>.Portfolio</span></div>
          <ul className="nav-links">
            <li><a href="#home">{t.nav.home}</a></li>
            <li><a href="#experience">{t.nav.experience}</a></li>
            <li><a href="#realisation">{t.nav.realisation}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
            <li className="lang-switcher" style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
              <button onClick={() => setLang('fr')} style={{ color: lang === 'fr' ? 'var(--accent-primary)' : 'white', fontWeight: lang === 'fr' ? '800' : '400', background: 'none', border: 'none', cursor: 'pointer' }}>FR</button>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <button onClick={() => setLang('en')} style={{ color: lang === 'en' ? 'var(--accent-primary)' : 'white', fontWeight: lang === 'en' ? '800' : '400', background: 'none', border: 'none', cursor: 'pointer' }}>EN</button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1 className="hero-name-capture">
                Redouane <span className="blue-text-name">BOUAZZA</span>
              </h1>

              <h2 className="hero-headline-capture">
                <span className="text-white">Decision</span> <br />
                <span className="text-blue-accent">Intelligence</span>
              </h2>

              <p className="hero-subtitle-capture">
                {t.hero.subtitle}
              </p>

              <div className="hero-description-box-capture">
                <p dangerouslySetInnerHTML={{ __html: t.hero.description }}></p>
              </div>

              <div className="cta-row-capture">
                <a href="#realisation" className="btn-projects-capture">{t.hero.cta_projects}</a>
                <a href={SOCIAL_LINKS.email} className="btn-cv-capture">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  {t.hero.cta_cv}
                </a>

                <div className="social-links-capture">
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" title="Medium">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-image-pro">
              <div className="image-frame-pro">
                <img src="image.png" alt="Redouane BOUAZZA" className="main-profile-img" />
                <div className="floating-badge-emoji e1">🤖</div>
                <div className="floating-badge-emoji e2">📊</div>
                <div className="floating-badge-emoji e3">🧠</div>
                <div className="floating-badge-emoji e4">⚡</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container" style={{ marginBottom: '4rem' }}>
          <div className="stats-grid">
            {t.stats.map(stat => (
              <div key={stat.id} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="container" style={{ marginBottom: '6rem' }}>
          <div className="section-header-centered">
            <div className="pill-title">
              <span className="pill-icon">✨</span>
              {t.hero.experience_title}
            </div>
          </div>
          <div className="experience-timeline">
            {t.experiences.map((exp, idx) => (
              <div key={idx} className="exp-card">
                <div className="exp-card-left">
                  <div className="exp-period-badge">{exp.period}</div>
                  <div className="exp-location">{exp.location}</div>
                </div>
                <div className="exp-card-connector">
                  <div className="exp-dot"></div>
                  <div className="exp-line"></div>
                </div>
                <div className="exp-card-right">
                  <div className="exp-company">{exp.company}</div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <ul className="exp-bullets">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="container" style={{ marginBottom: '6rem' }}>
          <div className="section-header-centered">
            <div className="pill-title">
              <span className="pill-icon">⚡</span>
              {t.skills.title}
            </div>
          </div>
          <div className="skills-grid">
            {t.skills.categories.map((cat, i) => (
              <div key={i} className="skills-category">
                <h4 className="skills-cat-title">{cat.name}</h4>
                <div className="skills-tags">
                  {cat.items.map((item, j) => (
                    <span key={j} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="realisation" className="container" style={{ marginBottom: '6rem' }}>
          <div className="section-header-centered">
            <div className="pill-title">
              <span className="pill-icon">🚀</span>
              {t.projects.title}
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {t.projects.items.map(project => (
              <div key={project.id} className="project-card" style={{
                background: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  background: 'rgba(0, 123, 255, 0.1)',
                  color: 'var(--accent-primary)',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>{project.category}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">#{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>{t.projects.learn_more}</a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="container" style={{ marginBottom: '6rem' }}>
          <div className="section-header-centered">
            <div className="pill-title">
              <span className="pill-icon">✍️</span>
              {t.blog.title}
            </div>
          </div>
          <div className="blog-grid">
            {t.blog.items.map((post, i) => (
              <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" className="blog-card">
                <span className="blog-tag">{post.tag}</span>
                <h3 className="blog-title">{post.title}</h3>
                <span className="blog-read-more">{t.blog.read_more}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container" style={{ padding: '100px 0' }}>
          <div className="contact-card">
            <div className="section-header-centered">
              <div className="pill-title">
                <span className="pill-icon">📬</span>
                {t.contact.title}
              </div>
            </div>
            <p
              style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: '1.8' }}
              dangerouslySetInnerHTML={{ __html: t.contact.description }}
            ></p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-circle" style={{ width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-circle" style={{ width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" className="social-circle" style={{ width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.email} className="social-circle" style={{ width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
            </div>
            <a href={SOCIAL_LINKS.email} className="btn-projects">
              {lang === 'fr' ? 'Envoyer un message' : 'Send a message'}
            </a>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)' }}>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
