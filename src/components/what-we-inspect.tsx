/**
 * @fileoverview What We Inspect component for homepage
 * @description Displays the comprehensive list of inspection areas with professional design
 */

import Link from "next/link";

type WhatWeInspectProps = {
  title: string;
  subtitle: string;
  pointtext: string;
  checklistbtntext: string;
  checklistbtnurl: string;
};

const inspectionItems = [
  {
    name: "Roof & Attic",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    description:
      "Complete roof covering, flashing, gutters, and attic inspection",
    points: ["Shingles & tiles", "Ventilation", "Insulation"],
    featured: true,
  },
  {
    name: "Foundation",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    description:
      "Foundation integrity, structural components, and load-bearing elements",
    points: ["Cracks & settling", "Drainage", "Structural beams"],
  },
  {
    name: "HVAC Systems",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description:
      "Heating, ventilation, and air conditioning systems performance",
    points: ["Equipment age", "Efficiency", "Ductwork"],
  },
  {
    name: "Electrical",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    description:
      "Service panels, wiring, outlets, switches, and safety devices",
    points: ["Panel capacity", "GFCI protection", "Code compliance"],
    featured: true,
  },
  {
    name: "Plumbing",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    description: "Water supply, drainage, fixtures, and water heater condition",
    points: ["Water pressure", "Leak detection", "Hot water system"],
  },
  {
    name: "Interior",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    description: "Walls, ceilings, floors, windows, doors, and finishes",
    points: ["Windows & doors", "Flooring", "Wall conditions"],
  },
  {
    name: "Exterior",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    ),
    description: "Siding, trim, decks, driveways, and grading",
    points: ["Siding condition", "Grading & drainage", "Decks & porches"],
  },
  {
    name: "Safety",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    description: "Fire safety, carbon monoxide, and trip hazards",
    points: ["Smoke detectors", "GFCI outlets", "Handrails"],
    featured: true,
  },
];

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
          {inspectionItems.map((item, index) => (
            <div
              key={index}
              className={`
                group relative bg-white rounded-2xl p-6 transition-all duration-500
                hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp
                ${item.featured ? "border-2 border-primaryBlue/20" : "border border-gray-100"}
              `}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Featured badge */}
              {item.featured && (
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
                ${item.featured ? "bg-primaryBlue/10" : "bg-gray-50"}
                group-hover:scale-110 transition-transform duration-300
              `}
              >
                <div
                  className={
                    item.featured ? "text-primaryBlue" : "text-mediumGray"
                  }
                >
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-charcoal mb-2 group-hover:text-primaryBlue transition-colors">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-mediumGray mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Key points */}
              <ul className="space-y-1.5">
                {item.points.map((point, idx) => (
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
                    <span className="text-xs text-charcoal">{point}</span>
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
          <div
            className="text-center animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accentOrange/10 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-accentOrange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-charcoal mb-2">
              Detailed Reports
            </h3>
            <p className="text-sm text-mediumGray">
              50+ page reports with photos documenting every finding
            </p>
          </div>

          <div
            className="text-center animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primaryBlue/10 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-primaryBlue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-charcoal mb-2">
              Video Walkthroughs
            </h3>
            <p className="text-sm text-mediumGray">
              Available for complex issues to ensure understanding
            </p>
          </div>

          <div
            className="text-center animate-fadeIn"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primaryBlue/10 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-primaryBlue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-charcoal mb-2">
              Follow-up Support
            </h3>
            <p className="text-sm text-mediumGray">
              Free consultation calls to discuss findings and next steps
            </p>
          </div>
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

          <p className="mt-6 text-sm text-mediumGray">
            Using advanced tools including thermal imaging and moisture meters
          </p>
        </div>
      </div>
    </section>
  );
};
