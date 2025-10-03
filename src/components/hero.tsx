import Link from "next/link";
import Image from "next/image";
import { TrustBar } from "./trust-bar";

type HeroProps = {
  badgeText: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  secondaryCtaLabel: string;
  secondaryCtaUrl: string;
  enhancedIcon: string;
  completedCount: number;
};

export const Hero = ({
  badgeText,
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaUrl,
  secondaryCtaLabel,
  secondaryCtaUrl,
  enhancedIcon,
  completedCount,
}: HeroProps) => {
  return (
    <section className="relative min-h-[75vh] flex items-center bg-gradient-to-br from-white via-primaryBlue/5 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primaryBlue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accentOrange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primaryBlue/10 rounded-full">
                <span className="w-2 h-2 bg-primaryBlue rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primaryBlue">
                  {badgeText}
                </span>
              </div>
            )}

            <h1 className="gradient-text font-serif text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              {title} <span className="block text-primaryBlue"></span>
            </h1>

            <p className="text-lg text-mediumGray leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCtaUrl && (
                <Link
                  href={primaryCtaUrl}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primaryBlue text-white font-semibold rounded-lg hover:bg-white hover:text-primaryBlue hover:border-primaryBlue border-2 transition-colors shadow-lg hover:shadow-xl"
                >
                  {primaryCtaLabel}
                </Link>
              )}

              {secondaryCtaUrl && (
                <Link
                  href={secondaryCtaUrl}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primaryBlue font-semibold rounded-lg border-2 border-primaryBlue hover:bg-primaryBlue hover:text-white transition-colors"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={enhancedIcon}
                alt="Professional Home Inspections"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">
                    {completedCount}+
                  </p>
                  <p className="text-sm text-mediumGray">
                    Inspections Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <TrustBar />
      </div>
    </section>
  );
};
