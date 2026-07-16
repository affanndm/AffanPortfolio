import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="page-shell">
      <section className="section" aria-labelledby="not-found-title">
        <div className="grid">
          <div className="span-8">
            <p className="label muted">404</p>
            <h1 id="not-found-title" className="display">
              Signal not found.
            </h1>
            <p className="lead">
              The route you requested is not part of the current portfolio system.
            </p>
            <Link className="command-link" href="/">
              Return home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
