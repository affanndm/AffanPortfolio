import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { ProjectDrawer } from "@/components/interactive/ProjectDrawer";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { ProjectMedia } from "@/components/ProjectMedia";
import { externalLinkProps } from "@/lib/utils";

export function ProjectTrailer({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-trailer project-trailer-${project.accent}`} data-project-card>
      <div className="project-poster-index" aria-hidden="true">
        <span>({String(index).padStart(2, "0")})</span>
        <span>{project.kicker}</span>
      </div>
      <div className="project-trailer-media">
        <ProjectMedia project={project} />
        <ProjectDrawer project={project} />
      </div>
      <div className="project-trailer-copy">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <span>{project.year}</span>
        </div>
        <p className="project-signal">{project.signal}</p>
        <div className="project-context">
          <OwnershipLabel value={project.ownership} detail={project.role} />
          <span>{project.discipline}</span>
        </div>
        <div className="project-actions">
          <a className="project-primary-link" href={`/projects/${project.slug}`}>
            Full case study <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <a href={project.repoUrl} {...externalLinkProps(`${project.title} source evidence`)}>
            Source evidence <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
