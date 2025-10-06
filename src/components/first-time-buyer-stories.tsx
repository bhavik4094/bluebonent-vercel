/**
 * @fileoverview First-Time Buyer Stories component showcasing real customer language
 * that addresses the vulnerability and fears of the 45% of customers who are first-time buyers.
 * Uses narrative transportation to build emotional connection.
 */

import { Quote, Star, Home, Heart, Shield, MessageCircle } from "lucide-react";

interface BuyerStory {
  quote: string;
  author: string;
  location: string;
  highlight: string;
  icon: React.ElementType;
  gradient: string;
}

const stories: BuyerStory[] = [
  {
    quote:
      "Other inspectors made me feel stupid for asking questions. Tim made me feel smart for asking them. He walked me through everything, explained what was urgent vs. what could wait, and gave me the confidence to negotiate $8,000 in repairs.",
    author: "Sarah & Mike Chen",
    location: "First home in Cedar Park",
    highlight: "Saved $8,000",
    icon: Heart,
    gradient: "from-primaryBlue to-accentBlue",
  },
  {
    quote:
      "The franchise wanted to schedule me with 'whoever was available.' With Tim, I knew exactly who was protecting my investment. When I called with a question three weeks after closing, he remembered my house and helped me understand my HVAC issue.",
    author: "Jennifer Rodriguez",
    location: "Round Rock starter home",
    highlight: "Still answers my calls",
    icon: Shield,
    gradient: "from-primaryBlue to-accentBlue",
  },
  {
    quote:
      "Big companies treated my inspection like a checklist to rush through. Tim treated it like teaching a friend about their new home. He even showed me where all the shut-offs were and what maintenance I should do each season.",
    author: "David Thompson",
    location: "Leander family home",
    highlight: "Taught me homeownership",
    icon: Home,
    gradient: "from-primaryBlue to-accentBlue",
  },
];

type thoroughInspectionProps = {
  testimonialSecHeading: string;
  testimonialSecSubHeading: string;
  testimonialSectxt: string;
  testimonialSecCtaHeading: string;
  testimonialSecCtaTxt: string;
  testimonialSecCtaBtn1Txt: string;
  testimonialSecCtaBtn1Url: string;
  testimonialSecCtaBtn2Txt: string;
  testimonialSecCtaBtn2Url: string;
};

/**
 * Renders powerful first-time buyer testimonials using real customer language
 * that creates immediate recognition and trust through shared experience.
 * @returns First-time buyer stories component
 */
export const FirstTimeBuyerStories = ({
  testimonialSecHeading,
  testimonialSecSubHeading,
  testimonialSectxt,
  testimonialSecCtaHeading,
  testimonialSecCtaTxt,
  testimonialSecCtaBtn1Txt,
  testimonialSecCtaBtn1Url,
  testimonialSecCtaBtn2Txt,
  testimonialSecCtaBtn2Url,
  }: thoroughInspectionProps) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primaryBlue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accentOrange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-primaryBlue/10 rounded-full text-primaryBlue font-bold text-sm mb-4">
            {testimonialSecSubHeading}
          </div>
          <h2 className="gradient-text font-serif text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            {testimonialSecHeading}
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            {testimonialSectxt}
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-full bg-white rounded-2xl shadow-elegant hover:shadow-3d-hover transition-all duration-500 overflow-hidden group">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${story.gradient}`} />

                  <div className="p-8">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-primaryBlue/20" />
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-charcoal leading-relaxed mb-6 italic">
                      "{story.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-charcoal">
                            {story.author}
                          </p>
                          <p className="text-sm text-mediumGray">
                            {story.location}
                          </p>
                        </div>
                        <div
                          className={`p-2 bg-gradient-to-r ${story.gradient} rounded-lg`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Highlight Badge */}
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-accentBlue text-sm font-bold rounded-full">
                          ✓ {story.highlight}
                        </span>
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primaryBlue to-accentBlue rounded-2xl p-8 lg:p-12 text-white text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h3 className="font-serif text-3xl font-bold mb-4">
              {testimonialSecCtaHeading}
            </h3>
            <p className="text-lg opacity-90 mb-8">
              {testimonialSecCtaTxt}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={testimonialSecCtaBtn1Url}
                className="px-6 py-3 bg-white text-primaryBlue font-bold rounded-full hover:bg-lightGray transition-all duration-300"
              >
                {testimonialSecCtaBtn1Txt}
              </a>
              <a
                href={testimonialSecCtaBtn2Url}
                className="px-6 py-3 bg-accentBlue text-white font-bold rounded-full hover:bg-accentBlue transition-all duration-300"
              >
                {testimonialSecCtaBtn2Txt}  
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
