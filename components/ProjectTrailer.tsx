import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { MediaFrame } from "@/components/MediaFrame";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { ProjectMetadata } from "@/components/ProjectMetadata";

export function ProjectTrailer({ project }: { project: Project }) {
  return (
    <article className={`project-trailer project-trailer-${project.accent}`}>
      <div className="project-trailer-copy">
        <OwnershipLabel value={project.ownership} detail={project.role} />
        <p className="label muted">{project.kicker}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="lead">{project.signal}</p>
        <div className="project-actions">
          <Link className="command-link" href={`/projects/${project.slug}`}>
            Read case study <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <a className="command-link" href={project.repoUrl} target="_blank" rel="noreferrer">
            Source evidence <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
      <div className="project-trailer-media">
        <MediaFrame
          label={`${project.title} evidence diagram`}
          caption={`Evidence diagram, not final project media. Replace or pair with verified ${project.title} screenshots, recordings, or diagrams before final publication.`}
        >
          <ProjectVisual project={project} />
        </MediaFrame>
        <ProjectMetadata project={project} />
      </div>
    </article>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const isVantage = project.accent === "vantage";
  return (
    <div className={`project-visual ${isVantage ? "vantage-visual" : "grna-visual"}`} aria-hidden="true">
      <div className="visual-grid">
        {Array.from({ length: isVantage ? 18 : 28 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="visual-panel">
        <span>{isVantage ? "DISCOVERY INPUTS" : "GUIDE CANDIDATES"}</span>
        <strong>{isVantage ? "trust / relevance / place" : "blast / score / compare"}</strong>
      </div>
      <div className="visual-output">
        <span>{isVantage ? "LOCAL SIGNAL" : "SELECTED GUIDE"}</span>
      </div>
    </div>
  );
}
