import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DesktopSignalField } from "@/components/interactive/DesktopSignalField";
import { SignalTicker } from "@/components/interactive/SignalTicker";
import { ProjectTrailer } from "@/components/ProjectTrailer";
import { OwnershipLabel } from "@/components/OwnershipLabel";
import { flagshipProjects, labItems } from "@/lib/content";
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
              <Link className="command-link" href="#work">
                Selected work <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <a className="command-link" href="https://github.com/affanndm" {...externalLinkProps("GitHub evidence")}>
                GitHub evidence <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
          <aside className="hero-proof" aria-label="Current evidence boundaries">
            <p className="label">Evidence rule</p>
            <p>
              Team projects are labeled before entry. Claims about impact, awards, scientific validity,
              availability, and final biography stay out until verified.
            </p>
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
              The flagship case studies are intentionally limited to projects with public evidence of
              Affan&apos;s contribution. They are presented as team projects, not solo mythology.
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
            <p className="label muted">The Lab</p>
            <h2 id="lab-title" className="section-title">
              Smaller work, visible boundaries.
            </h2>
          </div>
          <div className="span-6">
            <p className="lead">
              The Lab is not a pile of equal cards. It separates polished experiments, algorithms,
              early systems, and archive items so the visitor understands what each piece can prove.
            </p>
          </div>
          <div className="span-12 lab-grid">
            {labItems.map((item) => (
              <article key={item.title} className={`lab-item lab-item-${item.status}`}>
                <OwnershipLabel value={item.ownership} detail={item.category} />
                <div>
                  <p className="label muted">{item.year}</p>
                  <h3>{item.title}</h3>
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

      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="grid">
          <div className="span-7">
            <p className="label muted">About</p>
            <h2 id="about-title" className="section-title">
              I am interested in what happens when a difficult problem has too much information.
            </h2>
          </div>
          <div className="span-5 about-copy">
            <p>
              The public evidence points to a pattern: local discovery, computational biology, algorithms,
              and early data tools all ask the same question in different forms. What matters, what is noise,
              and how should software make the answer easier to act on?
            </p>
            <p>
              Final biography, school chronology, resume details, collaboration availability, and personal
              media stay out of public copy until final source material is provided.
            </p>
          </div>
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
            <p className="media-caption">
              Email and resume link are intentionally withheld until final public contact details are provided.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
