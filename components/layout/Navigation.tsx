import Link from "next/link";
import { externalLinkProps } from "@/lib/utils";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#lab", label: "Lab" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="wordmark" href="/">
          <span>AFFAN</span>
          <span>NADEEM</span>
        </Link>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub")}>
            GitHub <span className="external-glyph" aria-hidden="true" />
          </a>
        </div>
        <details className="mobile-menu">
          <summary className="menu-button">
            <span>Menu</span>
            <span className="menu-glyph" aria-hidden="true" />
          </summary>
          <div id="mobile-menu" className="mobile-panel">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href="https://github.com/affanndm" {...externalLinkProps("Affan Nadeem GitHub")}>
              GitHub <span className="external-glyph" aria-hidden="true" />
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
