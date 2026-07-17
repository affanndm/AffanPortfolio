"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const reviewNotes = {
  identityA: {
    principle: "The name is the first piece of media.",
    transformation: "Affan's initials become a measured set of sliding typographic plates, like a competition bracket being assembled.",
    distinction: "No broken-word spelling, coral palette, 3D glass object, or borrowed loader behavior.",
    material: "A short phrase Affan uses to describe what he is building now.",
    mobile: "The plates become four readable rows; the full name remains available to assistive technology.",
    reduced: "All plates resolve to their final aligned positions with no entrance travel.",
  },
  identityB: {
    principle: "Typography and interaction are the content surface, not decoration around it.",
    transformation: "The name becomes a competition-style lane field. A live scanner replaces letters with Affan's actual identities, so the artwork itself reveals the information.",
    distinction: "The visual logic comes from lanes, lap marks, and personal roles—not Filippo's split serif wordmark.",
    material: "Confirmation of the preferred role order and whether 'competitor' should lead or follow 'developer'.",
    mobile: "The lanes stack vertically and the pointer effect becomes a static focal shift.",
    reduced: "Pointer depth and lane drift are removed; contrast and hierarchy remain intact.",
  },
  identityC: {
    principle: "Identity can unfold before explanation.",
    transformation: "A monumental surname is annotated by a rotating index of student, builder, algorithms, biology, and life.",
    distinction: "It uses Affan's own identity vocabulary and an ultramarine field instead of the reference palette and visual objects.",
    material: "One non-coding interest and one current obsession in Affan's own words.",
    mobile: "Annotations become a persistent list under the name rather than orbiting metadata.",
    reduced: "The annotation index is shown all at once; no rotation or cursor response.",
  },
  menu: {
    principle: "Navigation is a full scene, not a utility popover.",
    transformation: "The menu reads like an index to a person: About, Work, Playground, Life, Contact.",
    distinction: "Its blue ledger, role summary, and visible keyboard instructions are Affan-specific.",
    material: "Preferred contact language and confirmation of any public resume link.",
    mobile: "The same five destinations fill the screen with larger tap targets and persistent close control.",
    reduced: "Open and close switch instantly with a short color crossfade only.",
  },
  system: {
    principle: "Expose the design system as part of the performance.",
    transformation: "A calibration sequence reveals Affan's canvas, ultramarine signature, type, grid, and interaction modes.",
    distinction: "Different palette, proportions, typography, copy, and reveal choreography.",
    material: "Final type licensing decision and whether blue should remain the signature color.",
    mobile: "Calibration steps become a horizontally scrollable control strip with one active readout.",
    reduced: "All system values remain visible; stage changes do not animate position.",
  },
  about: {
    principle: "Biography is image-led, specific, and allowed to be funny.",
    transformation: "Affan is introduced through roles, questions, and requested personal artifacts rather than a professional summary.",
    distinction: "No travel-photo imitation or borrowed captions; every placeholder requests an Affan-owned story.",
    material: "Candid portrait, first-code story, biology object, competition memory, and life-outside-code detail.",
    mobile: "The pull quote leads, then the artifact column alternates with short text blocks.",
    reduced: "The editorial layout is unchanged; image reveals become static.",
  },
  personal: {
    principle: "Small personal images create authorship between major sections.",
    transformation: "A field-notes sequence pairs exact requested photographs with short draft caption prompts.",
    distinction: "No stock photography and no recreation of Filippo's camera/travel narrative.",
    material: "Six Affan-owned images with permission and the real context for each.",
    mobile: "The sequence uses native horizontal scrolling with a visible next-frame cue.",
    reduced: "No parallax or clip reveal; native scrolling and all captions remain.",
  },
  work: {
    principle: "Work arrives after the person, through an image-rich index.",
    transformation: "Vantage and gRNAlytics lead an Affan-specific roster with role and team status always visible.",
    distinction: "The metadata and project media are sourced from Affan's evidence system, not the reference's client list or hover screen.",
    material: "Approved poster or short silent recording for each selected project and confirmation of the third independent build.",
    mobile: "Rows become vertical project posters with persistent metadata and explicit open actions.",
    reduced: "Hover previews resolve to posters; no media swapping or row displacement.",
  },
};

type ReviewNote = (typeof reviewNotes)[keyof typeof reviewNotes];

const systemStages = [
  { label: "Canvas", value: "#0D0F12", detail: "A neutral black stage. No signal metaphor required." },
  { label: "Signature", value: "#3157FF", detail: "Ultramarine: precise, youthful, and distinct from the coral reference." },
  { label: "Type", value: "Geist / Georgia", detail: "Existing production-safe voices, manipulated through composition rather than imitation." },
  { label: "Grid", value: "12 / 6 / 4", detail: "A responsive editorial frame with deliberate breaks for identity and personal media." },
  { label: "Interaction", value: "Pointer / key / scroll", detail: "Every expressive mode has keyboard, touch, and reduced-motion behavior." },
];

const personalFrames = [
  ["01", "Hackathon room", "A candid moment before the demo, not a posed team portrait."],
  ["02", "Workspace at 1:13 AM", "The real desk, including the object that makes no professional sense."],
  ["03", "Biology object", "A microscope, diagram, lab note, or book that connects software to biology."],
  ["04", "Competition evidence", "Badge, notebook, lanyard, problem sheet, or post-event photo."],
  ["05", "Bug of the year", "A screenshot of an absurd failure with the story behind it."],
  ["06", "No code here", "One image that would never appear in a GitHub README."],
];

const workItems = [
  { title: "Vantage", year: "2026", role: "Full-stack contributor", discipline: "Product / discovery", team: "Team project", tone: "amber" },
  { title: "gRNAlytics", year: "2026", role: "Computational biology contributor", discipline: "Scientific computing", team: "Team project", tone: "cyan" },
  { title: "Solutions", year: "2026", role: "Builder", discipline: "Algorithms", team: "Solo archive", tone: "blue" },
  { title: "Next experiment", year: "Now", role: "NEEDS_AFFAN_CONFIRMATION", discipline: "Independent build", team: "Solo", tone: "white" },
];

export function FilippoStudy() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [systemStage, setSystemStage] = useState(0);
  const [affanMode, setAffanMode] = useState(false);
  const identityBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "a" && !event.metaKey && !event.ctrlKey && !event.altKey) {
        setAffanMode((current) => !current);
      }
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const moveIdentity = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = identityBRef.current;
    if (!element || event.pointerType === "touch") return;
    const bounds = element.getBoundingClientRect();
    const left = ((event.clientX - bounds.left) / bounds.width) * 100;
    const top = ((event.clientY - bounds.top) / bounds.height) * 100;
    const x = left / 100 - 0.5;
    element.style.setProperty("--pointer-x", x.toFixed(3));
    element.style.setProperty("--pointer-left", `${left.toFixed(2)}%`);
    element.style.setProperty("--pointer-top", `${top.toFixed(2)}%`);
  };

  return (
    <main id="main" className={`filippo-study ${affanMode ? "is-affan-mode" : ""}`}>
      <header className="study-bar">
        <Link href="/design-lab">← Design lab</Link>
        <span>Affan-first direction study / review only</span>
        <nav aria-label="Study sections">
          <a href="#identity-a">A</a>
          <a href="#identity-b">B</a>
          <a href="#identity-c">C</a>
          <a href="#menu-study">Menu</a>
          <a href="#work-study">Work</a>
        </nav>
      </header>

      <section className="study-intro" aria-labelledby="study-title">
        <div>
          <p className="study-code">DIRECTION SELECTED / B — LANES</p>
          <h1 id="study-title">The portfolio is about Affan.</h1>
        </div>
        <p>
          Signal remains a quiet interaction metaphor. The visible story is a student, developer, competitor,
          builder, computational-biology enthusiast, and person with a life outside GitHub.
        </p>
        <button className="affan-key" type="button" onClick={() => setAffanMode((current) => !current)} aria-pressed={affanMode}>
          Press A <span>{affanMode ? "personal index on" : "for an easter egg"}</span>
        </button>
      </section>

      <StudySection id="identity-a" index="A / 01" title="Identity direction A — Assembly">
        <div className="identity-stage identity-stage-a" aria-label="Affan Nadeem assembled from offset typographic plates">
          <div className="edge-meta top-left">PORTFOLIO (2026)</div>
          <div className="edge-meta top-right">TORONTO / CANADA</div>
          <div className="assembly-word assembly-word-one" aria-hidden="true">
            <span>AF</span><span>FAN</span>
          </div>
          <div className="assembly-word assembly-word-two" aria-hidden="true">
            <span>NA</span><span>DEEM</span>
          </div>
          <h2 className="sr-only">Affan Nadeem</h2>
          <div className="role-runner">STUDENT · DEVELOPER · COMPETITOR · BUILDER</div>
        </div>
        <Review note={reviewNotes.identityA} />
      </StudySection>

      <StudySection id="identity-b" index="B / 02" title="Identity direction B — Lanes" selected>
        <div className="identity-stage identity-stage-b" ref={identityBRef} onPointerMove={moveIdentity}>
          <button className="lane-instruction" type="button" onClick={() => setAffanMode((current) => !current)} aria-pressed={affanMode}>
            {affanMode ? "RETURN TO NAME" : "MOVE TO READ / TAP TO REVEAL"}
          </button>
          <div className="lane-stack lane-stack-name" aria-hidden="true">
            <span>AFFAN NADEEM</span>
            <span>AFFAN NADEEM</span>
            <span>AFFAN NADEEM</span>
            <span>AFFAN NADEEM</span>
          </div>
          <div className="lane-stack lane-stack-reveal" aria-hidden="true">
            <span>STUDENT / TORONTO</span>
            <span>DEVELOPER / BUILDER</span>
            <span>COMPETITOR / ALGORITHMS</span>
            <span>BIOLOGY / LIFE OFF-SCREEN</span>
          </div>
          <h2 className="sr-only">Affan Nadeem</h2>
          <p className="sr-only">Student in Toronto. Developer and builder. Competitor interested in algorithms. Computational-biology enthusiast with a life outside software.</p>
          <div className="lane-role lane-role-left">ALGORITHMS / 03</div>
          <div className="lane-role lane-role-right">BIOLOGY / 05</div>
          <div className="lane-target" aria-hidden="true"><span /></div>
          <div className="lane-selection-mark">SELECTED<br />DIRECTION<br />B</div>
        </div>
        <Review note={reviewNotes.identityB} />
      </StudySection>

      <StudySection id="identity-c" index="C / 03" title="Identity direction C — Annotated field">
        <div className="identity-stage identity-stage-c">
          <div className="identity-c-name" aria-hidden="true"><span>AFFAN</span><span>NADEEM</span></div>
          <h2 className="sr-only">Affan Nadeem</h2>
          <ul className="identity-notes" aria-label="Affan's roles and interests">
            <li>01 / Student</li><li>02 / Developer</li><li>03 / Competitor</li><li>04 / Builder</li><li>05 / Computational biology</li><li>06 / Life outside GitHub</li>
          </ul>
          <div className="identity-c-stamp">CURRENTLY<br />BUILDING</div>
        </div>
        <Review note={reviewNotes.identityC} />
      </StudySection>

      <StudySection id="menu-study" index="04" title="Full-screen menu direction">
        <div className={`menu-stage ${menuOpen ? "is-open" : ""}`}>
          <div className="menu-stage-top">
            <span>AFFAN NADEEM / INDEX</span>
            <button type="button" onClick={() => setMenuOpen((current) => !current)} aria-expanded={menuOpen}>
              {menuOpen ? "Close" : "Open index"}
            </button>
          </div>
          <nav className="menu-links" aria-label="Menu direction preview">
            {["About", "Work", "Playground", "Life", "Contact"].map((label, index) => (
              <a key={label} href={`#${label === "Work" ? "work-study" : label === "About" ? "about-study" : "menu-study"}`}>
                <small>0{index + 1}</small><span>{label}</span><i aria-hidden="true">↗</i>
              </a>
            ))}
          </nav>
          <div className="menu-footer"><span>TORONTO / CANADA</span><span>ESC CLOSES · TAB MOVES</span><span>STUDENT / DEVELOPER</span></div>
        </div>
        <Review note={reviewNotes.menu} />
      </StudySection>

      <StudySection id="system-study" index="05" title="Design-system reveal — Calibration">
        <div className="system-stage" style={{ "--stage": systemStage } as React.CSSProperties}>
          <div className="system-controls" role="tablist" aria-label="Design system stages">
            {systemStages.map((stage, index) => (
              <button key={stage.label} type="button" role="tab" aria-selected={systemStage === index} onClick={() => setSystemStage(index)}>
                <span>0{index + 1}</span>{stage.label}
              </button>
            ))}
          </div>
          <div className="system-readout" role="tabpanel">
            <p>{systemStages[systemStage].label}</p>
            <strong>{systemStages[systemStage].value}</strong>
            <span>{systemStages[systemStage].detail}</span>
          </div>
          <div className="system-grid-preview" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
          <div className="system-orbit" aria-hidden="true"><span /><span /><span /></div>
        </div>
        <Review note={reviewNotes.system} />
      </StudySection>

      <StudySection id="about-study" index="06" title="About Affan — Editorial layout">
        <div className="about-stage">
          <div className="about-lead">
            <p>I like problems that refuse to stay in one category.</p>
            <h2>Software. Algorithms. Biology. Competition. Then whatever happens after the laptop closes.</h2>
          </div>
          <div className="about-portrait media-request" role="img" aria-label="Requested candid portrait of Affan in a real environment">
            <span>PERSONAL MEDIA REQUEST 01</span><strong>Candid portrait in a real environment</strong><small>Not a centred headshot. Affan-owned image required.</small>
          </div>
          <div className="about-copy">
            <p>
              Affan is a student developer in Toronto working across product engineering, algorithms, and computational biology.
              He competes, builds with teams, and keeps returning to questions that are hard to reduce to one clean discipline.
            </p>
            <p className="confirmation">NEEDS_AFFAN_CONFIRMATION / Add the first-code story, one competition moment, current learning focus, and what happens outside code—in Affan&apos;s own voice.</p>
          </div>
          <blockquote>“The interesting part is usually where two subjects stop agreeing.” <cite>Draft voice direction, not a factual quote</cite></blockquote>
          <div className="about-object media-request" role="img" aria-label="Requested biology or competition object photograph">
            <span>PERSONAL MEDIA REQUEST 02</span><strong>One object with a story</strong><small>Biology, competition, notebook, book, or something unexpectedly personal.</small>
          </div>
        </div>
        <Review note={reviewNotes.about} />
      </StudySection>

      <StudySection id="personal-study" index="07" title="Personal visual sequence — Field notes">
        <div className="personal-track" role="region" aria-label="Personal media requests" tabIndex={0}>
          {personalFrames.map(([number, title, caption], index) => (
            <figure className={`personal-frame frame-${index + 1}`} key={number}>
              <div className="personal-image-placeholder" role="img" aria-label={`Requested personal image: ${title}`}><span>{number}</span><em>IMAGE NEEDED</em></div>
              <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
            </figure>
          ))}
        </div>
        <Review note={reviewNotes.personal} />
      </StudySection>

      <StudySection id="work-study" index="08" title="Selected Work — Person first, projects second">
        <div className="work-stage">
          <div className="work-heading"><span>SELECTED / NOT EXHAUSTIVE</span><h2>Things Affan helped make real.</h2></div>
          <div className="work-list">
            {workItems.map((project, index) => (
              <article className={`work-row tone-${project.tone}`} key={project.title}>
                <div className="work-number">0{index + 1}</div>
                <div className="work-title"><h3>{project.title}</h3><span>{project.discipline}</span></div>
                <dl><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Mode</dt><dd>{project.team}</dd></div></dl>
                <div className="work-preview" aria-hidden="true">
                  {index === 0 ? (
                    <Image src="/media/vantage/live-home-750.webp" alt="" fill sizes="(max-width: 700px) 88vw, 32vw" />
                  ) : index === 1 ? (
                    <div className="rna-preview"><span>INPUT</span><i /><span>BLAST</span><i /><span>SCORE</span></div>
                  ) : (
                    <div className="type-preview">{index === 2 ? "def solve():" : "?"}</div>
                  )}
                </div>
                <Link href={index === 0 ? "/projects/vantage" : index === 1 ? "/projects/grnalytics" : "/#all-work"}>Open <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
        <Review note={reviewNotes.work} />
      </StudySection>

      <footer className="study-footer">
        <p>Direction selected / B — Lanes</p>
        <h2>Now the artwork has to carry the information.</h2>
        <p>No production route, deployment, or domain was changed by this study.</p>
        <a href="#study-title">Back to top ↑</a>
      </footer>
    </main>
  );
}

function StudySection({ id, index, title, children, selected = false }: { id: string; index: string; title: string; children: React.ReactNode; selected?: boolean }) {
  return (
    <section className={`study-section ${selected ? "is-selected-study" : ""}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="study-section-heading"><span>{index}{selected ? " / SELECTED" : ""}</span><h2 id={`${id}-title`}>{title}</h2><a href={`#${id}`}>#</a></div>
      {children}
    </section>
  );
}

function Review({ note }: { note: ReviewNote }) {
  return (
    <details className="review-panel">
      <summary>Review rationale <span>Open notes ↓</span></summary>
      <dl>
        <div><dt>Filippo principle</dt><dd>{note.principle}</dd></div>
        <div><dt>Affan transformation</dt><dd>{note.transformation}</dd></div>
        <div><dt>Why it is not a copy</dt><dd>{note.distinction}</dd></div>
        <div><dt>Personal material needed</dt><dd>{note.material}</dd></div>
        <div><dt>Mobile</dt><dd>{note.mobile}</dd></div>
        <div><dt>Reduced motion</dt><dd>{note.reduced}</dd></div>
      </dl>
    </details>
  );
}
