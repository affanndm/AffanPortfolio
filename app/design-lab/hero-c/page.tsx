import type { Metadata } from "next";
import { HeroPrototype } from "@/components/hero-lab/HeroPrototype";
export const metadata: Metadata = { title: "Hero C — Typographic Distortion", robots: { index: false, follow: false } };
export default function HeroC() { return <HeroPrototype variant="type" />; }
