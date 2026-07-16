import { ArrowUpRight } from "lucide-react";
import type { LabItem } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";
import { OwnershipLabel } from "@/components/OwnershipLabel";

export function LabIndex({ items, headingLevel = "h3" }: { items: LabItem[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <div className="lab-index">
      {items.map((item, index) => (
        <article key={item.title} className={`lab-row lab-row-${item.status}`}>
          <div className="lab-row-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </div>
          <LabVisual kind={item.visual} />
          <div className="lab-row-title">
            <OwnershipLabel value={item.ownership} detail={item.category} />
            <Heading>{item.title}</Heading>
            <p className="label muted">{item.year}</p>
          </div>
          <div className="lab-row-copy">
            <p>{item.summary}</p>
            <p className="lab-status">
              <strong>{item.statusLabel}</strong>
              <span>{item.statusDetail}</span>
            </p>
          </div>
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
