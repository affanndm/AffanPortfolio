/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation keeps the global shell server-only */
import { externalLinkProps } from "@/lib/utils";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/projects/vantage", label: "Vantage" },
  { href: "mailto:nadeemaffan23@gmail.com", label: "Contact" },
];

const navigationRuntime = String.raw`
(() => {
  const menu = document.getElementById("site-mobile-menu");
  const summary = document.getElementById("site-mobile-menu-trigger");
  if (!menu || !summary || menu.__affanBound) return;
  menu.__affanBound = true;

  const close = () => { menu.open = false; };
  const pointer = (event) => { if (!menu.contains(event.target)) close(); };
  const keydown = (event) => {
    if (event.key !== "Escape" || !menu.open) return;
    close();
    summary.focus();
  };
  const cleanup = () => {
    document.removeEventListener("pointerdown", pointer);
    menu.removeEventListener("keydown", keydown);
  };

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("pointerdown", pointer);
  menu.addEventListener("keydown", keydown);
  addEventListener("pagehide", (event) => { if (!event.persisted) cleanup(); });
})();`;

export function Navigation() {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="wordmark" href="/">
            <span>AFFAN NADEEM</span>
            <small>PORTFOLIO / 2026</small>
          </a>
          <div className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <span className="nav-availability">TORONTO / CANADA</span>
          </div>
          <details id="site-mobile-menu" className="mobile-menu">
            <summary id="site-mobile-menu-trigger" className="menu-button">
              <span>Menu</span>
              <span className="menu-glyph" aria-hidden="true" />
            </summary>
            <div id="mobile-menu" className="mobile-panel">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub")}>
                GitHub <span className="external-glyph" aria-hidden="true" />
              </a>
            </div>
          </details>
        </nav>
      </header>
      <script dangerouslySetInnerHTML={{ __html: navigationRuntime }} />
    </>
  );
}
