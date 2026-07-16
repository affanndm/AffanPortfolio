import type { Metadata } from "next";
import { HeroPrototype } from "@/components/hero-lab/HeroPrototype";
export const metadata: Metadata = { title: "Hero B — Interface Artifact", robots: { index: false, follow: false } };
export default function HeroB() { return <HeroPrototype variant="interface" />; }
