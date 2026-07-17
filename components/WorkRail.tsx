import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { LabItem, Project } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

type WorkRailProps = {
  projects: Project[];
  labItems: LabItem[];
};

const workRailRuntime = String.raw`
(() => {
  const section = document.querySelector("[data-work-rail]");
  if (!section || section.__affanBound) return;
  section.__affanBound = true;
  const track = section.querySelector("[data-work-track]");
  const previous = section.querySelector("[data-work-previous]");
  const next = section.querySelector("[data-work-next]");
  if (!track) return;
  const move = (direction) => track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: "smooth" });
  previous?.addEventListener("click", () => move(-1));
  next?.addEventListener("click", () => move(1));
})();`;

export function WorkRail({ projects, labItems }: WorkRailProps) {
  const entries = [
    ...projects.map((project) => ({
      slug: project.slug,
      title: project.title,
      year: project.year,
      role: project.role,
      href: `#${project.slug}`,
      source: project.repoUrl,
      tone: project.accent,
      index: project.slug === "vantage" ? "01" : "02",
    })),
    {
      slug: "affan-portfolio",
      title: "This Portfolio",
      year: "2026",
      role: "Next.js / motion / Vercel",
      href: "#main",
      source: "https://github.com/affanndm/AffanPortfolio",
      tone: "portfolio",
      index: "03",
    },
    ...labItems.map((item, index) => ({
      slug: item.slug,
      title: item.title,
      year: item.year,
      role: item.category,
      href: `#lab-${item.slug}`,
      source: item.repoUrl,
      tone: item.visual,
      index: String(index + 4).padStart(2, "0"),
    })),
  ];

  return (
    <section id="all-work" className="fn-work-rail" aria-labelledby="all-work-title" data-work-rail>
      <header className="fn-work-rail-heading">
        <p>Every verified build / contribution / archive</p>
        <h2 id="all-work-title">Choose the work.</h2>
        <div className="fn-work-controls">
          <span>{String(entries.length).padStart(2, "0")} entries</span>
          <button type="button" data-work-previous aria-label="Show previous work"><ArrowLeft aria-hidden="true" size={18} /></button>
          <button type="button" data-work-next aria-label="Show next work"><ArrowRight aria-hidden="true" size={18} /></button>
        </div>
      </header>

      <ul className="fn-work-track" aria-label="All portfolio work" data-work-track>
        {entries.map((entry) => (
          <li className={`fn-work-choice fn-work-choice-${entry.tone}`} key={entry.slug}>
            <a className="fn-work-choice-main" href={entry.href}>
              <span>{entry.index} / {entry.year}</span>
              <strong>{entry.title}</strong>
              <small>{entry.role}</small>
              <ArrowDownRight aria-hidden="true" size={26} />
            </a>
            {entry.source ? (
              <a className="fn-work-source" href={entry.source} {...externalLinkProps(`${entry.title} source repository`)}>
                Source <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="fn-work-rail-hint">Drag or swipe horizontally / select any title to jump into the work.</p>
      <script dangerouslySetInnerHTML={{ __html: workRailRuntime }} />
    </section>
  );
}
