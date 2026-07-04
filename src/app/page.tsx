import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { Services } from "@/components/home/Services";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <Industries />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
