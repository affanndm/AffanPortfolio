import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { flagshipProjects } from "@/lib/content";
import { MediaFrame } from "@/components/MediaFrame";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { ProjectMetadata } from "@/components/ProjectMetadata";
import { externalLinkProps } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return flagshipProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = flagshipProjects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.title}: ${project.signal}`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = flagshipProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  const nextProject = flagshipProjects.find((item) => item.slug !== project.slug);

  return (
    <main id="main" className="page-shell project-page">
      <section className={`section project-hero project-hero-${project.accent}`} aria-labelledby="project-title">
        <div className="grid">
          <div className="span-7">
            <OwnershipLabel value={project.ownership} detail={project.role} />
            <p className="label muted">{project.kicker}</p>
            <h1 id="project-title" className="display">
              {project.title}
            </h1>
            <p className="lead">{project.signal}</p>
          </div>
          <div className="span-5">
            <ProjectMetadata project={project} />
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-label={`${project.title} media status`}>
        <div className="grid">
          <div className="span-12">
            <MediaFrame
              label={`${project.title} verified media needed`}
              caption={`Evidence diagram placeholder only: replace or pair with verified ${project.title} media from content-audit/MEDIA_NEEDED.md.`}
            />
          </div>
        </div>
      </section>

      <CaseStudySection title="The Signal">{project.signal}</CaseStudySection>
      <CaseStudySection title="The Noise">{project.noise}</CaseStudySection>
      <section className="section section-tight case-section" aria-labelledby="contribution-title">
        <div className="grid">
          <div className="span-4">
            <h2 id="contribution-title" className="section-title">
              My Contribution
            </h2>
          </div>
          <div className="span-8">
            <ul className="case-list">
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-tight case-section" aria-labelledby="evidence-title">
        <div className="grid">
          <div className="span-4">
            <h2 id="evidence-title" className="section-title">
              Evidence
            </h2>
          </div>
          <div className="span-8 evidence-grid">
            {project.evidence.map((item) => (
              <a key={item.url} className="command-link" href={item.url} {...externalLinkProps(`${project.title} ${item.label}`)}>
                {item.label} <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ))}
            <a className="command-link" href={project.repoUrl} {...externalLinkProps(`${project.title} repository`)}>
              Repository <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section section-tight case-section" aria-labelledby="credits-title">
        <div className="grid">
          <div className="span-4">
            <h2 id="credits-title" className="section-title">
              Team And Credits
            </h2>
          </div>
          <div className="span-8">
            <p className="body-copy">
              This is a {project.team.toLowerCase()}. Public contributor history and evidence links are included here;
              final teammate names and preferred role titles should be added when Affan provides them.
            </p>
            <ul className="case-list caution-list">
              {project.cautions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section next-project" aria-labelledby="next-title">
        <div className="grid">
          <div className="span-8">
            <h2 id="next-title" className="section-title">
              Next Project
            </h2>
          </div>
          <div className="span-4">
            {nextProject ? (
              <Link className="command-link" href={`/projects/${nextProject.slug}`}>
                {nextProject.title} <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}

function CaseStudySection({ title, children }: { title: string; children: React.ReactNode }) {
  const id = `${title.toLowerCase().replaceAll(" ", "-")}-title`;
  return (
    <section className="section section-tight case-section" aria-labelledby={id}>
      <div className="grid">
        <div className="span-4">
          <h2 id={id} className="section-title">
            {title}
          </h2>
        </div>
        <div className="span-8">
          <p className="lead">{children}</p>
        </div>
      </div>
    </section>
  );
}
