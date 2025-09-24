/**
 * @fileoverview Our Non-Negotiables component - transforms common industry complaints
 * into quality guarantees, providing concrete promises that address buyer anxieties.
 */

import {
  Shield,
  CheckCircle,
  XCircle,
  Zap,
  Home,
  Clock,
  FileText,
  Users,
} from "lucide-react";

interface NonNegotiable {
  promise: string;
  detail: string;
  icon: React.ElementType;
  gradient: string;
  industryFail: string;
}

const nonNegotiables: NonNegotiable[] = [
  {
    promise: "We check every accessible space",
    detail: "Attic, crawlspace, roof - if it's safe to enter, we're going in",
    icon: Home,
    gradient: "from-primaryBlue to-accentBlue",
    industryFail: "70% of inspectors never enter crawlspaces",
  },
  {
    promise: "We test, not glance",
    detail:
      "Fixtures run long enough to reveal slow drains, intermittent leaks, and cycling issues",
    icon: Zap,
    gradient: "from-primaryBlue to-accentBlue",
    industryFail: "Quick on/off checks miss 40% of issues",
  },
  {
    promise: "We teach, not just list",
    detail:
      "Plain-English priorities, no confusing jargon, real education about your home",
    icon: Users,
    gradient: "from-primaryBlue to-accentBlue",
    industryFail: "Most reports are filled with CYA language",
  },
  {
    promise: "We deliver fast",
    detail:
      "Comprehensive report within 24 hours - protecting your option period",
    icon: Clock,
    gradient: "from-primaryBlue to-accentBlue",
    industryFail: "Average delivery is 48-72 hours",
  },
  {
    promise: "We stand by you after",
    detail: "Questions answered for as long as you own the home - guaranteed",
    icon: Shield,
    gradient: "from-primaryBlue to-accentBlue",
    industryFail: "Most inspectors ghost after payment",
  },
];

/**
 * Renders the Non-Negotiables section that reframes industry complaints
 * into concrete quality guarantees, building trust through specificity.
 * @returns Non-negotiables promise component
 */
export default function OurNonNegotiables() {
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
            BLUEBONNET GUARANTEE
          </div>
          <h2 className="gradient-text font-serif text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Our Non-Negotiables
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            These aren't marketing promises. These are the standards that make
            us different. Every inspection. Every time. No exceptions.
          </p>
        </div>

        {/* Non-Negotiables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {nonNegotiables.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full bg-white rounded-xl shadow-elegant hover:shadow-3d-hover transition-all duration-500 overflow-hidden group">
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />

                  <div className="p-6">
                    {/* Icon and Promise */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-10`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-charcoal mb-2">
                          {item.promise}
                        </h3>
                        <p className="text-sm text-mediumGray">{item.detail}</p>
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
                          {item.industryFail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
                  My Personal Commitment to You
                </h3>
                <p className="text-lg text-charcoal mb-4">
                  "These aren't just company policies - they're personal
                  promises from me to your family. When I say 'no shortcuts,' I
                  mean it. When I promise to answer your calls, I will. Your
                  home deserves nothing less than my absolute best effort."
                </p>
                <p className="font-bold text-primaryBlue">
                  - Tim McCoy, TREC #23059
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-charcoal mb-6">
            Experience the difference when quality isn't negotiable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule"
              className="px-8 py-4 bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule Your Non-Negotiable Inspection
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-white text-charcoal font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-charcoal/10"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
