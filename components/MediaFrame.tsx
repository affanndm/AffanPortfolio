import { cn } from "@/lib/utils";

type MediaFrameProps = {
  label: string;
  caption: string;
  variant?: "wide" | "square";
  children?: React.ReactNode;
};

export function MediaFrame({ label, caption, variant = "wide", children }: MediaFrameProps) {
  return (
    <figure>
      <div
        className={cn("media-frame media-hover", variant === "square" && "square")}
        role={children ? undefined : "img"}
        aria-label={children ? undefined : label}
      >
        {children ?? (
          <div className="missing-media">
            <span>{label}</span>
          </div>
        )}
      </div>
      <figcaption className="media-caption">{caption}</figcaption>
    </figure>
  );
}
