import { ArrowUpRight } from "lucide-react";
import type { LabItem } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

export function LabIndex({ items, headingLevel = "h3" }: { items: LabItem[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <div className="lab-index">
      {items.map((item) => (
        <article key={item.title} className={`lab-row lab-row-${item.status} lab-row-${item.visual}`}>
          <LabVisual kind={item.visual} />
          <div className="lab-row-title">
            <p>
              {item.ownership} <span>/</span> {item.year}
            </p>
            <Heading>{item.title}</Heading>
          </div>
          <p className="lab-summary">{item.summary}</p>
          <div className="lab-row-footer">
            <span>{item.statusLabel}</span>
            <div className="lab-links">
              {item.repoUrl ? (
                <a href={item.repoUrl} {...externalLinkProps(`${item.title} repository`)}>
                  Repository <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ) : null}
              {item.liveUrl ? (
                <a href={item.liveUrl} {...externalLinkProps(`${item.title} live site`)}>
                  Live <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function LabVisual({ kind }: { kind: LabItem["visual"] }) {
  return (
    <div className={`lab-visual lab-visual-${kind}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
