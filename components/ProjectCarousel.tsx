/* eslint-disable @next/next/no-img-element -- the Vantage capture is already locally optimized at two responsive sizes */
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectDrawer } from "@/components/interactive/ProjectDrawer";
import { ProjectCarouselController } from "@/components/interactive/ProjectCarouselController";
import type { LabItem, Project } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

type CarouselEntry = {
  slug: string;
  title: string;
  year: string;
  role: string;
  mode: string;
  discipline: string;
  summary: string;
  visual: "vantage" | "grnalytics" | "portfolio" | "solutions" | "editorial" | "archive";
  caseHref?: string;
  repoUrl?: string;
  liveUrl?: string;
  project?: Project;
};

export function ProjectCarousel({ projects, labItems }: { projects: Project[]; labItems: LabItem[] }) {
  const [vantage, grnalytics] = projects;
  const labBySlug = new Map(labItems.map((item) => [item.slug, item]));
  const solutions = labBySlug.get("solutions")!;
  const english = labBySlug.get("english-metacognition")!;
  const firstDomain = labBySlug.get("first-domain")!;

  const entries: CarouselEntry[] = [
    {
      slug: vantage.slug,
      title: vantage.title,
      year: vantage.year,
      role: vantage.role,
      mode: vantage.team,
      discipline: "Discovery / trust / action",
      summary: vantage.signal,
      visual: "vantage",
      caseHref: "/projects/vantage",
      repoUrl: vantage.repoUrl,
      liveUrl: vantage.liveUrl,
      project: vantage,
    },
    {
      slug: grnalytics.slug,
      title: grnalytics.title,
      year: grnalytics.year,
      role: grnalytics.role,
      mode: grnalytics.team,
      discipline: "Scientific computing / comparison",
      summary: grnalytics.signal,
      visual: "grnalytics",
      caseHref: "/projects/grnalytics",
      repoUrl: grnalytics.repoUrl,
      project: grnalytics,
    },
    {
      slug: "affan-portfolio",
      title: "This Portfolio",
      year: "2026",
      role: "Designer / developer",
      mode: "Solo build",
      discipline: "Identity / motion / frontend",
      summary: "A production Next.js portfolio where typography, interaction, and project evidence are designed as one personal system.",
      visual: "portfolio",
      repoUrl: "https://github.com/affanndm/AffanPortfolio",
    },
    {
      slug: solutions.slug,
      title: solutions.title,
      year: solutions.year,
      role: solutions.ownership,
      mode: solutions.statusLabel,
      discipline: solutions.category,
      summary: solutions.summary,
      visual: "solutions",
      repoUrl: solutions.repoUrl,
    },
    {
      slug: english.slug,
      title: english.title,
      year: english.year,
      role: english.ownership,
      mode: english.statusLabel,
      discipline: english.category,
      summary: english.summary,
      visual: "editorial",
      repoUrl: english.repoUrl,
    },
    {
      slug: firstDomain.slug,
      title: firstDomain.title,
      year: firstDomain.year,
      role: firstDomain.ownership,
      mode: firstDomain.statusLabel,
      discipline: firstDomain.category,
      summary: firstDomain.summary,
      visual: "archive",
      repoUrl: firstDomain.repoUrl,
    },
  ];

  return (
    <section
      id="all-work"
      className="fn-project-carousel"
      aria-labelledby="project-carousel-title"
      aria-roledescription="carousel"
      role="region"
      data-project-carousel
    >
      <div className="fn-carousel-sticky" data-carousel-sticky>
        <header className="fn-carousel-heading">
          <p>Six projects / equal stage time</p>
          <h2 id="project-carousel-title">Choose what to open.</h2>
          <div className="fn-carousel-controls">
            <button type="button" data-carousel-previous aria-label="Show previous project"><ArrowLeft aria-hidden="true" size={18} /></button>
            <p className="fn-carousel-status" data-carousel-status aria-atomic="true">Project 1 of {entries.length}: {entries[0].title}</p>
            <button type="button" data-carousel-next aria-label="Show next project"><ArrowRight aria-hidden="true" size={18} /></button>
          </div>
        </header>

        <div className="fn-carousel-track" data-carousel-track>
          {entries.map((entry, index) => (
            <div
              className={`fn-carousel-slide fn-carousel-slide-${entry.visual}`}
              id={`work-${entry.slug}`}
              key={entry.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${entries.length}: ${entry.title}`}
              data-carousel-slide
              data-title={entry.title}
              data-motion={entry.visual}
              data-active={index === 0 ? "true" : "false"}
            >
              <ProjectArtwork entry={entry} />
              <div className="fn-carousel-copy">
                <div className="fn-carousel-number"><span>{String(index + 1).padStart(2, "0")}</span><small>/ {String(entries.length).padStart(2, "0")}</small></div>
                <div className="fn-carousel-title-block">
                  <h3>{entry.title}</h3>
                  <p>{entry.summary}</p>
                </div>
                <dl>
                  <div><dt>Year</dt><dd>{entry.year}</dd></div>
                  <div><dt>Role</dt><dd>{entry.role}</dd></div>
                  <div><dt>Mode</dt><dd>{entry.mode}</dd></div>
                  <div><dt>Field</dt><dd>{entry.discipline}</dd></div>
                </dl>
                <div className="fn-carousel-actions">
                  {entry.caseHref ? <a href={entry.caseHref}>Case study <ArrowUpRight aria-hidden="true" size={17} /></a> : null}
                  {entry.liveUrl ? <a href={entry.liveUrl} {...externalLinkProps(`${entry.title} live site`)}>Live <ArrowUpRight aria-hidden="true" size={17} /></a> : null}
                  {entry.repoUrl ? <a href={entry.repoUrl} {...externalLinkProps(`${entry.title} source repository`)}>Source <ArrowUpRight aria-hidden="true" size={17} /></a> : null}
                </div>
              </div>
              {entry.project ? <ProjectDrawer project={entry.project} /> : null}
            </div>
          ))}
        </div>

        <div className="fn-carousel-tabs" role="group" aria-label="Choose a project">
          {entries.map((entry, index) => (
            <button
              type="button"
              aria-pressed={index === 0}
              aria-controls={`work-${entry.slug}`}
              tabIndex={index === 0 ? 0 : -1}
              data-carousel-tab
              key={entry.slug}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>{entry.title}
            </button>
          ))}
        </div>
      </div>
      <ProjectCarouselController />
    </section>
  );
}

function ProjectArtwork({ entry }: { entry: CarouselEntry }) {
  if (entry.visual === "vantage") {
    return (
      <div className="fn-carousel-art fn-carousel-art-vantage" aria-hidden="true">
        <img src="/media/vantage/live-home-750.webp" srcSet="/media/vantage/live-home-750.webp 750w, /media/vantage/live-home-1600.webp 1440w" sizes="(max-width: 999px) 88vw, 58vw" width="1440" height="900" alt="" loading="lazy" />
        <div className="fn-vantage-slice fn-vantage-slice-a" /><div className="fn-vantage-slice fn-vantage-slice-b" />
        <span>DISCOVER NEARBY</span>
      </div>
    );
  }

  if (entry.visual === "grnalytics") {
    return (
      <div className="fn-carousel-art fn-carousel-art-grna" aria-hidden="true">
        <div className="fn-grna-strand">{"ATCGGCTAACGT".split("").map((base, index) => <span key={`${base}-${index}`}>{base}</span>)}</div>
        <div className="fn-grna-route"><i /><b>VALIDATE</b><i /><b>BLAST</b><i /><b>COMPARE</b></div>
        <strong>gRNA<em>lytics</em></strong>
      </div>
    );
  }

  if (entry.visual === "portfolio") {
    return (
      <div className="fn-carousel-art fn-carousel-art-portfolio" aria-hidden="true">
        <span>AFFAN / BUILDER</span><span>AFFAN / COMPETITOR</span><span>AFFAN / BIOLOGY</span><span>AFFAN / OFF-SCREEN</span>
        <div className="fn-portfolio-reticle"><i /></div>
      </div>
    );
  }

  if (entry.visual === "solutions") {
    return (
      <div className="fn-carousel-art fn-carousel-art-solutions" aria-hidden="true">
        <pre><code>{`def solve(nums):\n    seen = set()\n    for value in nums:\n        if target - value in seen:\n            return True`}</code></pre>
        <div className="fn-solution-nodes"><i /><i /><i /><i /><i /><i /></div>
        <strong>CONSTRAINT → CHOICE → CODE</strong>
      </div>
    );
  }

  if (entry.visual === "editorial") {
    return (
      <div className="fn-carousel-art fn-carousel-art-editorial" aria-hidden="true">
        <div className="fn-editorial-page page-one"><small>REFLECTION / 01</small><strong>READ.<br />THINK.<br />REVISE.</strong></div>
        <div className="fn-editorial-page page-two"><small>METACOGNITION</small><p>What changed<br />while I learned?</p></div>
        <div className="fn-editorial-page page-three"><span>ENGLISH<br />PORTFOLIO</span></div>
      </div>
    );
  }

  return (
    <div className="fn-carousel-art fn-carousel-art-archive" aria-hidden="true">
      <div className="fn-archive-window"><span>affannadeem.me</span><i /></div>
      <strong>{"// 01"}</strong>
      <p>CNAME<br />README<br />THE FIRST PUBLIC MARK</p>
    </div>
  );
}
