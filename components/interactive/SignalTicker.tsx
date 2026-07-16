import { signalTerms } from "@/lib/content";
import "./signal-ticker.css";

export function SignalTicker() {
  const text = signalTerms.join(" / ");
  return (
    <section className="ticker-section" aria-label="Technical domains">
      <p className="ticker-accessible">{text}</p>
      <div className="ticker-track" aria-hidden="true">
        <span>{text} / </span>
        <span>{text} / </span>
      </div>
    </section>
  );
}
