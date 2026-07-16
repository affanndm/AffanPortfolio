import Image from "next/image";
import type { Project } from "@/lib/content";
import { MediaFrame } from "@/components/MediaFrame";

export function ProjectMedia({ project }: { project: Project }) {
  if (project.media.kind === "image") {
    return (
      <MediaFrame label={project.media.alt} caption={project.media.caption}>
        <div className="project-image-wrap">
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            sizes="(max-width: 980px) 100vw, 58vw"
            className="project-image"
          />
          <div className="project-image-index" aria-hidden="true">
            <span>LIVE / PUBLIC</span>
            <span>DISCOVERY / ENTRY</span>
          </div>
        </div>
      </MediaFrame>
    );
  }

  return (
    <MediaFrame label={project.media.label} caption={project.media.caption}>
      <div className="grna-pipeline" role="img" aria-label={project.media.label}>
        <div className="pipeline-terminal" aria-hidden="true">
          <span className="pipeline-command">$ python main.py</span>
          <strong>gRNAlytics</strong>
          <span>CRISPR-Cas9 gRNA Specificity Analyzer</span>
        </div>
        <div className="sequence-strip" aria-hidden="true">
          {"ATCGGCTAACGTTAGCGTAC".split("").map((base, index) => (
            <span key={`${base}-${index}`}>{base}</span>
          ))}
          <i />
        </div>
        <ol className="pipeline-stages" aria-hidden="true">
          <li>
            <span>01</span>
            <strong>Validate</strong>
            <small>A / T / C / G</small>
          </li>
          <li>
            <span>02</span>
            <strong>BLAST</strong>
            <small>Human records</small>
          </li>
          <li>
            <span>03</span>
            <strong>Annotate</strong>
            <small>Genes / matches</small>
          </li>
          <li>
            <span>04</span>
            <strong>Compare</strong>
            <small>Heuristic score</small>
          </li>
        </ol>
      </div>
    </MediaFrame>
  );
}
