import { ArrowUpRight } from "lucide-react";
import { LaneHero } from "@/components/LaneHero";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { PortfolioMotion } from "@/components/interactive/PortfolioMotion";
import { LabIndex } from "@/components/LabIndex";
import { flagshipProjects, labItems, publicEmail, trajectory } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

export default function HomePage() {
  return (
    <main id="main" className="filippo-rebuild">
      <PortfolioMotion />

      <LaneHero />

      <ProjectCarousel projects={flagshipProjects} labItems={labItems} />

      <section id="lab" className="fn-lab" aria-labelledby="lab-title">
        <div className="fn-lab-marquee" aria-hidden="true">
          <span>BUILD / BREAK / UNDERSTAND / REPEAT / BUILD / BREAK / UNDERSTAND / REPEAT</span>
        </div>
        <header className="fn-lab-heading">
          <p>Owned repositories, experiments, and honest archive states.</p>
          <h2 id="lab-title">The rest of the work is part of the story.</h2>
          <a href="/lab">Open the full lab <ArrowUpRight size={18} aria-hidden="true" /></a>
        </header>
        <LabIndex items={labItems} />
      </section>

      <section id="about" className="fn-about" aria-labelledby="about-title">
        <div className="fn-about-intro">
          <span>AFFAN / BEYOND THE PROJECT FILES</span>
          <h2 id="about-title">I like problems with too much information and no obvious first move.</h2>
        </div>

        <div className="fn-about-body">
          <div className="fn-about-mark" aria-hidden="true">
            <span>A</span><span>N</span><i>TORONTO / 2026</i>
          </div>
          <div className="fn-about-copy">
            <p>I work across product engineering, scientific computing, algorithms, and the visual systems that make complicated work easier to understand.</p>
            <p>Vantage taught me to think about trust and useful action. gRNAlytics made uncertainty part of the interface. The smaller projects show the path between them.</p>
            <div className="fn-profile-links">
              <a href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub profile")}>GitHub / code history <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/affan-nadeem-9b4aa0250/" {...externalLinkProps("Affan Nadeem LinkedIn profile")}>LinkedIn / full profile <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <ol className="fn-trajectory" aria-label="Selected project chronology">
          {trajectory.map((item) => (
            <li key={`${item.year}-${item.title}`}>
              <span>{item.year}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="fn-contact" aria-labelledby="contact-title">
        <p>Have a difficult problem?</p>
        <h2 id="contact-title">Bring me the <span>messy part.</span></h2>
        <a className="fn-contact-email" href={`mailto:${publicEmail}`}>{publicEmail} <ArrowUpRight size={26} aria-hidden="true" /></a>
        <div className="fn-contact-links">
          <a href={`mailto:${publicEmail}`}>Email</a>
          <a href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub")}>GitHub</a>
          <a href="https://www.linkedin.com/in/affan-nadeem-9b4aa0250/" {...externalLinkProps("Affan Nadeem LinkedIn")}>LinkedIn</a>
          <a href="#main">Back to top</a>
        </div>
        <div className="fn-contact-signature" aria-hidden="true"><span>AFFAN</span><span>NADEEM</span></div>
      </section>
    </main>
  );
}
