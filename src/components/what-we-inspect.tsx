/**
 * @fileoverview What We Inspect component for homepage
 * @description Displays the comprehensive list of inspection areas with professional design
 */

import Image from "next/image";
import Link from "next/link";

type InspectionItem = {
  card_inspect_icon: string;
  card_inspect_title: string;
  card_inspect_description: string;
  card_inspect_point_repeater: { card_inspect_point_title: string }[];
  card_inspect_feature: boolean;
};
type FeatureIcon = {
  additional_features_card_title: string;
  additional_features_card_description: string;
  additional_features_card_icon: string;
  additional_features_footer_title: string;
};

type WhatWeInspectProps = {
  title: string;
  subtitle: string;
  pointtext: string;
  checklistbtntext: string;
  footertext: string;
  checklistbtnurl: string;
  inspectionsitems: InspectionItem[];
  additionalfeatures: FeatureIcon[];
};

/**
 * What We Inspect section with professional grid design
 * @returns {JSX.Element} The what we inspect component
 */
export const WhatWeInspect = ({
  title,
  subtitle,
  pointtext,
  checklistbtntext,
  checklistbtnurl,
  inspectionsitems,
  additionalfeatures,
  footertext,
}: WhatWeInspectProps) => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue/5 via-transparent to-accentOrange/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <svg
              className="w-5 h-5 text-accentBlue"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-accentBlue">
              {pointtext}
            </span>
          </div>

          <h2 className="gradient-text font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-mediumGray max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Inspection items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {inspectionsitems.map((item, index) => (
            <div
              key={index}
              className={`
                group relative bg-white rounded-2xl p-6 transition-all duration-500
                hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp
                ${item.card_inspect_feature ? "border-2 border-primaryBlue/20" : "border border-gray-100"}
              `}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Featured badge */}
              {item.card_inspect_feature && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-gradient-to-r from-primaryBlue to-accentBlue text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    CRITICAL
                  </div>
                </div>
              )}

              {/* Icon container */}
              <div
                className={`
                inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4
                ${item.card_inspect_feature ? "bg-primaryBlue/10" : "bg-gray-50"}
                group-hover:scale-110 transition-transform duration-300
              `}
              >
                <div
                  className={
                    item.card_inspect_feature
                      ? "text-primaryBlue"
                      : "text-mediumGray"
                  }
                >
                  {item.card_inspect_icon ? (
                    <img
                      src={item.card_inspect_icon}
                      alt={item.card_inspect_title}
                      className="w-8 h-8"
                    />
                  ) : null}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-charcoal mb-2 group-hover:text-primaryBlue transition-colors">
                {item.card_inspect_title}
              </h3>

              {/* Description */}
              <p className="text-sm text-mediumGray mb-4 leading-relaxed">
                {item.card_inspect_description}
              </p>

              {/* Key points */}
              <ul className="space-y-1.5">
                {item.card_inspect_point_repeater.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primaryBlue flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs text-charcoal">
                      {point.card_inspect_point_title}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {additionalfeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accentOrange/10 rounded-full mb-4">
                <Image
                  className="w-8 h-8 text-accentOrange"
                  alt={feature.additional_features_card_title}
                  width={32}
                  height={32}
                  src={feature.additional_features_card_icon}
                />
              </div>

              <h3 className="font-semibold text-charcoal mb-2">
                {feature.additional_features_card_title}
              </h3>
              <p className="text-sm text-mediumGray">
                {feature.additional_features_card_description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href={checklistbtnurl}
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span>{checklistbtntext}</span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <p className="mt-6 text-sm text-mediumGray">{footertext}</p>
        </div>
      </div>
    </section>
  );
};
