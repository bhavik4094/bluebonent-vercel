import Link from "next/link";
import Image from "next/image";

type FeatureItem = string | { feature: string };

type Pathway = {
  title: string;
  headline: string;
  description: string;
  features: FeatureItem[];
  cta: string;
  href: string;
  iconUrl: string;
  featured?: boolean;
};

type Props = {
  title: string;
  subtitle: string;
  pointtext: string;
  pathways: Pathway[];
};

export const AudiencePathways = ({
  title,
  subtitle,
  pointtext,
  pathways,
}: Props) => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-mesh">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-gray-50/30 to-white/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primaryBlue/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-primaryBlue rounded-full"></span>
            <span className="text-sm font-medium text-primaryBlue">
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pathways.map((pathway, index) => (
            <div
              key={index}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link href={pathway.href} className="block h-full">
                <div
                  className={`card-luxury relative h-full rounded-3xl p-10 transition-all duration-700 overflow-hidden ${
                    pathway.featured
                      ? "ring-2 ring-blue-500/30 ring-offset-4 bg-gradient-to-br from-white to-purple-50/30"
                      : "bg-white"
                  }`}
                >
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                    {pathway.iconUrl ? (
                      <Image
                        src={pathway.iconUrl}
                        alt={pathway.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">No Icon</span>
                    )}
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

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pathway.features.map((featureItem, idx) => {
                      const featureText =
                        typeof featureItem === "string"
                          ? featureItem
                          : featureItem?.feature;
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-accentBlue mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-charcoal">
                            {featureText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA */}
                  <div
                    className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-primaryBlue to-accentBlue text-white group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
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
      </div>
    </section>
  );
};
