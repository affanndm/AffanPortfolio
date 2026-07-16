import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { ProjectMedia } from "@/components/ProjectMedia";
import { externalLinkProps } from "@/lib/utils";

export function ProjectTrailer({ project }: { project: Project }) {
  return (
    <article className={`project-trailer project-trailer-${project.accent}`}>
      <div className="project-trailer-media">
        <ProjectMedia project={project} />
      </div>
      <div className="project-trailer-copy">
        <div className="project-title-row">
          <h3 className="project-title">
            <a href={`/projects/${project.slug}`}>{project.title}</a>
          </h3>
          <span>{project.year}</span>
        </div>
        <p className="project-signal">{project.signal}</p>
        <div className="project-context">
          <OwnershipLabel value={project.ownership} detail={project.role} />
          <span>{project.discipline}</span>
        </div>
        <div className="project-actions">
          <a className="project-primary-link" href={`/projects/${project.slug}`}>
            Open case study <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <a href={project.repoUrl} {...externalLinkProps(`${project.title} source evidence`)}>
            Source evidence <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
