import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { flagshipProjects } from "@/lib/content";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { ProjectMedia } from "@/components/ProjectMedia";
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
            <div className="project-hero-actions">
              {project.liveUrl ? (
                <a className="command-link" href={project.liveUrl} {...externalLinkProps(`${project.title} live deployment`)}>
                  Live deployment <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              ) : null}
              <a className="command-link" href={project.repoUrl} {...externalLinkProps(`${project.title} repository`)}>
                Source repository <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
          <div className="span-5">
            <ProjectMetadata project={project} />
          </div>
        </div>
      </section>

      <section className="section section-tight case-opening" aria-label={`${project.title} problem and outcome`}>
        <div className="grid">
          <article className="span-6 case-statement">
            <p className="label muted">The Signal</p>
            <h2>What becomes useful</h2>
            <p>{project.signal}</p>
          </article>
          <article className="span-6 case-statement case-statement-noise">
            <p className="label muted">The Noise</p>
            <h2>What makes it difficult</h2>
            <p>{project.noise}</p>
          </article>
        </div>
      </section>

      <section className="section section-tight case-system" aria-labelledby="system-title">
        <div className="grid">
          <div className="span-5">
            <p className="label muted">The System</p>
            <h2 id="system-title" className="section-title">
              A path through the search space.
            </h2>
          </div>
          <div className="span-7">
            <p className="lead">{project.system}</p>
            <SystemFlow accent={project.accent} />
          </div>
        </div>
      </section>

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

      <section className="section section-tight decisions-section" aria-labelledby="decisions-title">
        <div className="grid">
          <div className="span-4">
            <p className="label muted">Important Decisions</p>
            <h2 id="decisions-title" className="section-title">
              Decisions that shaped the system.
            </h2>
          </div>
          <ol className="span-8 decision-list">
            {project.decisions.map((decision, index) => (
              <li key={decision.title}>
                <span className="label muted">{String(index + 1).padStart(2, "0")}</span>
                <strong>{decision.title}</strong>
                <p>{decision.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section product-motion" aria-labelledby="product-motion-title">
        <div className="grid">
          <div className="span-5">
            <p className="label muted">Product In Motion</p>
            <h2 id="product-motion-title" className="section-title">
              The system, made visible.
            </h2>
          </div>
          <div className="span-7">
            <ProjectMedia project={project} />
          </div>
        </div>
      </section>

      <section className="section section-tight outcome-section" aria-label={`${project.title} outcome and reflection`}>
        <div className="grid">
          <article className="span-6 outcome-panel">
            <p className="label muted">Verified Outcome</p>
            <h2>What the evidence supports</h2>
            <p>{project.outcome}</p>
          </article>
          <article className="span-6 outcome-panel reflection-panel">
            <p className="label muted">What Changed In My Thinking</p>
            <h2>The principle carried forward</h2>
            <p>{project.reflection}</p>
          </article>
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
              This work is presented as a {project.team.toLowerCase()}, never as a solo build. The public GitHub
              contributor list below credits visible repository contributors without assigning private team roles.
            </p>
            <ul className="credit-list">
              {project.credits.map((credit) => (
                <li key={credit.url}>
                  <a href={credit.url} {...externalLinkProps(`${credit.label} GitHub profile`)}>
                    @{credit.label} <ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                </li>
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
              <a className="command-link" href={`/projects/${nextProject.slug}`}>
                {nextProject.title} <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}

function SystemFlow({ accent }: { accent: "vantage" | "grnalytics" }) {
  const steps =
    accent === "vantage"
      ? ["Business records", "Place enrichment", "Discovery interface", "Saved / owner flows"]
      : ["Guide input", "NCBI BLAST", "Annotate / score", "Compare candidates"];

  return (
    <ol className={`system-flow system-flow-${accent}`} aria-label="System flow">
      {steps.map((step, index) => (
        <li key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
        </li>
      ))}
    </ol>
  );
}
