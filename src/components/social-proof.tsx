/**
 * @fileoverview Social proof component for homepage
 * @description Displays customer testimonials and key business metrics with professional design
 */

/**
 * Star icon component for ratings
 * @returns {JSX.Element} Star icon
 */

type SocialProofProps = {
  title: string;
  subtitle: string;
  pointtext: string;
  reviewbtntext: string;
  reviewbtnurl: string;
};
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"}`}
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const reviews = [
  {
    stars: 5,
    quote:
      "Tim's inspection saved us from a potential disaster. He found foundation issues that weren't visible to us. His detailed report helped us negotiate $15,000 off the purchase price.",
    author: "Jennifer Henderson",
    role: "Cedar Park Homebuyer",
    date: "2 weeks ago",
    verified: true,
    highlight: true,
  },
  {
    stars: 5,
    quote:
      "I've worked with many inspectors, but Tim stands out. He's thorough, professional, and his reports are incredibly detailed. My clients always appreciate his work.",
    author: "Alex Rodriguez",
    role: "Keller Williams Agent",
    date: "1 month ago",
    verified: true,
  },
  {
    stars: 5,
    quote:
      "Pre-listing inspection helped us identify and fix issues before going to market. Our home sold in 3 days with multiple offers above asking!",
    author: "Michael & Sarah Thompson",
    role: "Home Sellers",
    date: "3 weeks ago",
    verified: true,
  },
  {
    stars: 5,
    quote:
      "Tim explained everything in terms we could understand. As first-time buyers, we really appreciated his patience and expertise.",
    author: "David Chen",
    role: "First-time Buyer",
    date: "1 week ago",
    verified: true,
  },
  {
    stars: 5,
    quote:
      "Scheduling was easy, report came same day, and Tim was available for questions after. Excellent service from start to finish.",
    author: "Patricia Williams",
    role: "Investment Property Owner",
    date: "2 months ago",
    verified: true,
  },
  {
    stars: 5,
    quote:
      "The thermal imaging caught a leak behind the wall that would have cost thousands to fix later. Worth every penny!",
    author: "Robert Martinez",
    role: "Round Rock Buyer",
    date: "1 month ago",
    verified: true,
  },
];

const metrics = [
  {
    value: "1,547",
    label: "Happy Customers",
    trend: "+127 this year",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    value: "24hr",
    label: "Report Delivery",
    trend: "Guaranteed",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    value: "5.0★",
    label: "Average Rating",
    trend: "152 Reviews",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    value: "200%",
    label: "Satisfaction Guarantee",
    trend: "Money Back",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

/**
 * Social proof section with testimonials and metrics
 * @returns {JSX.Element} The social proof component
 */
export const SocialProof = ({
  title,
  subtitle,
  pointtext,
  reviewbtntext,
}: SocialProofProps) => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-radial">
      {/* Enhanced background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='1' fill='%230052FF' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={true} />
              ))}
            </span>
            <span className="text-sm font-medium text-charcoal">
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

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-3d bg-white rounded-3xl p-6 text-center transition-all duration-300 shadow-lift hover:shadow-3d-hover hover:-translate-y-2 border border-gray-100/50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primaryBlue/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-primaryBlue">{metric.icon}</div>
                </div>
                <div className="text-3xl font-bold text-charcoal mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-mediumGray mb-2">
                  {metric.label}
                </div>
                <div className="text-xs text-accentOrange font-semibold">
                  {metric.trend}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-white px-6 py-2 rounded-full shadow-lg border border-gray-100">
              <p className="text-sm font-semibold text-charcoal">
                Real Reviews from Real Customers
              </p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reviews.slice(0, 6).map((review, index) => (
              <div
                key={index}
                className={`
                  card-3d group relative bg-white rounded-3xl p-8 transition-all duration-500 shadow-lift
                  hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp
                  ${review.highlight ? "ring-2 ring-accentOrange ring-offset-4" : "border border-gray-100"}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Highlight badge */}
                {review.highlight && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-accentBlue to-primaryBlue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Quote mark */}
                <div className="absolute top-6 left-6 text-6xl text-primaryBlue/10 font-serif">
                  "
                </div>

                {/* Stars and verification */}
                <div className="flex items-center justify-between mb-4 relative z-10">
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

                {/* Review text */}
                <blockquote className="text-mediumGray mb-6 leading-relaxed relative z-10 line-clamp-4">
                  {review.quote}
                </blockquote>

                {/* Author info */}
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

          {/* View all reviews button */}
          <div className="text-center mt-12">
            <a
              href="{reviewbtnurl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primaryBlue text-primaryBlue font-semibold rounded-full hover:bg-primaryBlue hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              {reviewbtntext}
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-mediumGray">
              <svg
                className="w-6 h-6 text-accentBlue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">TREC License #23059</span>
            </div>
            <div className="flex items-center gap-2 text-mediumGray">
              <svg
                className="w-6 h-6 text-accentBlue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Fully Insured & Bonded</span>
            </div>
            <div className="flex items-center gap-2 text-mediumGray">
              <svg
                className="w-6 h-6 text-accentBlue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">InterNACHI Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
