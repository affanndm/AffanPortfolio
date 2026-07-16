import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { DesktopSignalField } from "@/components/interactive/DesktopSignalField";
import { PortfolioMotion } from "@/components/interactive/PortfolioMotion";
import { SignalTicker } from "@/components/interactive/SignalTicker";
import { LabIndex } from "@/components/LabIndex";
import { ProjectTrailer } from "@/components/ProjectTrailer";
import { flagshipProjects, labItems, publicEmail, trajectory } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

const aboutStatement =
  "I look for the moment a difficult problem stops reading like noise and starts revealing a system.";

export default function HomePage() {
  return (
    <main id="main" className="page-shell">
      <PortfolioMotion />

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

        <div className="hero-stage">
          <div className="hero-kicker">
            <span>Software × Science × Systems</span>
            <span>Portfolio / 2026</span>
          </div>

          <h1 id="hero-title" className="hero-name" aria-label="Affan Nadeem">
            <span>AFFAN</span>
            <span>NADEEM</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-positioning">
              I build software for <em>complex systems.</em>
            </p>
            <div className="hero-intro">
              <p>
                From trusted local discovery to computational biology, I turn crowded search spaces into
                clearer decisions.
              </p>
              <div className="hero-actions">
                <a className="text-link" href="#work">
                  Enter selected work <ArrowDown aria-hidden="true" size={17} />
                </a>
                <a className="text-link" href={`mailto:${publicEmail}`}>
                  Start a conversation <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SignalTicker />

      <section id="work" className="selected-work" aria-labelledby="work-title">
        <div className="work-opening">
          <p className="work-note">Selected work / team-built / contribution-led</p>
          <h2 id="work-title" className="work-title">
            Two search spaces.
            <span className="inline-project-image" aria-hidden="true">
              <Image src="/media/vantage/live-home.png" alt="" fill sizes="160px" />
            </span>
            <br />
            Two clearer paths forward.
          </h2>
        </div>

        <div className="work-layout">
          <aside className="work-manifesto">
            <p>
              The interface changes. The working instinct does not: find the structure, expose the evidence,
              and make the next decision easier.
            </p>
            <span>Scroll through the work</span>
          </aside>
          <div className="project-reel">
            {flagshipProjects.map((project) => (
              <ProjectTrailer key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="lab-section" aria-labelledby="lab-title">
        <div className="lab-heading">
          <p>Not everything needs a case study.</p>
          <h2 id="lab-title">Side quests, small systems, unfinished questions.</h2>
        </div>
        <LabIndex items={labItems} />
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-topline">
          <span>About Affan</span>
          <span>Still learning by building</span>
        </div>
        <h2 id="about-title" className="about-statement" aria-label={aboutStatement}>
          {aboutStatement.split(" ").map((word, index) => (
            <span key={`${word}-${index}`} data-reveal-word aria-hidden="true">
              {word}{" "}
            </span>
          ))}
        </h2>

        <div className="about-detail">
          <div className="about-monogram" aria-hidden="true">
            <span>A</span>
            <span>N</span>
            <i />
          </div>
          <div className="about-copy">
            <p>
              I work across product engineering, scientific computing, and algorithms. In Vantage, that means
              discovery, trust, and useful product paths. In gRNAlytics, it means making search output easier to
              compare without hiding uncertainty.
            </p>
            <p>
              The domains are different, but I keep returning to the same kind of challenge: too much
              information, too many constraints, and no obvious place to begin.
            </p>
          </div>
        </div>

        <ol className="trajectory" aria-label="Selected project chronology">
          {trajectory.map((item) => (
            <li key={`${item.year}-${item.title}`}>
              <span>{item.year}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <p className="contact-preface">Have a difficult problem?</p>
        <h2 id="contact-title">Bring me the messy part.</h2>
        <p className="contact-copy">
          If it has too much information, too many constraints, or no obvious starting point, I want to hear
          about it.
        </p>
        <div className="contact-links">
          <a href={`mailto:${publicEmail}`}>
            Email <ArrowUpRight aria-hidden="true" size={20} />
          </a>
          <a href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub")}>
            GitHub <ArrowUpRight aria-hidden="true" size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/affan-nadeem-9b4aa0250/"
            {...externalLinkProps("Affan Nadeem LinkedIn")}
          >
            LinkedIn <ArrowUpRight aria-hidden="true" size={20} />
          </a>
        </div>
        <div className="contact-signature" aria-hidden="true">
          AFFAN NADEEM
        </div>
      </section>
    </main>
  );
}
