/**
 * @fileoverview Audience pathways component for homepage
 * @description Displays three distinct pathways for buyers, sellers, and agents with professional design
 */

import Link from "next/link";

const pathwayData = [
  {
    title: "Home Buyers",
    headline: "Protect Your Investment",
    description:
      "Uncover hidden issues before they become costly problems. Get a comprehensive inspection that gives you confidence in your purchase.",
    features: [
      "Detailed 50+ page reports",
      "Same-day scheduling available",
      "Walk-through consultation included",
    ],
    cta: "Book Buyer's Inspection",
    href: "/services/buyers-inspection",
    gradient: "from-primaryBlue to-accentBlue",
    iconBg: "bg-blue-500/10",
    iconColor: "text-accentBlue",
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
  },
  {
    title: "Home Sellers",
    headline: "Sell with Confidence",
    description:
      "Pre-listing inspections eliminate surprises and help you price accurately. Know what buyers will find before listing.",
    features: [
      "Identify issues before listing",
      "Faster closings",
      "Competitive pricing advantage",
    ],
    cta: "Get Pre-Listing Inspection",
    href: "/services/sellers-inspection",
    gradient: "from-primaryBlue to-accentBlue",
    iconBg: "bg-blue-500/10",
    iconColor: "text-accentBlue",
    featured: true,
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Real Estate Agents",
    headline: "Your Trusted Partner",
    description:
      "Fast turnaround, clear reports, and excellent communication. We help you close deals smoothly and build client trust.",
    features: [
      "24-hour report delivery",
      "Agent-friendly scheduling",
      "Direct inspector communication",
    ],
    cta: "Partner With Us",
    href: "/for-agents",
    gradient: "from-primaryBlue to-accentBlue",
    iconBg: "bg-blue-500/10",
    iconColor: "text-accentBlue",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

/**
 * Audience pathways section with professional card design
 * @returns {JSX.Element} The audience pathways component
 */
export const AudiencePathways = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-mesh">
      {/* Enhanced background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-gray-50/30 to-white/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primaryBlue/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-primaryBlue rounded-full"></span>
            <span className="text-sm font-medium text-primaryBlue">
              Tailored Solutions
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Who We <span className="gradient-text">Serve</span>
          </h2>

          <p className="text-lg md:text-xl text-mediumGray max-w-3xl mx-auto leading-relaxed">
            Expert inspection services designed for your specific needs. Whether
            buying, selling, or representing clients, we've got you covered.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pathwayData.map((pathway, index) => (
            <div
              key={index}
              className={`group relative animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link href={pathway.href} className="block h-full">
                <div
                  className={`
                  card-luxury relative h-full rounded-3xl p-10 transition-all duration-700
                  overflow-hidden
                  ${pathway.featured ? "ring-2 ring-blue-500/30 ring-offset-4 bg-gradient-to-br from-white to-purple-50/30" : ""}
                `}
                >
                  {/* Premium featured badge */}
                  {pathway.featured && (
                    <div className="absolute -top-1 -right-1 z-10">
                      <div className="bg-gradient-to-r from-primaryBlue to-accentBlue text-white text-xs font-semibold px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          PREMIUM CHOICE
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Gradient overlay on hover */}
                  <div
                    className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-br ${pathway.gradient}
                  `}
                    style={{ opacity: 0.02 }}
                  ></div>

                  {/* Icon with gradient background */}
                  <div
                    className={`
                    w-16 h-16 ${pathway.iconBg} rounded-2xl flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-300
                    shadow-lg group-hover:shadow-xl
                  `}
                  >
                    <div className={pathway.iconColor}>{pathway.icon}</div>
                  </div>

                  {/* Title */}
                  <div className="text-sm font-semibold text-mediumGray uppercase tracking-wider mb-3">
                    {pathway.title}
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-charcoal mb-4 group-hover:gradient-text transition-all duration-300">
                    {pathway.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-mediumGray mb-6 leading-relaxed">
                    {pathway.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {pathway.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 ${pathway.iconColor} mt-0.5 flex-shrink-0`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div
                    className={`
                    inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-semibold
                    bg-gradient-to-r ${pathway.gradient} text-white
                    group-hover:shadow-lg transition-all duration-300
                    group-hover:scale-105
                  `}
                  >
                    <span>{pathway.cta}</span>
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
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom trust message */}
        <div
          className="text-center mt-16 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-mediumGray">
            Join{" "}
            <span className="font-semibold text-charcoal">
              1,500+ satisfied customers
            </span>{" "}
            who trust Bluebonnet Inspections
          </p>
        </div>
      </div>
    </section>
  );
};
