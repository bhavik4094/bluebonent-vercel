/**
 * @fileoverview Owner-Operator vs Corporate Comparison component that addresses
 * the #1 customer fear: accountability and knowing who will inspect their home.
 * Uses psychological contrast principle to highlight Bluebonnet's advantages.
 */

import {
  Check,
  X,
  User,
  Phone,
  Clock,
  Heart,
  Shield,
  Home,
} from "lucide-react";

interface ComparisonRow {
  category: string;
  corporate: string;
  bluebonnet: string;
  icon: React.ElementType;
}

const comparisonData: ComparisonRow[] = [
  {
    category: "Your Inspector",
    corporate: "Random inspector from rotating roster - could be anyone",
    bluebonnet: "Tim McCoy personally - the owner, every single time",
    icon: User,
  },
  {
    category: "Communication",
    corporate: "Call center, voicemail, waiting for callbacks",
    bluebonnet:
      "Tim's direct cell phone - talk to the person who was in your attic",
    icon: Phone,
  },
  {
    category: "Inspection Approach",
    corporate: "Rush through checklist to hit daily quotas",
    bluebonnet: "Inspect like my own family is moving in - no time limits",
    icon: Clock,
  },
  {
    category: "Your Questions",
    corporate: "Corporate scripts and 'consult a specialist' deflections",
    bluebonnet: "Real conversations, patient education, plain English answers",
    icon: Heart,
  },
  {
    category: "Accountability",
    corporate: "Inspector changes jobs? You'll never find them again",
    bluebonnet: "My name, reputation, and family's livelihood on every report",
    icon: Shield,
  },
  {
    category: "Local Knowledge",
    corporate: "Generic training applied to every market the same way",
    bluebonnet: "Cedar Park resident - I know our soil, builders, and issues",
    icon: Home,
  },
];

/**
 * Renders a powerful comparison table showing the stark difference between
 * corporate inspection companies and Bluebonnet's owner-operated model.
 * @returns Comparison component with emotional triggers and clear value props
 */
export default function OwnerOperatorComparison() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-lightGray relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primaryBlue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Your Home Isn't Just
            <span className="bg-gradient-to-r from-primaryBlue to-accentOrange bg-clip-text text-transparent">
              {" "}
              House #847
            </span>
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            With big box inspection companies, you're just another number in the
            daily quota. With Bluebonnet, you're a neighbor whose family's
            future matters.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-elegant overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-gradient-to-r from-charcoal to-mediumGray text-white">
              <div className="p-6 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10">
                <h3 className="font-bold text-lg">What Matters Most</h3>
              </div>
              <div className="p-6 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 bg-red-900/20">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  Big Corporate Franchises
                </h3>
              </div>
              <div className="p-6 lg:col-span-1 bg-green-900/20">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  Bluebonnet (Owner-Operated)
                </h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonData.map((row, index) => {
              const Icon = row.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-lightGray/30"
                  } hover:bg-primaryBlue/5 transition-colors duration-300`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Category */}
                  <div className="p-6 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primaryBlue/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primaryBlue" />
                      </div>
                      <h4 className="font-bold text-charcoal">
                        {row.category}
                      </h4>
                    </div>
                  </div>

                  {/* Corporate */}
                  <div className="p-6 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200">
                    <p className="text-mediumGray text-sm leading-relaxed">
                      {row.corporate}
                    </p>
                  </div>

                  {/* Bluebonnet */}
                  <div className="p-6 lg:col-span-1">
                    <p className="text-charcoal text-sm leading-relaxed font-medium">
                      {row.bluebonnet}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-12 animate-fadeInUp"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-lg text-charcoal font-medium mb-6">
            Don't gamble with your family's biggest investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule"
              className="px-8 py-4  bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule with Tim Personally
            </a>
            <a
              href="tel:512-560-5670"
              className="px-8 py-4 bg-white hover:bg-lightGray text-charcoal font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-charcoal/10"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Tim Direct: 512-560-5670
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
