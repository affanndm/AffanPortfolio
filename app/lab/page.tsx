import type { Metadata } from "next";
import { labItems } from "@/lib/content";
import { LabIndex } from "@/components/LabIndex";

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
              A working index of smaller experiments, algorithm practice, and early systems. Every row keeps
              ownership, source, and publication status visible.
            </p>
          </div>
          <div className="span-12">
            <LabIndex items={labItems} headingLevel="h2" />
          </div>
        </div>
      </section>
    </main>
  );
}
