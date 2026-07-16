import { signalTerms } from "@/lib/content";
import "./signal-ticker.css";

const tickerRuntime = String.raw`
(() => {
  const section = document.getElementById("signal-ticker");
  const control = section && section.querySelector("[data-ticker-control]");
  const icon = control && control.querySelector(".ticker-control-icon");
  if (!section || !control || !icon || section.dataset.bound) return;
  section.dataset.bound = "true";

  let userPaused = false;
  let inView = true;
  let pageVisible = document.visibilityState === "visible";
  const update = () => {
    const paused = userPaused || !inView || !pageVisible;
    section.toggleAttribute("data-paused", paused);
    control.setAttribute("aria-pressed", String(userPaused));
    control.setAttribute("aria-label", userPaused ? "Resume technical domains ticker" : "Pause technical domains ticker");
    control.title = userPaused ? "Resume ticker" : "Pause ticker";
    icon.classList.toggle("is-play", userPaused);
    icon.classList.toggle("is-pause", !userPaused);
  };
  const click = () => { userPaused = !userPaused; update(); };
  const visibility = () => { pageVisible = document.visibilityState === "visible"; update(); };
  const observer = new IntersectionObserver(([entry]) => {
    inView = Boolean(entry && entry.isIntersecting);
    update();
  });
  const cleanup = () => {
    observer.disconnect();
    control.removeEventListener("click", click);
    document.removeEventListener("visibilitychange", visibility);
  };

  control.addEventListener("click", click);
  document.addEventListener("visibilitychange", visibility);
  addEventListener("pagehide", (event) => { if (!event.persisted) cleanup(); });
  addEventListener("pageshow", (event) => { if (event.persisted) update(); });
  observer.observe(section);
  update();
})();`;

export function SignalTicker() {
  const text = signalTerms.join(" / ");
  return (
    <>
      <section id="signal-ticker" className="ticker-section" aria-label="Technical domains">
        <p className="ticker-accessible">{text}</p>
        <div className="ticker-track" aria-hidden="true">
          <span>{text} / </span>
          <span>{text} / </span>
        </div>
        <button
          className="ticker-control"
          type="button"
          data-ticker-control
          aria-label="Pause technical domains ticker"
          aria-pressed="false"
          title="Pause ticker"
        >
          <span className="ticker-control-icon is-pause" aria-hidden="true" />
        </button>
      </section>
      <script dangerouslySetInnerHTML={{ __html: tickerRuntime }} />
    </>
  );
}
