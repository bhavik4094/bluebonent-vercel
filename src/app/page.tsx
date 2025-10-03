import { AudiencePathways } from "@/components/audience-pathways";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { WhatWeInspect } from "@/components/what-we-inspect";
import { fetchAPI } from "@/lib/api";
import { normalizeImage } from "@/lib/utils";

type PathwayCard = {
  iconsvg?: string;
  [key: string]: unknown; // keep flexibility for extra fields
};

export default async function HomePage() {
  const data = await fetchAPI("pages?slug=home-page");
  const page = data?.[0];
  const hero = page?.acf || {};
  const about = page?.acf || {};
  const review = page?.acf || {};
  const services = page?.acf || {};

  const enhancedIconUrl = await normalizeImage(hero.enhanced_icon);
  // const pathwayss = await Promise.all(
  //   (about.audience_pathways_cards || []).map(async (p: any) => ({
  //     ...p,
  //     iconUrl: (await normalizeImage(p.iconsvg)) || "",
  //   }))
  // );

  const pathwayss = await Promise.all(
    (about.audience_pathways_cards || []).map(async (p: PathwayCard) => ({
      ...p,
      iconUrl: (await normalizeImage(p.iconsvg)) || "",
    }))
  );

  return (
    <main>
      <Hero
        badgeText={hero.hero_badge_text}
        title={hero.hero_title}
        subtitle={hero.hero_subtitle}
        primaryCtaLabel={hero.hero_primary_cta_label}
        primaryCtaUrl={hero.hero_primary_cta_url}
        secondaryCtaLabel={hero.hero_secondary_cta_label}
        secondaryCtaUrl={hero.hero_secondary_cta_url}
        completedCount={hero.hero_completed_count}
        enhancedIcon={enhancedIconUrl}
      />

      <AudiencePathways
        title={about.audience_pathways_title}
        subtitle={about.audience_pathways_description}
        pointtext={about.audience_pathways_point_text}
        pathways={pathwayss}
      />
      <SocialProof
        title={review.social_proof_title}
        subtitle={review.social_proof_subtitle}
        pointtext={review.social_proof_point_text}
        reviewbtntext={review.review_all_btn}
        reviewbtnurl={review.review_all_btn_url}
      />
      <WhatWeInspect
        title={services.what_we_inspect_title}
        subtitle={services.what_we_inspect_description}
        pointtext={services.what_we_inspect_point_text}
        checklistbtntext={services.inspection_checklist_btn}
        checklistbtnurl={services.inspection_checklist_btn_url}
      />
    </main>
    // CHECKING EVERYTHING IS WORKING FINE
  );
}
