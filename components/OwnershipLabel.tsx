import type { Ownership } from "@/lib/content";

export function OwnershipLabel({ value, detail }: { value: Ownership; detail?: string }) {
  return (
    <span className="ownership-label" aria-label={detail ? `${value}: ${detail}` : value}>
      <span>{value}</span>
      {detail ? <span className="faint">{detail}</span> : null}
    </span>
  );
}
