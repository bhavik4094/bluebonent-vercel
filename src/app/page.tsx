import { AudiencePathways } from "@/components/audience-pathways";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { WhatWeInspect } from "@/components/what-we-inspect";

export default function Home() {
  return (
    <main>
      <Hero />
      <AudiencePathways />
      <SocialProof />
      <WhatWeInspect /> 
    </main>
  );
}
