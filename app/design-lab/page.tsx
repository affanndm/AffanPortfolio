import type { Metadata } from "next";
import { DottedBloom } from "@/components/interactive/DottedBloom";
import { SignalField } from "@/components/interactive/SignalField";
import { SignalTicker } from "@/components/interactive/SignalTicker";
import { MediaFrame } from "@/components/MediaFrame";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { flagshipProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Design Lab",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignLabPage() {
  return (
    <main id="main" className="page-shell design-lab">
      <section className="section" aria-labelledby="design-lab-title">
        <div className="grid">
          <div className="span-8">
            <p className="label muted">Internal route</p>
            <h1 id="design-lab-title" className="display">
              Design Lab
            </h1>
            <p className="lead">
              Internal specimens for Signal / Systems foundations. This route is excluded from public
              navigation and indexing.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="tokens-title">
        <div className="grid">
          <div className="span-4">
            <h2 id="tokens-title" className="section-title">
              Foundation
            </h2>
          </div>
          <div className="span-8 token-grid">
            {[
              ["Canvas", "var(--color-canvas)"],
              ["Surface", "var(--color-surface)"],
              ["Text", "var(--color-text)"],
              ["Muted", "var(--color-muted)"],
              ["Signal", "var(--color-signal)"],
              ["Vantage", "var(--color-vantage)"],
              ["gRNA", "var(--color-grna)"],
              ["Violet", "var(--color-violet)"],
            ].map(([name, color]) => (
              <div key={name} className="token-swatch">
                <span style={{ background: color }} />
                <strong>{name}</strong>
                <code>{color}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="labels-title">
        <div className="grid">
          <div className="span-4">
            <h2 id="labels-title" className="section-title">
              Ownership
            </h2>
          </div>
          <div className="span-8 label-specimens">
            {(["SOLE BUILD", "TEAM PROJECT", "CONTRIBUTOR", "EXPERIMENT", "ARCHIVE"] as const).map((item) => (
              <OwnershipLabel key={item} value={item} detail="Visible before entry" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="experiments-title">
        <div className="grid">
          <div className="span-5">
            <p className="label muted">Hero Experiments</p>
            <h2 id="experiments-title" className="section-title">
              Three directions, one system.
            </h2>
          </div>
          <div className="span-7">
            <p className="lead">
              These isolated experiments were compared for meaning, accessibility, mobile behavior, and cost.
              Signal Network is the production base; the reel informs project presentation, while bloom remains internal.
            </p>
          </div>
          <Experiment title="Experiment 1: Signal Network">
            <SignalField labelled />
            <div className="experiment-copy">
              <strong>Noise resolves into relationship.</strong>
              <span>Nodes map projects, domains, and evidence categories.</span>
            </div>
          </Experiment>
          <Experiment title="Experiment 2: Editorial Project Reel">
            <div className="reel-specimen" aria-hidden="true">
              {flagshipProjects.map((project) => (
                <span key={project.slug}>{project.title}</span>
              ))}
            </div>
            <div className="experiment-copy">
              <strong>Proof before prose.</strong>
              <span>Large project titles pair with persistent role and ownership labels.</span>
            </div>
          </Experiment>
          <Experiment title="Experiment 3: Dotted Grid Bloom">
            <DottedBloom />
            <div className="experiment-copy">
              <strong>Atmosphere stays secondary.</strong>
              <span>Inspired only by cursor responsiveness and restrained bloom principles.</span>
            </div>
          </Experiment>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="media-title">
        <div className="grid">
          <div className="span-4">
            <h2 id="media-title" className="section-title">
              Media
            </h2>
          </div>
          <div className="span-8">
            <MediaFrame
              label="Missing verified media specimen"
              caption="Missing media states must be labeled and tracked. They cannot masquerade as finished project proof."
            />
          </div>
        </div>
      </section>

      <SignalTicker />
    </main>
  );
}

function Experiment({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="span-4 experiment-card">
      <h3>{title}</h3>
      <div className="experiment-stage">{children}</div>
    </article>
  );
}
