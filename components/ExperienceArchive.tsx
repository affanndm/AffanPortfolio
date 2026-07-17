import { ArrowUpRight } from "lucide-react";
import { ExperienceTabsController } from "@/components/interactive/ExperienceTabsController";
import { externalLinkProps } from "@/lib/utils";

type ExperienceEntry = {
  title: string;
  meta: string;
  detail: string;
};

type ExperienceGroup = {
  id: "experience" | "competition" | "school";
  label: string;
  entries: ExperienceEntry[];
};

const experienceGroups: ExperienceGroup[] = [
  {
    id: "experience",
    label: "Experience",
    entries: [
      {
        title: "Milliken Moments",
        meta: "Current experience / Markham, Ontario",
        detail: "A part of the story that happens through a school publication, not a source repository.",
      },
      {
        title: "Project Vantage",
        meta: "Project / Feb 2026 — Present",
        detail: "A competition project that became an ongoing exercise in product, trust, and teamwork.",
      },
    ],
  },
  {
    id: "competition",
    label: "Competition",
    entries: [
      {
        title: "FBLC Coding & Programming",
        meta: "Feb 2026 / Canada",
        detail: "National finalist — 2nd place in Canada. Qualified for NLC.",
      },
      {
        title: "DECA Ontario PFN",
        meta: "Feb 2025 / Provincials",
        detail: "Provincials finalist — Top 20 overall.",
      },
      {
        title: "DECA Regionals PFN",
        meta: "Nov 2024 / Regionals",
        detail: "Finals qualifier, Top 10 roleplay, and 2nd place overall.",
      },
    ],
  },
  {
    id: "school",
    label: "School",
    entries: [
      {
        title: "Milliken Mills High School",
        meta: "2024 — 2028",
        detail: "Learning across technology, business, communication, and the spaces between them.",
      },
      {
        title: "Outside the timetable",
        meta: "Activities",
        detail: "Milliken Business Organization and Target Alpha.",
      },
      {
        title: "Language matters too",
        meta: "Feb 2025 / Grade 9",
        detail: "English Award and French Award.",
      },
    ],
  },
];

export function ExperienceArchive() {
  return (
    <section
      id="experience"
      className="fn-experience"
      aria-labelledby="experience-title"
      data-experience-tabs
      data-active="experience"
    >
      <header className="fn-experience-heading">
        <p>Experience / competition / school</p>
        <h2 id="experience-title">The work that doesn&apos;t live in a repo.</h2>
        <a
          href="https://www.linkedin.com/in/affan-nadeem-9b4aa0250/"
          {...externalLinkProps("Affan Nadeem LinkedIn profile")}
        >
          Full record on LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </header>

      <div className="fn-experience-tabs" role="tablist" aria-label="More about Affan">
        {experienceGroups.map((group, index) => (
          <button
            id={`experience-tab-${group.id}`}
            type="button"
            role="tab"
            aria-selected={index === 0}
            aria-controls={`experience-panel-${group.id}`}
            tabIndex={index === 0 ? 0 : -1}
            data-experience-tab={group.id}
            key={group.id}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {group.label}
            <small>{String(group.entries.length).padStart(2, "0")}</small>
          </button>
        ))}
      </div>

      <div className="fn-experience-panels">
        {experienceGroups.map((group, groupIndex) => (
          <div
            id={`experience-panel-${group.id}`}
            role="tabpanel"
            aria-labelledby={`experience-tab-${group.id}`}
            tabIndex={0}
            data-experience-panel={group.id}
            data-active={groupIndex === 0}
            key={group.id}
          >
            <ol className="fn-experience-list">
              {group.entries.map((entry, index) => (
                <li key={entry.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{entry.meta}</p>
                    <h3>{entry.title}</h3>
                  </div>
                  <p>{entry.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="fn-experience-word" aria-hidden="true">
        <span>MORE</span><span>THAN</span><span>CODE</span>
      </div>
      <ExperienceTabsController />
    </section>
  );
}
