import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/lib/content";
import { ProjectMedia } from "@/components/ProjectMedia";
import { Magnet } from "@/components/react-bits/Magnet";
import { externalLinkProps } from "@/lib/utils";

const projectDrawerRuntime = String.raw`
(() => {
  document.querySelectorAll("[data-project-drawer]").forEach((dialog) => {
    if (!(dialog instanceof HTMLDialogElement) || dialog.__affanBound) return;
    dialog.__affanBound = true;
    const trigger = document.querySelector('[aria-controls="' + dialog.id + '"]');
    const closeButton = dialog.querySelector("[data-drawer-close]");
    let closeTimer = 0;

    const finishClose = () => {
      if (dialog.open) dialog.close();
      delete dialog.dataset.closing;
      if (!document.querySelector("[data-project-drawer][open]")) {
        delete document.documentElement.dataset.drawerOpen;
      }
      if (trigger instanceof HTMLElement) trigger.focus();
    };
    const close = () => {
      if (!dialog.open || dialog.dataset.closing) return;
      dialog.dataset.closing = "true";
      closeTimer = window.setTimeout(finishClose, 420);
    };
    const open = () => {
      if (closeTimer) window.clearTimeout(closeTimer);
      dialog.showModal();
      document.documentElement.dataset.drawerOpen = "true";
    };
    const cancel = (event) => { event.preventDefault(); close(); };
    const backdrop = (event) => { if (event.target === dialog) close(); };
    const escape = (event) => {
      if (event.key !== "Escape" || !dialog.open) return;
      event.preventDefault();
      close();
    };

    trigger?.addEventListener("click", open);
    closeButton?.addEventListener("click", close);
    dialog.addEventListener("cancel", cancel);
    dialog.addEventListener("click", backdrop);
    document.addEventListener("keydown", escape);
  });
})();`;

export function ProjectDrawer({ project }: { project: Project }) {
  const dialogId = `${project.slug}-drawer`;

  return (
    <>
      <Magnet wrapperClassName="project-magnet" innerClassName="project-magnet-inner">
        <button
          className="project-drawer-trigger"
          type="button"
          aria-haspopup="dialog"
          aria-controls={dialogId}
        >
          <span>Open project</span>
          <ArrowUpRight aria-hidden="true" size={18} />
        </button>
      </Magnet>
      <dialog
        id={dialogId}
        className="project-drawer"
        aria-labelledby={`${project.slug}-drawer-title`}
        data-project-drawer
      >
        <div className={`project-drawer-panel project-drawer-panel-${project.accent}`} data-lenis-prevent>
          <header className="drawer-header">
            <span>{project.year} / {project.role}</span>
            <button type="button" data-drawer-close aria-label={`Close ${project.title} preview`}>
              Close <X aria-hidden="true" size={17} />
            </button>
          </header>
          <div className="drawer-body">
            <div className="drawer-title-block">
              <p>{project.kicker}</p>
              <h2 id={`${project.slug}-drawer-title`}>{project.title}</h2>
            </div>
            <ProjectMedia project={project} />
            <div className="drawer-story">
              <p>{project.signal}</p>
              <dl>
                <div>
                  <dt>Ownership</dt>
                  <dd>{project.ownership}</dd>
                </div>
                <div>
                  <dt>Discipline</dt>
                  <dd>{project.discipline}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.stack.slice(0, 4).join(" / ")}</dd>
                </div>
              </dl>
            </div>
            <div className="drawer-actions">
              <a href={`/projects/${project.slug}`}>
                Read full case study <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a href={project.repoUrl} {...externalLinkProps(`${project.title} source evidence`)}>
                Inspect source evidence <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </div>
      </dialog>
      <script dangerouslySetInnerHTML={{ __html: projectDrawerRuntime }} />
    </>
  );
}
