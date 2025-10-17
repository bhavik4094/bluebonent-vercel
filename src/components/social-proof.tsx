/**
 * @fileoverview Social proof component for homepage
 * @description Displays customer testimonials and key business metrics with professional design
 */

import Image from "next/image";

type MetricData = {
  metric_value: string;
  metric_label: string;
  metric_trend: string;
  metric_icon?: string;
};

type Review = {
  stars: number;
  quote: string;
  author: string;
  role: string;
  date: string;
  verified: boolean;
  highlight?: boolean;
};

type SocialProofProps = {
  title: string;
  subtitle: string;
  pointtext: string;
  reviewbtntext: string;
  reviewbtnurl: string;
  metricsData: MetricData[];
  reviews: Review[]; // ✅ dynamic reviews
};

/**
 * Star icon component for ratings
 */
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className={`w-5 h-5 ${
      filled ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"
    }`}
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

/**
 * Social proof section with testimonials and metrics
 */
export const SocialProof = ({
  title,
  subtitle,
  pointtext,
  reviewbtntext,
  reviewbtnurl,
  metricsData,
  reviews,
}: SocialProofProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden bg-gradient-radial">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      <div className="absolute inset-0 opacity-[0.01]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='1' fill='%230052FF' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
            </span>
            <span className="text-sm font-medium text-charcoal">
              {pointtext}
            </span>
          </div>

          <h2 className="gradient-text font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            {title}
          </h2>

          <p className="text-lg text-mediumGray max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
          {metricsData?.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 text-center shadow-lift hover:shadow-3d-hover border border-gray-100/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {metric.metric_icon ? (
                  <Image
                    src={metric.metric_icon}
                    alt={metric.metric_label}
                    width={45}
                    height={45}
                  />
                ) : (
                  <span className="text-xs text-gray-400">No Icon</span>
                )}
              </div>
              <div className="text-3xl font-bold text-charcoal mb-1">
                {metric.metric_value}
              </div>
              <div className="text-sm font-medium text-mediumGray mb-2">
                {metric.metric_label}
              </div>
              <div className="text-xs text-accentOrange font-semibold">
                {metric.metric_trend}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-white px-6 py-2 rounded-full shadow-lg border border-gray-100">
              <p className="text-sm font-semibold text-charcoal">
                Real Reviews from Real Customers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reviews.slice(0, 6).map((review, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-6 shadow-lift hover:shadow-2xl border transition-all duration-500 ${
                  review.highlight
                    ? "ring-2 ring-accentOrange ring-offset-2"
                    : "border-gray-100"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < review.stars} />
                    ))}
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-xs text-accentBlue font-medium">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>

                <blockquote className="text-mediumGray mb-6 leading-relaxed line-clamp-4">
                  {review.quote}
                </blockquote>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-charcoal">
                        {review.author}
                      </p>
                      <p className="text-sm text-mediumGray">{review.role}</p>
                    </div>
                    <p className="text-xs text-mediumGray">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional review button */}
          {reviewbtntext && reviewbtnurl && (
            <div className="text-center mt-12">
              <a
                href={reviewbtnurl}
                className="inline-block bg-primaryBlue text-white font-semibold px-6 py-3 rounded-full hover:bg-accentBlue transition-colors"
              >
                {reviewbtntext}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
