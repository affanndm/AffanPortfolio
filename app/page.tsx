import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-coordinate hero-coordinate-left" aria-hidden="true">
          43.6532° N / 79.3832° W
        </div>
        <div className="hero-coordinate hero-coordinate-right" aria-hidden="true">
          PORTFOLIO / 2026
        </div>

        <div className="signal-sculpture" aria-hidden="true">
          <div className="sculpture-orbit sculpture-orbit-one" />
          <div className="sculpture-orbit sculpture-orbit-two" />
          <div className="sculpture-orbit sculpture-orbit-three" />
          <div className="sculpture-core">
            <Image src="/media/vantage/live-home.png" alt="" fill priority sizes="420px" />
          </div>
          <div className="sculpture-slice sculpture-slice-a" />
          <div className="sculpture-slice sculpture-slice-b" />
          <div className="sculpture-slice sculpture-slice-c" />
          <span className="sculpture-dot sculpture-dot-a" />
          <span className="sculpture-dot sculpture-dot-b" />
        </div>

        <div className="hero-stage">
          <div className="hero-kicker">
            <span>Software / science / systems</span>
            <span>Available for the next difficult problem</span>
          </div>

          <h1 id="hero-title" className="hero-name" aria-label="Affan Nadeem">
            <span className="hero-line hero-line-one" data-hero-line>
              AFFAN
            </span>
            <span className="hero-line hero-line-two" data-hero-line>
              NADEEM
            </span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-positioning">
              Developer working where <em>complexity</em> needs an interface.
            </p>
            <div className="hero-intro">
              <p>
                I turn crowded search spaces into software people can actually move through—from local
                discovery to computational biology.
              </p>
              <div className="hero-actions">
                <a className="text-link" href="#work">
                  See selected work <ArrowDown aria-hidden="true" size={17} />
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
          <div className="work-opening-index" aria-hidden="true">
            <span>(01)</span>
            <i />
            <span>FEATURED BUILDS</span>
          </div>
          <h2 id="work-title" className="work-title">
            Selected <span className="serif-word">work</span> for problems with no obvious starting point.
          </h2>
          <p className="work-deck">
            Two team-built systems. Two very different domains. One recurring instinct: make the evidence
            legible and the next decision easier.
          </p>
        </div>

        <div className="work-layout">
          <aside className="work-manifesto">
            <span className="work-count">02 / PROJECTS</span>
            <p>Move through the work. Select a project to open its side-stage preview.</p>
            <div className="manifesto-orbit" aria-hidden="true">
              <span />
              <span />
              <i>AN</i>
            </div>
          </aside>
          <div className="project-reel">
            {flagshipProjects.map((project, index) => (
              <ProjectTrailer key={project.slug} project={project} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="lab-section" aria-labelledby="lab-title">
        <div className="lab-marquee" aria-hidden="true">
          <span>BUILD / BREAK / UNDERSTAND / REPEAT / BUILD / BREAK / UNDERSTAND / REPEAT</span>
        </div>
        <div className="lab-heading">
          <p>Experiments, side quests, and earlier systems.</p>
          <h2 id="lab-title">
            The <span>lab</span> is where curiosity becomes something you can run.
          </h2>
        </div>
        <LabIndex items={labItems} />
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-topline">
          <span>(03) / ABOUT AFFAN</span>
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
          <div className="about-portrait" aria-hidden="true">
            <div className="portrait-ring portrait-ring-one" />
            <div className="portrait-ring portrait-ring-two" />
            <div className="portrait-type">A</div>
            <div className="portrait-type portrait-type-outline">N</div>
            <span>SOFTWARE × SCIENCE</span>
          </div>
          <div className="about-copy">
            <p>
              I work across product engineering, scientific computing, and algorithms. In Vantage, that
              means discovery, trust, and useful product paths. In gRNAlytics, it means making search output
              easier to compare without hiding uncertainty.
            </p>
            <p>
              The domains change. The pattern does not: too much information, too many constraints, and a
              system waiting to be made understandable.
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
        <div className="contact-grid" aria-hidden="true" />
        <p className="contact-preface">Have a difficult problem?</p>
        <h2 id="contact-title">
          Bring me the <span>messy part.</span>
        </h2>
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
          <span>AFFAN</span>
          <span>NADEEM</span>
        </div>
      </section>
    </main>
  );
}
