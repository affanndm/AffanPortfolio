import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { ProjectMetadata } from "@/components/ProjectMetadata";
import { ProjectMedia } from "@/components/ProjectMedia";
import { externalLinkProps } from "@/lib/utils";

export function ProjectTrailer({ project }: { project: Project }) {
  return (
    <article className={`project-trailer project-trailer-${project.accent}`}>
      <div className="project-trailer-copy">
        <OwnershipLabel value={project.ownership} detail={project.role} />
        <p className="label muted">{project.kicker}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="lead">{project.signal}</p>
        <div className="project-actions">
          <a className="command-link" href={`/projects/${project.slug}`}>
            Read {project.title} case study <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <a className="command-link" href={project.repoUrl} {...externalLinkProps(`${project.title} source evidence`)}>
            {project.title} source evidence <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
      <div className="project-trailer-media">
        <ProjectMedia project={project} />
        <ProjectMetadata project={project} />
      </div>
    </article>
  );
}
