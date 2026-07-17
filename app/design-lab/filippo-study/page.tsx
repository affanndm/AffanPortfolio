import type { Metadata } from "next";
import { FilippoStudy } from "./FilippoStudy";

export const metadata: Metadata = {
  title: "Affan-first Direction Study",
  description: "Internal compositions for the Affan Nadeem portfolio creative reset.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FilippoStudyPage() {
  return <FilippoStudy />;
}
