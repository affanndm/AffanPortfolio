/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element -- native navigation and pre-optimized local images keep the public homepage free of avoidable client boundaries */
import { ArrowUpRight } from "lucide-react";
import { LaneHero } from "@/components/LaneHero";
import { PortfolioMotion } from "@/components/interactive/PortfolioMotion";
import { LabIndex } from "@/components/LabIndex";
import { ProjectDrawer } from "@/components/interactive/ProjectDrawer";
import { ScrollFloatText } from "@/components/react-bits/ScrollFloatText";
import { WorkRail } from "@/components/WorkRail";
import { flagshipProjects, labItems, publicEmail, trajectory } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

const vantage = flagshipProjects[0];
const grnalytics = flagshipProjects[1];

export default function HomePage() {
  return (
    <main id="main" className="filippo-rebuild">
      <PortfolioMotion />

      <LaneHero />

      <section id="vantage" className="fn-vantage-transition" aria-labelledby="vantage-title">
        <div className="fn-vantage-sticky">
          <div className="fn-vantage-heading">
            <span>(01) / SELECTED PROJECT</span>
            <h2 id="vantage-title">Vantage</h2>
            <p>Trust-first local discovery</p>
          </div>

          <div className="fn-project-portal" data-project-portal>
            <img
              src="/media/vantage/live-home-750.webp"
              srcSet="/media/vantage/live-home-750.webp 750w, /media/vantage/live-home-1600.webp 1440w"
              alt="Vantage local discovery homepage showing the public product interface."
              sizes="(max-width: 640px) 100vw, 92vw"
              width="1440"
              height="900"
              loading="lazy"
            />
            <div className="fn-project-wash" aria-hidden="true" />
            <div className="fn-project-frame" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="fn-project-caption">
              <span>LIVE PRODUCT CAPTURE</span>
              <span>DISCOVERY / TRUST / ACTION</span>
            </div>
            <ProjectDrawer project={vantage} />
          </div>

          <div className="fn-vantage-meta">
            <span>VANTAGE</span>
            <span>FULL-STACK CONTRIBUTOR</span>
            <span>TEAM PROJECT / 2026</span>
          </div>
        </div>
      </section>

      <section className="fn-vantage-end" aria-label="Vantage project entry">
        <div className="fn-end-index"><span>(01)</span><span>PROJECT ENTRY</span></div>
        <ScrollFloatText text="Helping local discovery feel less like a noisy list and more like a trusted path to relevant businesses." />
        <div className="fn-end-links">
          <a href="/projects/vantage">Read the case study <ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href={vantage.liveUrl} {...externalLinkProps("Open the Vantage live site")}>Live site <ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href={vantage.repoUrl} {...externalLinkProps("Open the Vantage source repository")}>Source <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <WorkRail projects={flagshipProjects} labItems={labItems} />

      <section id="grnalytics" className="fn-grna" aria-labelledby="grna-title">
        <header className="fn-grna-heading">
          <span>02 / SCIENTIFIC COMPUTING</span>
          <h2 id="grna-title" aria-label="gRNAlytics"><i aria-hidden="true">gRNA</i><b aria-hidden="true">lytics</b></h2>
          <p>CRISPR guide-RNA comparison</p>
        </header>

        <div className="fn-grna-stage" data-grna-stage>
          <div className="fn-sequence-field" aria-hidden="true">
            {"ATCGGCTAACGTTAGCGTAC".split("").map((base, index) => (
              <span key={`${base}-${index}`}>{base}</span>
            ))}
          </div>
          <div className="fn-grna-terminal" aria-hidden="true">
            <span>$ python main.py</span>
            <strong>SEARCH / ANNOTATE / SCORE / COMPARE</strong>
            <small>Decision support, not biological validation.</small>
          </div>
          <ol className="fn-grna-flow" aria-label="gRNAlytics software flow">
            <li><span>01</span><strong>Validate</strong><small>A / T / C / G</small></li>
            <li><span>02</span><strong>BLAST</strong><small>Human records</small></li>
            <li><span>03</span><strong>Annotate</strong><small>Genes / matches</small></li>
            <li><span>04</span><strong>Compare</strong><small>Heuristic score</small></li>
          </ol>
          <ProjectDrawer project={grnalytics} />
        </div>

        <div className="fn-grna-story">
          <p>{grnalytics.signal}</p>
          <div>
            <span>{grnalytics.role}</span>
            <span>{grnalytics.team} / {grnalytics.year}</span>
          </div>
          <nav aria-label="gRNAlytics links">
            <a href="/projects/grnalytics">Read the case study <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href={grnalytics.repoUrl} {...externalLinkProps("Open the gRNAlytics source repository")}>Source <ArrowUpRight size={18} aria-hidden="true" /></a>
          </nav>
        </div>
      </section>

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
