const motionBootstrap = `
(() => {
  const desktop = matchMedia('(min-width: 1000px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (!desktop.matches || reduced.matches) return;
  const load = () => import('/generated/portfolio-motion.js');
  if (document.readyState === 'complete') load();
  else addEventListener('load', load, { once: true });
})();`;

export function PortfolioMotion() {
  return <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />;
}
