/**
 * @fileoverview Our Non-Negotiables component - transforms common industry complaints
 * into quality guarantees, providing concrete promises that address buyer anxieties.
 */

import { Shield, XCircle } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { normalizeImage } from "@/lib/utils";
import Image from "next/image";

interface NonNegotiable {
  promise: string;
  detail: string;
  icon: React.ElementType;
  gradient: string;
  industryFail: string;
}

// const nonNegotiables: NonNegotiable[] = [
//   {
//     promise: "We check every accessible space",
//     detail: "Attic, crawlspace, roof - if it's safe to enter, we're going in",
//     icon: Home,
//     gradient: "from-primaryBlue to-accentBlue",
//     industryFail: "70% of inspectors never enter crawlspaces",
//   },
//   {
//     promise: "We test, not glance",
//     detail:
//       "Fixtures run long enough to reveal slow drains, intermittent leaks, and cycling issues",
//     icon: Zap,
//     gradient: "from-primaryBlue to-accentBlue",
//     industryFail: "Quick on/off checks miss 40% of issues",
//   },
//   {
//     promise: "We teach, not just list",
//     detail:
//       "Plain-English priorities, no confusing jargon, real education about your home",
//     icon: Users,
//     gradient: "from-primaryBlue to-accentBlue",
//     industryFail: "Most reports are filled with CYA language",
//   },
//   {
//     promise: "We deliver fast",
//     detail:
//       "Comprehensive report within 24 hours - protecting your option period",
//     icon: Clock,
//     gradient: "from-primaryBlue to-accentBlue",
//     industryFail: "Average delivery is 48-72 hours",
//   },
//   {
//     promise: "We stand by you after",
//     detail: "Questions answered for as long as you own the home - guaranteed",
//     icon: Shield,
//     gradient: "from-primaryBlue to-accentBlue",
//     industryFail: "Most inspectors ghost after payment",
//   },
// ];

type nonNegotiablesProps = {
  nHeading: string;
  nSubHeading: string;
  ntxt: string;
  npcHeading: string;
  npcTxt: string;
  npcAuthorName: string;
  nCtaTxt: string;
  nCtaBtn1Txt: string;
  nCtaBtn1Url: string;
  nCtaBtn2Txt: string;
  nCtaBtn2Url: string;
};

const data = await fetchAPI("pages?slug=about-us");
const page = data?.[0];
const nonNegotiables = page?.acf || {};

// about table images added here
type nonNegotiableCardsImg = {
  our_non_negotiables_card_image?: {
    url: string;
  };
};

const nonNegotiableCardsIcon = await Promise.all(
  (nonNegotiables.our_non_negotiables_repeater_card || []).map(
    async (m: nonNegotiableCardsImg) => ({
      ...m,
      our_non_negotiables_card_image:
        (await normalizeImage(m.our_non_negotiables_card_image)) || "",
    })
  )
);

/**
 * Renders the Non-Negotiables section that reframes industry complaints
 * into concrete quality guarantees, building trust through specificity.
 * @returns Non-negotiables promise component
 */

export const OurNonNegotiables = ({
  nHeading,
  nSubHeading,
  ntxt,
  npcHeading,
  npcTxt,
  npcAuthorName,
  nCtaTxt,
  nCtaBtn1Txt,
  nCtaBtn1Url,
  nCtaBtn2Txt,
  nCtaBtn2Url,
}: nonNegotiablesProps) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,82,255,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,107,53,0.05),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal text-white font-bold text-sm rounded-full mb-4">
            <Shield className="w-4 h-4" />
            {nSubHeading}
          </div>
          <h2 className="gradient-text font-serif text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            {nHeading}
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">{ntxt}</p>
        </div>

        {/* Non-Negotiables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {nonNegotiables?.our_non_negotiables_repeater_card?.map(
            (item: any, index: number) => {
              // const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white rounded-xl shadow-elegant hover:shadow-3d-hover transition-all duration-500 overflow-hidden group">
                    {/* Gradient header */}
                    <div className={`h-2 bg-gradient-to-r ${item?.gradient}`} />

                    <div className="p-6">
                      {/* Icon and Promise */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${item?.gradient} bg-opacity-10`}
                        >
                          {/* <Icon className="w-6 h-6 text-white" /> */}
                          <Image
                            className="w-5 h-5 text-primaryBlue"
                            src={
                              nonNegotiableCardsIcon[index]
                                ?.our_non_negotiables_card_image
                            }
                            alt={nonNegotiables.title}
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-charcoal mb-2">
                            {item?.our_non_negotiables_card_title}
                          </h3>
                          <p className="text-sm text-mediumGray">
                            {item?.our_non_negotiables_card_description}
                          </p>
                        </div>
                      </div>

                      {/* Industry Comparison */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-red-700">
                            <span className="font-semibold">
                              Industry Reality:
                            </span>{" "}
                            {item?.our_non_negotiables_card_message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Promise Statement */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-lightGray to-white rounded-2xl p-8 lg:p-12 border-2 border-charcoal/10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Tim's Badge */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-primaryBlue to-accentBlue rounded-full flex items-center justify-center text-white">
                    <span className="text-3xl font-bold">TM</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2  bg-gradient-to-br from-primaryBlue to-accentBlue text-white text-xs font-bold px-3 py-1 rounded-full">
                    OWNER
                  </div>
                </div>
              </div>

              {/* Promise Text */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-serif text-3xl font-bold text-charcoal mb-4">
                  {npcHeading}
                </h3>
                <p className="text-lg text-charcoal mb-4">"{npcTxt}"</p>
                <p className="font-bold text-primaryBlue">- {npcAuthorName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-charcoal mb-6">{nCtaTxt}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={nCtaBtn1Url}
              className="px-8 py-4 bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {nCtaBtn1Txt}
            </a>
            <a
              href={nCtaBtn2Url}
              className="px-8 py-4 bg-white text-charcoal font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-charcoal/10"
            >
              {nCtaBtn2Txt}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// owner-operator-comparison.tsx
