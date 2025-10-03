/**
 * @fileoverview Thorough Inspection Process component that makes "thoroughness" tangible
 * through specific, observable behaviors that address the top fear of missed defects.
 * Shows exactly what Tim does that others skip.
 */

import {
  Home,
  Search,
  Wrench,
  Droplets,
  Eye,
  FileText,
  Users,
  CheckCircle2,
} from "lucide-react";

interface InspectionStep {
  title: string;
  description: string;
  duration: string;
  icon: React.ElementType;
  details: string[];
  notUsual: string;
}

const inspectionSteps: InspectionStep[] = [
  {
    title: "Pre-Inspection Research",
    description: "I study your property before I arrive",
    duration: "Night before",
    icon: Search,
    details: [
      "Review property history and permits",
      "Check neighborhood issues and recalls",
      "Identify builder patterns and common defects",
      "Prepare specialized tools for your home type",
    ],
    notUsual: "Most inspectors show up blind",
  },
  {
    title: "Roof & Exterior Deep Dive",
    description: "Every accessible surface examined",
    duration: "45-60 min",
    icon: Home,
    details: [
      "Walk the roof when safe (drone when not)",
      "Check every window, door, and seal",
      "Inspect grading and drainage patterns",
      "Test all exterior outlets and GFCI protection",
    ],
    notUsual: "Others often skip the roof entirely",
  },
  {
    title: "Attic & Crawlspace Entry",
    description: "I go where problems hide",
    duration: "30-45 min",
    icon: Eye,
    details: [
      "Physically enter every accessible space",
      "Check insulation, ventilation, and structure",
      "Look for pest damage and moisture issues",
      "Inspect all visible wiring and ductwork",
    ],
    notUsual: "Many just peek from the access point",
  },
  {
    title: "Systems Testing",
    description: "Full-cycle operation checks",
    duration: "45-60 min",
    icon: Wrench,
    details: [
      "Run HVAC through complete heating/cooling cycles",
      "Test water pressure and check for leaks",
      "Operate all appliances for full cycles",
      "Check electrical panel and test AFCI/GFCI protection",
    ],
    notUsual: "Quick on/off tests miss intermittent issues",
  },
  {
    title: "Thermal & Moisture Scanning",
    description: "See what's hidden behind walls",
    duration: "Throughout",
    icon: Droplets,
    details: [
      "Infrared scan of moisture-prone areas",
      "Check for hidden leaks and poor insulation",
      "Identify electrical hot spots",
      "Document temperature variations",
    ],
    notUsual: "Most don't include thermal imaging",
  },
  {
    title: "Your Education Walk-Through",
    description: "Learn your home, not just its problems",
    duration: "30+ min",
    icon: Users,
    details: [
      "Walk through all findings together",
      "Show you all shut-offs and breakers",
      "Explain maintenance priorities",
      "Answer every single question",
    ],
    notUsual: "Others hand you a report and leave",
  },
];

/**
 * Renders a detailed inspection process that translates "thorough" into
 * specific, observable behaviors that buyers can visualize and verify.
 * @returns Inspection process timeline component
 */
export default function ThoroughInspectionProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-lightGray to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primaryBlue rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-accentOrange rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-blue-100 text-accentBlue font-bold text-sm rounded-full mb-4">
            3-4 Hour Comprehensive Inspection
          </div>
          <h2 className="gradient-text font-serif text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            What "Thorough" Actually{" "}
            <span className="bg-gradient-to-r from-primaryBlue to-accentOrange bg-clip-text text-transparent">
              Means Here
            </span>
          </h2>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            No "representative sample" shortcuts. If we can reach it, we test
            it. Here's exactly what I do that big companies skip to save time.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          {inspectionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                  {/* Timeline connector */}
                  <div className="hidden lg:flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                        index % 2 === 0
                          ? "from-primaryBlue to-accentBlue"
                          : "from-accentBlue to-primaryBlue"
                      } flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {index + 1}
                    </div>
                    {index < inspectionSteps.length - 1 && (
                      <div className="w-1 h-32 bg-gradient-to-b from-gray-300 to-transparent mt-4" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl shadow-elegant hover:shadow-3d-hover transition-all duration-500 p-8 group">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Icon and Header */}
                        <div className="lg:w-1/3">
                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`p-3 rounded-xl bg-gradient-to-br ${
                                index % 2 === 0
                                  ? "from-primaryBlue/10 to-blue-600/10"
                                  : "from-accentBlue/10 to-primaryBlue/10"
                              }`}
                            >
                              <Icon
                                className={`w-8 h-8 ${
                                  index % 2 === 0
                                    ? "text-primaryBlue"
                                    : "text-accentOrange"
                                }`}
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-xl text-charcoal">
                                {step.title}
                              </h3>
                              <p className="text-sm text-mediumGray">
                                {step.duration}
                              </p>
                            </div>
                          </div>
                          <p className="text-charcoal font-medium mb-4">
                            {step.description}
                          </p>
                        </div>

                        {/* Details */}
                        <div className="lg:w-2/3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            {step.details.map((detail, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accentBlue flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-charcoal">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* What others skip */}
                          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-sm text-red-800">
                              <span className="font-bold">
                                Industry Shortcut:
                              </span>{" "}
                              {step.notUsual}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Box */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className=" bg-gradient-to-r from-primaryBlue to-accentBlue rounded-2xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold mb-4">
              400+ Points. Zero Shortcuts. Every Time.
            </h3>
            <p className="text-lg mb-8 opacity-95">
              This isn't about finding problems - it's about giving you the
              complete truth about your investment so you can make confident
              decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sample-report"
                className="px-6 py-3 bg-white text-primaryBlue font-bold rounded-full hover:bg-lightGray transition-all duration-300"
              >
                <FileText className="w-5 h-5 inline mr-2" />
                See Sample Report
              </a>
              <a
                href="/schedule"
                className="px-6 py-3 bg-charcoal text-white font-bold rounded-full hover:bg-black transition-all duration-300"
              >
                Schedule This Level of Care
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
