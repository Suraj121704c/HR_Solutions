import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Industries } from "@/components/home/Industries";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Industries — Nexus HR",
  description:
    "Sector-specific HR expertise across IT & Technology, Manufacturing, Retail & E-Commerce and Health Care.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector Expertise That Moves the Needle"
        description="Every industry has its own people challenges. We bring specialised knowledge to solve yours."
      />
      <Industries />
      <CtaBanner />
    </>
  );
}
