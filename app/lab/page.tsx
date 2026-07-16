import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { labItems } from "@/lib/content";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { externalLinkProps } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lab",
  description: "Smaller experiments, algorithms, early tools, and archive work from Affan Nadeem.",
};

export default function LabPage() {
  return (
    <main id="main" className="page-shell">
      <section className="section" aria-labelledby="lab-page-title">
        <div className="grid">
          <div className="span-7">
            <p className="label muted">The Lab</p>
            <h1 id="lab-page-title" className="display">
              Experiments with visible edges.
            </h1>
          </div>
          <div className="span-5">
            <p className="lead">
              Lab items show range and progression. They do not compete with flagship case studies,
              and they keep archive or verification status visible.
            </p>
          </div>
          <div className="span-12 lab-grid">
            {labItems.map((item) => (
              <article key={item.title} className={`lab-item lab-item-${item.status}`}>
                <OwnershipLabel value={item.ownership} detail={item.category} />
                <div>
                  <p className="label muted">{item.year}</p>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
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
        </div>
      </section>
    </main>
  );
}
