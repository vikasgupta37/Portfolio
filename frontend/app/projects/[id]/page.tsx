import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { personalInfo, projects } from '@/data/portfolio';

type RouteProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.title} — ${personalInfo.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${personalInfo.name}`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectRoute({ params }: RouteProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
