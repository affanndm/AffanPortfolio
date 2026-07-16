import type { Metadata } from "next";
import { HeroPrototype } from "@/components/hero-lab/HeroPrototype";
export const metadata: Metadata = { title: "Hero A — Topological Signal", robots: { index: false, follow: false } };
export default function HeroA() { return <HeroPrototype variant="topology" />; }
