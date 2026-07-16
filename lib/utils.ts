export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function externalLinkProps(label: string) {
  return {
    target: "_blank",
    rel: "noreferrer",
    "aria-label": `${label} (opens in a new tab)`,
  };
}
