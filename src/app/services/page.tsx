import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Services — Nexus HR",
  description:
    "Explore our end-to-end HR services: talent acquisition, HR strategy, performance management, compensation, training and compliance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="HR Services Built Around Your People"
        description="From strategy to execution, we deliver end-to-end HR solutions tailored to the way your business grows."
      />
      <Services />
      <Process />
      <CtaBanner />
    </>
  );
}
