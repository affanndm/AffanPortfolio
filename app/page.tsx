import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PortfolioMotion } from "@/components/interactive/PortfolioMotion";
import { ProjectDrawer } from "@/components/interactive/ProjectDrawer";
import { flagshipProjects, publicEmail } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

const vantage = flagshipProjects[0];

export default function HomePage() {
  return (
    <main id="main" className="filippo-rebuild">
      <PortfolioMotion />

      <section className="fn-hero" aria-labelledby="hero-title" data-hero>
        <div className="fn-corners" aria-hidden="true">
          <i /><i /><i /><i />
        </div>

        <div className="fn-hero-meta fn-meta-left">
          <strong>AFFAN NADEEM</strong>
          <span>PERSONAL PORTFOLIO / 2026</span>
        </div>
        <nav className="fn-local-nav" aria-label="Homepage navigation">
          <a href="#work">Work</a>
          <Link href="/projects/vantage">Vantage</Link>
          <a href={`mailto:${publicEmail}`}>Contact</a>
        </nav>
        <div className="fn-hero-meta fn-meta-right">
          <strong>SELECTED WORK</strong>
          <span>FULL-STACK / SYSTEMS</span>
        </div>

        <div className="fn-year" aria-hidden="true">
          <span>20</span><span>26</span>
        </div>

        <h1 id="hero-title" className="fn-name" aria-label="Affan Nadeem">
          <span className="fn-name-line fn-name-affan" data-name-line aria-hidden="true">Affan</span>
          <span className="fn-name-line fn-name-nadeem" data-name-line aria-hidden="true">Nadeem</span>
        </h1>

        <div className="fn-artifact" data-artifact aria-hidden="true">
          <div className="fn-artifact-shadow" />
          {[0, 1, 2, 3, 4].map((slice) => (
            <div className={`fn-artifact-slice fn-artifact-slice-${slice + 1}`} key={slice}>
              <Image
                src="/media/vantage/live-home.png"
                alt=""
                fill
                priority={slice === 0}
                sizes="(max-width: 640px) 70vw, 34vw"
              />
            </div>
          ))}
          <div className="fn-artifact-spine" />
        </div>

        <div className="fn-hero-index" aria-hidden="true"><span>(01)</span><span>(02)</span></div>
        <div className="fn-hero-bottom">
          <span>PRODUCT ENGINEERING / SCIENTIFIC COMPUTING</span>
          <a href="#work">SCROLL TO VANTAGE <ArrowDown size={14} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="work" className="fn-vantage-transition" aria-labelledby="vantage-title">
        <div className="fn-vantage-sticky">
          <div className="fn-vantage-heading">
            <span>(01) / SELECTED PROJECT</span>
            <h2 id="vantage-title">Vantage</h2>
            <p>Trust-first local discovery</p>
          </div>

          <div className="fn-project-portal" data-project-portal>
            <Image
              src="/media/vantage/live-home.png"
              alt="Vantage local discovery homepage showing the public product interface."
              fill
              priority
              sizes="(max-width: 640px) 100vw, 92vw"
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
        <p>
          Helping local discovery feel less like a noisy list and more like a trusted path to relevant businesses.
        </p>
        <div className="fn-end-links">
          <Link href="/projects/vantage">Read the case study <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <a href={vantage.liveUrl} {...externalLinkProps("Open the Vantage live site")}>Live site <ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href={vantage.repoUrl} {...externalLinkProps("Open the Vantage source repository")}>Source <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <footer className="fn-review-footer">
          <span>FIRST-SEQUENCE REVIEW BUILD</span>
          <div>
            <a href={`mailto:${publicEmail}`}>Email</a>
            <a href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub")}>GitHub</a>
            <a href="https://www.linkedin.com/in/affan-nadeem-9b4aa0250/" {...externalLinkProps("Affan Nadeem LinkedIn")}>LinkedIn</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
