import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Check,
  ExternalLink,
  Github,
  Orbit,
  Sparkles,
  Workflow,
} from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { personalInfo } from '@/data/portfolio';

const visuals = [Orbit, Workflow, Sparkles, Orbit];

export default function ProjectDetailPage({ project }: { project: Project }) {
  const projectIndex = Math.max(0, Number(project.number) - 1);
  const Visual = visuals[projectIndex % visuals.length];
  const technologies = project.technologies ?? [];
  const integrations = project.integrations ?? [];
  const features = project.features ?? [];
  const agents = project.proposedAgents ?? [];

  return (
    <main className={`project-detail-page project-detail-page--${project.id}`}>
      <header className="detail-header">
        <Link href="/" className="detail-brand"><span className="brand-mark">VG</span><span>{personalInfo.name}</span></Link>
        <Link href="/#projects" className="detail-back"><ArrowLeft size={15} /> Back to projects</Link>
      </header>

      <section className="detail-hero section-shell">
        <div className="detail-hero-copy">
          <p className="detail-kicker">PROJECT / {project.number} <span>·</span> {project.category}</p>
          <h1>{project.title}</h1>
          <p className="detail-subtitle">{project.subtitle}</p>
          <p className="detail-description">{project.description}</p>
          <span className={`detail-status ${project.status.includes('Proposed') ? 'detail-status--proposed' : ''}`}><i />{project.status}</span>
        </div>
        <div className="detail-art" aria-hidden="true">
          <div className="detail-art-grid" />
          {project.imageUrl ? (
            <img
              className="detail-art-image"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${project.imageUrl}`}
              alt=""
            />
          ) : (
            <>
              <div className="detail-art-ring detail-art-ring--one" />
              <div className="detail-art-ring detail-art-ring--two" />
              <div className="detail-art-icon"><Visual size={58} strokeWidth={1.15} /></div>
            </>
          )}
          <span className="detail-art-label">{project.number} / VG</span>
        </div>
      </section>

      <div className="section-shell detail-content">
        {project.achievement && (
          <section className="detail-highlight">
            <div className="detail-highlight-icon"><Award size={20} /></div>
            <div><span>ACHIEVEMENT</span><h2>{project.achievement}</h2>{project.recognition && <p>{project.recognition}</p>}</div>
          </section>
        )}

        {project.goal && (
          <section className="detail-section">
            <div className="detail-section-label"><span>01</span> INTENDED GOAL</div>
            <div><h2>What it aims to do</h2><p>{project.goal}</p></div>
          </section>
        )}

        {agents.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-label"><span>{project.goal ? '02' : '01'}</span> PROPOSED DESIGN</div>
            <div>
              <h2>Multi-agent architecture</h2>
              <p className="detail-callout"><Sparkles size={16} /> The items below are proposed architecture, not claims of implemented functionality.</p>
              <div className="detail-agent-grid">{agents.map((agent, index) => <div key={agent}><span>{String(index + 1).padStart(2, '0')}</span><Workflow size={16} />{agent}</div>)}</div>
            </div>
          </section>
        )}

        {features.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-label"><span>01</span> PROJECT SCOPE</div>
            <div><h2>Supplied feature outline</h2><ul className="detail-feature-list">{features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul></div>
          </section>
        )}

        {(technologies.length > 0 || integrations.length > 0) && (
          <section className="detail-section">
            <div className="detail-section-label"><span>{agents.length || features.length || project.goal ? '03' : '01'}</span> TECHNOLOGY</div>
            <div>
              <h2>{integrations.length > 0 ? 'Tools & integrations' : 'Technologies'}</h2>
              {technologies.length > 0 && <div className="detail-tags">{technologies.map((item) => <span key={item}>{item}</span>)}</div>}
              {integrations.length > 0 && <div className="detail-tags">{integrations.map((item) => <span key={item}>{item}</span>)}</div>}
            </div>
          </section>
        )}

        <section className="detail-links">
          <div><span>PROJECT REPOSITORY</span><p>{project.repositoryUrl ? 'Repository link supplied.' : project.repositoryNote}</p></div>
          {project.repositoryUrl
            ? <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Open GitHub <Github size={15} /><ExternalLink size={13} /></a>
            : <span className="detail-link-placeholder"><Github size={15} /> Repository URL not provided</span>}
        </section>
      </div>

      <footer className="detail-footer section-shell">
        <span>VIKAS GUPTA · PROJECT DETAILS</span>
        <Link href="/#contact">Start a conversation <ArrowUpRight size={15} /></Link>
      </footer>
    </main>
  );
}
