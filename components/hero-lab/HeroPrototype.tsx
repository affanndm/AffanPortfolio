import Image from "next/image";
import Link from "next/link";

type Variant = "topology" | "interface" | "type";

const nodes = [
  [18, 24], [42, 16], [72, 27], [84, 52], [63, 72], [34, 64], [15, 78], [51, 45],
];
const links = [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [0,5], [1,7], [7,3], [7,4], [7,5]];

export function HeroPrototype({ variant }: { variant: Variant }) {
  const label = variant === "topology" ? "A / TOPOLOGICAL SIGNAL" : variant === "interface" ? "B / INTERFACE ARTIFACT" : "C / TYPOGRAPHIC DISTORTION";
  return (
    <main id="main" className={`prototype-page prototype-${variant}`}>
      <header className="prototype-nav">
        <Link href="/design-lab">← DESIGN LAB</Link>
        <span>{label}</span>
        <Link href="/">PRODUCTION STUDY →</Link>
      </header>
      <section className="prototype-hero" aria-labelledby="prototype-title">
        <div className="prototype-meta prototype-meta-left"><b>AFFAN NADEEM</b><span>PORTFOLIO / 2026</span></div>
        <div className="prototype-meta prototype-meta-right"><b>SOFTWARE × SCIENCE</b><span>TORONTO / CANADA</span></div>
        <div className="prototype-year" aria-hidden="true"><span>20</span><span>26</span></div>
        <h1 id="prototype-title" className="prototype-name" aria-label="Affan Nadeem">
          <span>AFFAN</span><span>NADEEM</span>
        </h1>
        {variant === "topology" && (
          <svg className="topology-object" viewBox="0 0 100 100" role="img" aria-label="A network resolving from scattered points into a connected system.">
            {links.map(([a, b], index) => <line key={index} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}
            {nodes.map(([x, y], index) => <circle key={index} cx={x} cy={y} r={index === 7 ? 3.2 : 1.5} />)}
          </svg>
        )}
        {variant === "interface" && (
          <div className="interface-object" aria-hidden="true">
            {[0,1,2,3,4].map((item) => <div className={`interface-plane interface-plane-${item + 1}`} key={item}><Image src="/media/vantage/live-home.png" alt="" fill sizes="40vw" /></div>)}
          </div>
        )}
        {variant === "type" && (
          <div className="type-object" aria-hidden="true">
            <span>AFFAN</span><span>NADEEM</span><i /><i /><i />
          </div>
        )}
        <div className="prototype-bottom"><span>INTERACTION STUDY / RESPONSIVE</span><span>MOVE / SCROLL / REDUCE MOTION</span></div>
      </section>
    </main>
  );
}
