import type { Project } from "@/lib/content";

export function ProjectMetadata({ project }: { project: Project }) {
  return (
    <dl className="metadata-list" aria-label={`${project.title} project metadata`}>
      <div className="metadata-row">
        <dt>Year</dt>
        <dd>{project.year}</dd>
      </div>
      <div className="metadata-row">
        <dt>Role</dt>
        <dd>{project.role}</dd>
      </div>
      <div className="metadata-row">
        <dt>Team</dt>
        <dd>{project.team}</dd>
      </div>
      <div className="metadata-row">
        <dt>Discipline</dt>
        <dd>{project.discipline}</dd>
      </div>
      <div className="metadata-row">
        <dt>Stack</dt>
        <dd>{project.stack.join(" / ")}</dd>
      </div>
      <div className="metadata-row">
        <dt>Evidence</dt>
        <dd>{project.evidence.length} public source links</dd>
      </div>
    </dl>
  );
}
