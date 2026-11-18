'use client';

import { useEffect, useState } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Orbit,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  Workflow,
  X,
  Youtube,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import type { Project } from '@/data/portfolio';
import {
  achievements,
  careerTimeline,
  certifications,
  education,
  experience,
  personalInfo,
  projects,
  siteConfig,
  skills,
  socialLinks,
} from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
  credly: Award,
  code: Code2,
  ai: Orbit,
  openai: Bot,
  cloud: Cloud,
  automation: Workflow,
  microsoft: PanelsTopLeft,
  database: Database,
  tools: Terminal,
  trophy: Trophy,
  sparkles: Sparkles,
  bot: Bot,
  layers: Layers3,
  briefcase: BriefcaseBusiness,
  zap: Zap,
  award: Award,
};

function SocialGlyph({ type, size = 18 }: { type: string; size?: number }) {
  if (type === 'x') return <span className="x-glyph" aria-hidden="true">𝕏</span>;
  const Icon = iconMap[type] || ExternalLink;
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}

type ExternalAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function ExternalAnchor({ href, children, className = '', ...props }: ExternalAnchorProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props} className={className}>
      {children}
    </a>
  );
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 19 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -35px 0px' }}
      transition={{ duration: reducedMotion ? 0 : 0.62, ease: [0.2, 0.72, 0.2, 1], delay: reducedMotion ? 0 : delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, children, number }: { eyebrow: string; title: ReactNode; children?: ReactNode; number?: string }) {
  return (
    <div className="section-heading">
      <div className="section-heading__kicker">
        {number && <span className="section-number">{number}</span>}
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Header({ progress }: { progress: number }) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vikas Gupta, home">
          <span className="brand-mark">VG</span>
          <span className="brand-wordmark">VIKAS<span>GUPTA</span></span>
        </a>

        <nav id="mobile-navigation" className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {siteConfig.navigationItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <ThemeIcon size={17} />
          </button>
          <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
    </>
  );
}

function Hero() {
  const heroSocials = socialLinks.filter((item) => ['LinkedIn', 'GitHub'].includes(item.name));
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />
      <div className="hero-copy">
        <Reveal>
          <div className="availability"><span className="availability-dot" /> AI adoption · enterprise systems · intelligent automation</div>
          <p className="hero-org"><span className="org-mark">H</span> {personalInfo.company}<span className="org-separator">/</span>{personalInfo.organization}</p>
          <h1 id="hero-title">{personalInfo.displayName}<span className="hero-period">.</span></h1>
          <p className="hero-role">Forward Deployment Engineer <span>·</span> AI Developer</p>
          <p className="hero-headline">{personalInfo.heroHeadline}</p>
          <div className="hero-meta">
            <span><MapPin size={15} /> {personalInfo.location}</span>
            <span className="meta-divider" />
            <span><BriefcaseBusiness size={15} /> {personalInfo.experience} professional experience</span>
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">Explore projects <ArrowDownRight size={17} /></a>
            <a className="button button--secondary" href={`mailto:${personalInfo.email}`}>Get in touch <ArrowUpRight size={16} /></a>
            {personalInfo.resumeUrl ? (
              <a className="button button--resume" href={personalInfo.resumeUrl} download>
                Download resume <ArrowDown size={16} />
              </a>
            ) : (
              <button className="button button--resume" type="button" disabled title="Resume PDF has not been provided">
                Download resume <ArrowDown size={16} /> <span className="button-note">PDF not provided</span>
              </button>
            )}
          </div>
          <div className="hero-socials" aria-label="Professional profiles">
            {heroSocials.map((item) => (
              <ExternalAnchor className="hero-social-link" href={item.url} key={item.name} aria-label={item.name} title={item.name}>
                <SocialGlyph type={item.icon} size={18} />
              </ExternalAnchor>
            ))}
            <span className="hero-social-label">Connect with me</span>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero-visual-wrap" delay={140}>
        <div className="hero-visual">
          <div className="visual-topline"><span>PROFILE / 001</span><span className="visual-live"><i /> OPEN TO IDEAS</span></div>
          <div className="portrait-placeholder" role="img" aria-label="Portrait of Vikas Gupta">
            <div className="portrait-ring portrait-ring--outer" />
            <div className="portrait-ring portrait-ring--inner" />
            <div className="portrait-glow" />
            <img
              className="portrait-photo"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${personalInfo.photoUrl}`}
              alt=""
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <span className="portrait-caption">VIKAS GUPTA · INDIA</span>
          </div>
          <div className="visual-bottomline">
            <div><span className="visual-label">FOCUS</span><strong>Applied AI<br />for real workflows</strong></div>
            <div className="visual-code">AI<span>_</span>01<br />FDE<span>_</span>IN</div>
          </div>
          <div className="orbit-tag orbit-tag--top"><Orbit size={15} /> Agentic systems</div>
          <div className="orbit-tag orbit-tag--bottom"><Sparkles size={15} /> Enterprise AI</div>
        </div>
      </Reveal>
      <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={15} /></a>
    </section>
  );
}

function About() {
  const summary = personalInfo.summary.split('\n\n');
  return (
    <section className="section-shell section-block" id="about">
      <div className="about-layout">
        <Reveal>
          <SectionHeading eyebrow="A little about me" title={<>Where engineering<br />meets adoption.</>} number="01" />
          <div className="about-body">
            {summary.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <a className="text-link" href="#experience">Explore my experience <ArrowRight size={16} /></a>
        </Reveal>
        <Reveal className="about-aside" delay={100}>
          <div className="about-fact about-fact--primary">
            <span className="fact-index">01 / EXPERIENCE</span>
            <strong>3<span>+</span></strong>
            <p>years building and supporting enterprise software, automation, and AI-powered solutions</p>
          </div>
          <div className="about-fact">
            <span className="fact-index">02 / CURRENT FOCUS</span>
            <div className="fact-icon"><Orbit size={20} /></div>
            <h3>Enterprise AI adoption</h3>
            <p>Turning emerging AI capabilities into useful, supported workflows for teams.</p>
          </div>
          <div className="about-fact about-fact--wide">
            <span className="fact-index">03 / BASED IN</span>
            <p className="location-value"><MapPin size={18} /> {personalInfo.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell section-block section-block--tint" id="experience">
      <Reveal>
        <SectionHeading eyebrow="Work experience" title="Building with teams,\nshipping with purpose." number="02">
          Professional roles and focus areas, presented without unprovided dates or client details.
        </SectionHeading>
      </Reveal>
      <div className="experience-list">
        {experience.map((item, index) => (
          <Reveal key={item.role} delay={index * 90}>
            <article className="experience-card">
              <div className="experience-marker"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div><span className="eyebrow-label">{item.status}</span><h3>{item.role}</h3></div>
                  <span className="company-label">{item.company}</span>
                </div>
                {item.organization && <p className="experience-org">{item.organization}</p>}
                <p className="experience-summary">{item.summary}</p>
                <div className="focus-list" aria-label="Role focus areas">
                  {item.focus.map((focus) => <span key={focus}><Check size={13} />{focus}</span>)}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell section-block" id="skills">
      <Reveal>
        <SectionHeading eyebrow="Technical toolkit" title="A connected set of skills." number="03">
          Tools and disciplines across AI, development, cloud, automation, and enterprise platforms.
        </SectionHeading>
      </Reveal>
      <div className="skills-grid">
        {skills.map((group, index) => {
          const Icon = iconMap[group.icon] || Code2;
          return (
            <Reveal key={group.category} delay={(index % 3) * 70}>
              <article className="skill-card">
                <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">SKILLSET / {String(index + 1).padStart(2, '0')}</span></div>
                <h3>{group.category}</h3>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const visualIcons = [Orbit, Workflow, Sparkles, Bot];
  const VisualIcon = visualIcons[index % visualIcons.length];
  return (
    <div className={`project-visual project-visual--${index + 1}`} aria-hidden="true">
      <div className="project-visual-grid" />
      <span className="project-visual-index">{project.number} / CASE STUDY</span>
      <div className="project-visual-icon"><VisualIcon size={42} strokeWidth={1.15} /></div>
      <div className="project-visual-lines"><i /><i /><i /></div>
      <span className="project-visual-mark">VG<span>.</span></span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const allTags = project.technologies?.length
    ? project.technologies
    : project.integrations || [];
  return (
    <Reveal className={`project-card-wrap project-card-wrap--${index + 1}`} delay={(index % 2) * 85}>
      <article className="project-card">
        <ProjectVisual project={project} index={index} />
        <div className="project-content">
          <div className="project-meta"><span>{project.category}</span><span className={`status-pill ${project.status === 'Proposed multi-agent architecture' ? 'status-pill--proposed' : ''}`}><i />{project.status}</span></div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          {project.achievement && <div className="project-recognition"><Trophy size={15} /><span>{project.achievement}</span></div>}
          {project.recognition && <p className="recognition-detail">{project.recognition}</p>}
          {project.goal && <p className="project-goal"><span>GOAL</span>{project.goal}</p>}
          {allTags.length > 0 && <div className="project-tags">{allTags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
          {project.proposedAgents && (
            <details className="project-details">
              <summary>View proposed architecture <ArrowDown size={14} /></summary>
              <div className="architecture-detail">
                <p>Proposed agents and systems</p>
                <ul>{project.proposedAgents.map((agent) => <li key={agent}>{agent}</li>)}</ul>
                <p className="integration-label">Integrations</p>
                <div className="project-tags">{project.integrations?.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </details>
          )}
          {project.features && (
            <details className="project-details">
              <summary>Explore the concept <ArrowDown size={14} /></summary>
              <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </details>
          )}
          <div className="project-footer">
            <div className="project-footer-links">
              {project.repositoryUrl ? (
                <ExternalAnchor className="project-repo-link" href={project.repositoryUrl}>View repository <Github size={15} /><ExternalLink size={13} /></ExternalAnchor>
              ) : <span className="repository-placeholder"><Github size={14} />{project.repositoryNote}</span>}
              <Link className="project-detail-link" href={`/projects/${project.id}/`}>Project details <ArrowUpRight size={14} /></Link>
            </div>
            <span className="project-number">{project.number}</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <section className="section-shell section-block section-block--tint" id="projects">
      <Reveal>
        <SectionHeading eyebrow="Selected work" title="Ideas built for real-world impact." number="04">
          A selection of AI and automation concepts. Implementation status and repository links are shown only where provided.
        </SectionHeading>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}

function GitHubShowcase() {
  type GitHubRepo = {
    id: number;
    html_url: string;
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
  };
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6&type=owner`, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error('GitHub repository feed unavailable');
        return response.json();
      })
      .then((items: GitHubRepo[]) => {
        if (!Array.isArray(items)) throw new Error('Unexpected repository response');
        setRepositories(items.filter((item) => item && item.html_url && item.name).slice(0, 6));
      })
      .catch((error: unknown) => {
        if (!(error instanceof Error) || error.name !== 'AbortError') setUnavailable(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return (
    <section className="section-shell section-block github-section" id="github">
      <div className="github-heading-row">
        <Reveal>
          <SectionHeading eyebrow="Open source · GitHub" title="Work in the open." number="05">
            Public repositories loaded from GitHub for <strong>@{personalInfo.githubUsername}</strong>. Repository details and counts are live data, not estimates.
          </SectionHeading>
        </Reveal>
        <ExternalAnchor href={`https://github.com/${personalInfo.githubUsername}`} className="button button--secondary github-profile-button">
          Visit GitHub profile <ArrowUpRight size={16} />
        </ExternalAnchor>
      </div>
      {loading && <div className="repo-state" role="status"><span className="loader-dot" /> Loading public repositories from GitHub…</div>}
      {!loading && unavailable && (
        <div className="repo-state repo-state--fallback">
          <Github size={19} /> The live repository feed is unavailable right now. Use the GitHub profile link to view current repositories.
        </div>
      )}
      {!loading && !unavailable && repositories.length === 0 && (
        <div className="repo-state">No public repositories were returned by GitHub.</div>
      )}
      {repositories.length > 0 && (
        <div className="repo-grid">
          {repositories.map((repo, index) => (
            <Reveal key={repo.id} delay={(index % 3) * 65}>
              <article className="repo-card">
                <div className="repo-card-top"><Github size={18} /><span>LIVE FROM GITHUB</span><ExternalLink size={14} /></div>
                <h3><ExternalAnchor href={repo.html_url}>{repo.name}<ArrowUpRight size={14} /></ExternalAnchor></h3>
                <p>{repo.description || 'No repository description provided.'}</p>
                <div className="repo-metrics">
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {Number(repo.stargazers_count || 0).toLocaleString()} stars</span>
                  <span><GitForkMark /> {Number(repo.forks_count || 0).toLocaleString()} forks</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

function GitForkMark() {
  return <span className="fork-mark" aria-hidden="true">⑂</span>;
}

function CertificationMark({ issuer }: { issuer: string }) {
  const initials = issuer === 'Amazon Web Services' ? 'aws' : issuer === 'Google Cloud' ? 'G' : 'M';
  return (
    <div className={`cert-mark cert-mark--${issuer === 'Microsoft' ? 'ms' : issuer === 'Google Cloud' ? 'google' : 'aws'}`} aria-hidden="true">
      {issuer === 'Microsoft' ? <span className="ms-window"><i /><i /><i /><i /></span> : null}
      <span>{initials}</span>
    </div>
  );
}

function Certifications() {
  return (
    <section className="section-shell section-block section-block--tint" id="certifications">
      <div className="certification-heading-row">
        <Reveal>
          <SectionHeading eyebrow="Credentials" title="Learning, applied." number="06">
            Certification details are limited to the names supplied. Individual badge images and verification URLs can be added when available.
          </SectionHeading>
        </Reveal>
        <ExternalAnchor href="https://www.credly.com/users/vikas.gupta47" className="credly-link">
          <Award size={17} /> View Credly profile <ArrowUpRight size={15} />
        </ExternalAnchor>
      </div>
      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <Reveal key={certification.id} delay={(index % 3) * 55}>
            <article className={`cert-card ${certification.placeholder ? 'cert-card--placeholder' : ''}`}>
              <div className="cert-card-top"><CertificationMark issuer={certification.issuer} /><span className="cert-category">{certification.category}</span></div>
              <span className="cert-issuer">{certification.issuer}</span>
              <h3>{certification.name}</h3>
              {certification.code && <p className="cert-code">{certification.code}</p>}
              <div className="cert-footer">
                {certification.verificationUrl
                  ? <ExternalAnchor href={certification.verificationUrl}>Verify credential <ExternalLink size={13} /></ExternalAnchor>
                  : <span><ShieldCheck size={14} /> Verification link not supplied</span>}
                <span className="cert-badge-placeholder"><Award size={14} /> Badge image placeholder</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="certification-note"><ShieldCheck size={16} /><span>“5× Microsoft Certified” is shown as an achievement. The two additional Microsoft credential names and individual verification URLs were not provided.</span></div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section-shell section-block" id="recognition">
      <Reveal>
        <SectionHeading eyebrow="Achievements & recognition" title="Milestones along the way." number="07">
          Hackathon participation, professional recognition, and the supplied certification achievement.
        </SectionHeading>
      </Reveal>
      <div className="achievement-grid">
        {achievements.map((item, index) => {
          const Icon = iconMap[item.icon] || Award;
          return (
            <Reveal key={item.title} delay={(index % 4) * 55}>
              <article className={`achievement-card ${item.featured ? 'achievement-card--featured' : ''}`}>
                <div className="achievement-icon"><Icon size={19} /></div>
                <span className="achievement-index">RECOGNITION / {String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p className="achievement-org">{item.organization}</p>
                {item.detail && <p className="achievement-detail">{item.detail}</p>}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-shell section-block section-block--tint" id="education">
      <div className="education-layout">
        <Reveal>
          <SectionHeading eyebrow="Education" title="The foundation." number="08">
            Academic details shared for this portfolio.
          </SectionHeading>
        </Reveal>
        <div className="education-list">
          {education.map((item) => (
            <Reveal key={item.degree}>
              <article className="education-card">
                <div className="education-icon"><GraduationCap size={24} /></div>
                <div><span className="eyebrow-label">DEGREE</span><h3>{item.degree}</h3><p>{item.institution}</p><small>{item.detail}</small></div>
                <ArrowUpRight className="education-arrow" size={18} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerTimeline() {
  return (
    <section className="section-shell section-block" id="timeline">
      <Reveal>
        <SectionHeading eyebrow="Career path" title="An evolving practice." number="09">
          Role progression without dates, which were not supplied.
        </SectionHeading>
      </Reveal>
      <div className="timeline-list">
        {careerTimeline.map((item, index) => (
          <Reveal key={item.title} delay={index * 75}>
            <article className="timeline-item">
              <span className="timeline-marker"><i /></span>
              <span className="timeline-index">0{index + 1}</span>
              <div><h3>{item.title}</h3><p className="timeline-org">{item.organization}</p><p className="timeline-detail">{item.detail}</p></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-shell section-block contact-section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-layout">
        <Reveal>
          <SectionHeading eyebrow="Contact" title={<>Let’s build something<br />useful together.</>} number="10">
            For conversations about enterprise AI, adoption, and intelligent automation, reach me directly or connect through my profiles.
          </SectionHeading>
          <a className="contact-email" href={`mailto:${personalInfo.email}`}><span><Mail size={18} /></span>{personalInfo.email}<ArrowUpRight size={17} /></a>
          <div className="contact-socials">
            {socialLinks.map((item) => (
              <ExternalAnchor key={item.name} href={item.url} aria-label={item.name} title={item.name}>
                <SocialGlyph type={item.icon} size={18} />
              </ExternalAnchor>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()} aria-describedby="contact-form-status">
            <div className="form-heading"><span>MESSAGE</span><p>Leave a note</p></div>
            <label htmlFor="contact-name">Name<input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" /></label>
            <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" /></label>
            <label htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" /></label>
            <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" rows={4} placeholder="Write your message…" /></label>
            <button className="button button--primary form-submit" type="button" disabled>Submit message <ArrowUpRight size={16} /></button>
            <p id="contact-form-status" className="form-status">Contact form preview. A submission service has not been configured; please use the email link above.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <a className="brand brand--footer" href="#top"><span className="brand-mark">VG</span><span className="brand-wordmark">VIKAS<span>GUPTA</span></span></a>
        <p>Building intelligent systems for real-world work.</p>
        <div className="footer-socials" aria-label="Social profiles">
          {socialLinks.map((item) => (
            <ExternalAnchor key={item.name} href={item.url} aria-label={item.name} title={item.name}>
              <SocialGlyph type={item.icon} size={16} />
            </ExternalAnchor>
          ))}
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} Vikas Gupta</span>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="portfolio-page">
      <Header progress={progress} />
      <main>
        {siteConfig.sections.showHero && <Hero />}
        {siteConfig.sections.showAbout && <About />}
        {siteConfig.sections.showExperience && <Experience />}
        {siteConfig.sections.showSkills && <Skills />}
        {siteConfig.sections.showProjects && <Projects />}
        {siteConfig.sections.showGitHub && <GitHubShowcase />}
        {siteConfig.sections.showCertifications && <Certifications />}
        {siteConfig.sections.showAchievements && <Achievements />}
        {siteConfig.sections.showEducation && <Education />}
        {siteConfig.sections.showTimeline && <CareerTimeline />}
        {siteConfig.sections.showContact && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
