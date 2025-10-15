import { AudiencePathways } from "@/components/audience-pathways";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { WhatWeInspect } from "@/components/what-we-inspect";
import { fetchAPI } from "@/lib/api";
import { normalizeImage } from "@/lib/utils";

type PathwayCard = {
  iconsvg?: string;
  [key: string]: unknown;
};

type MetricData = {
  metric_icon?: {
    url: string;
  };
};
type InspectionData = {
  card_inspect_icon?: {
    url: string;
  };
};
type FeatureIcon = {
  additional_features_card_icon?: {
    url: string;
  };
};
type TrustIcon = {
  trust_icon?: {
    url: string;
  };
};

export default async function HomePage() {
  const data = await fetchAPI("pages?slug=home-page");
  const page = data?.[0];
  const acf = page?.acf || {};

  const enhancedIconUrl = await normalizeImage(acf.enhanced_icon);

  const trustbar = await Promise.all(
    (acf.trust_bar_repeater || []).map(async (m: TrustIcon) => ({
      ...m,
      trust_icon: (await normalizeImage(m.trust_icon)) || "",
    }))
  );

  const pathways = await Promise.all(
    (acf.audience_pathways_cards || []).map(async (p: PathwayCard) => ({
      ...p,
      iconUrl: (await normalizeImage(p.iconsvg)) || "",
    }))
  );

  const metricsData = await Promise.all(
    (acf.metricsdata || []).map(async (m: MetricData) => ({
      ...m,
      metric_icon: (await normalizeImage(m.metric_icon)) || "",
    }))
  );
  const inspectionsitems = await Promise.all(
    (acf.what_we_inspect_card || []).map(async (m: InspectionData) => ({
      ...m,
      card_inspect_icon: (await normalizeImage(m.card_inspect_icon)) || "",
    }))
  );
  const additionalfeatures = await Promise.all(
    (acf.additional_features_repeater || []).map(async (m: FeatureIcon) => ({
      ...m,
      additional_features_card_icon:
        (await normalizeImage(m.additional_features_card_icon)) || "",
    }))
  );

  return (
    <main>
      <Hero
        badgeText={acf.hero_badge_text}
        title={acf.hero_title}
        subtitle={acf.hero_subtitle}
        primaryCtaLabel={acf.hero_primary_cta_label}
        primaryCtaUrl={acf.hero_primary_cta_url}
        secondaryCtaLabel={acf.hero_secondary_cta_label}
        secondaryCtaUrl={acf.hero_secondary_cta_url}
        completedCount={acf.hero_completed_count}
        enhancedIcon={enhancedIconUrl}
        trustbaritem={trustbar}
      />

      <AudiencePathways
        title={acf.audience_pathways_title}
        subtitle={acf.audience_pathways_description}
        pointtext={acf.audience_pathways_point_text}
        pathways={pathways}
      />

      <SocialProof
        title={acf.social_proof_title}
        subtitle={acf.social_proof_subtitle}
        pointtext={acf.social_proof_point_text}
        metricsData={metricsData}
        reviewbtntext={acf.review_all_btn}
        reviewbtnurl={acf.review_all_btn_url}
      />

      <WhatWeInspect
        title={acf.what_we_inspect_title}
        subtitle={acf.what_we_inspect_description}
        pointtext={acf.what_we_inspect_point_text}
        inspectionsitems={inspectionsitems}
        additionalfeatures={additionalfeatures}
        checklistbtntext={acf.inspection_checklist_btn}
        checklistbtnurl={acf.inspection_checklist_btn_url}
        footertext={acf.additional_features_footer_title}
      />
    </main>
  );
}
