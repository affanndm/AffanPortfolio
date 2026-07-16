import { ArrowUpRight } from "lucide-react";
import { DesktopSignalField } from "@/components/interactive/DesktopSignalField";
import { SignalTicker } from "@/components/interactive/SignalTicker";
import { LabIndex } from "@/components/LabIndex";
import { ProjectTrailer } from "@/components/ProjectTrailer";
import { flagshipProjects, labItems, publicEmail, trajectory } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

export default function HomePage() {
  return (
    <main id="main" className="page-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-static-signal" aria-hidden="true">
          <span className="static-node static-node-a" />
          <span className="static-node static-node-b" />
          <span className="static-node static-node-c" />
          <span className="static-node static-node-d" />
          <span className="static-node static-node-e" />
          <span className="static-line static-line-a" />
          <span className="static-line static-line-b" />
          <span className="static-line static-line-c" />
          <span className="static-line static-line-d" />
        </div>
        <DesktopSignalField />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="label muted">AFFAN NADEEM - SIGNAL / SYSTEMS</p>
            <h1 id="hero-title" className="display hero-title">
              <span>I BUILD</span>
              <span>SOFTWARE FOR</span>
              <span>COMPLEX SYSTEMS.</span>
            </h1>
            <p className="lead">From trusted local discovery to computational biology.</p>
            <div className="hero-actions">
              <a className="command-link" href="#work">
                Selected work <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a className="command-link" href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub")}>
                GitHub <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
          <aside className="hero-proof" aria-label="Affan's working method">
            <p className="label">A repeated method</p>
            <ol className="hero-method">
              <li>
                <span>01</span>
                <strong>Read the noise</strong>
              </li>
              <li>
                <span>02</span>
                <strong>Expose the structure</strong>
              </li>
              <li>
                <span>03</span>
                <strong>Build the useful path</strong>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <SignalTicker />

      <section id="work" className="section selected-work" aria-labelledby="work-title">
        <div className="grid">
          <div className="span-5">
            <p className="label muted">Selected Work</p>
            <h2 id="work-title" className="section-title">
              Two systems, two kinds of noise.
            </h2>
          </div>
          <div className="span-7">
            <p className="lead">
              One begins with local businesses and trust. The other begins with guide sequences and BLAST output.
              Both ask software to turn an overwhelming search space into a clearer next decision.
            </p>
          </div>
          <div className="span-12">
            {flagshipProjects.map((project) => (
              <ProjectTrailer key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="section lab-section" aria-labelledby="lab-title">
        <div className="grid">
          <div className="span-6">
            <h2 id="lab-title" className="section-title">
              Not every useful project needs a case study.
            </h2>
          </div>
          <div className="span-6">
            <p className="lead">
              The Lab tracks smaller experiments, algorithm practice, and early systems with their current
              status visible. It reads as a working index, not a second awards shelf.
            </p>
          </div>
          <div className="span-12">
            <LabIndex items={labItems} />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="grid">
          <div className="span-7">
            <h2 id="about-title" className="section-title">
              Too much information is not the problem. Unclear structure is.
            </h2>
          </div>
          <div className="span-5 about-copy">
            <p>
              Affan&apos;s work moves between product engineering, scientific computing, algorithms, and early
              data tools. The subject changes; the working question does not: what matters here, and how can
              software make it easier to act on?
            </p>
            <p>
              That thread starts with small Python systems, grows through constraint-driven practice, then
              reaches team products and computational biology. The portfolio is organized around that
              progression rather than a list of technologies.
            </p>
          </div>
          <ol className="span-12 trajectory" aria-label="Selected project chronology">
            {trajectory.map((item) => (
              <li key={`${item.year}-${item.title}`}>
                <span className="label muted">{item.year}</span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="section contact-section" aria-labelledby="contact-title">
        <div className="grid">
          <div className="span-8">
            <h2 id="contact-title" className="section-title">
              Have a difficult problem? Let&apos;s find the signal.
            </h2>
          </div>
          <div className="span-4 contact-links">
            <a className="command-link" href={`mailto:${publicEmail}`}>
              Email <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a className="command-link" href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub")}>
              GitHub <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a
              className="command-link"
              href="https://www.linkedin.com/in/affan-nadeem-9b4aa0250/"
              {...externalLinkProps("Affan Nadeem LinkedIn")}
            >
              LinkedIn <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
