/**
 * @fileoverview Sample Report Showcase page implementation.
 * @description This page demonstrates the quality and features of Bluebonnet inspection reports,
 * serving as a key product differentiator per Phase 2.2 of the checklist.
 */

import {
  FileText,
  Camera,
  CheckCircle,
  Share2,
  Clock,
  AlertCircle,
  Smartphone,
  Download,
} from "lucide-react";
import Link from "next/link";

/**
 * Report feature card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature description
 * @returns {JSX.Element} Feature card component
 */
const ReportFeature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-start gap-4">
      <div className="text-primaryBlue flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
          {title}
        </h3>
        <p className="text-mediumGray">{description}</p>
      </div>
    </div>
  </div>
);

/**
 * Sample report section component
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {string} props.imageAlt - Alt text for demo image
 * @returns {JSX.Element} Report section component
 */
const ReportSection = ({
  title,
  description,
  imageAlt,
}: {
  title: string;
  description: string;
  imageAlt: string;
}) => (
  <div className="bg-lightGray rounded-lg p-8 mb-6">
    <h4 className="font-serif text-2xl text-charcoal mb-3">{title}</h4>
    <p className="text-mediumGray mb-4">{description}</p>
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 rounded flex items-center justify-center">
        <span className="text-mediumGray">[{imageAlt}]</span>
      </div>
    </div>
  </div>
);

export default function SampleReportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="gradient-text font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our Inspection Reports
          </h1>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            Clarity, Not Confusion: The Bluebonnet Inspection Report delivers
            comprehensive findings in an easy-to-understand format that empowers
            you to make confident decisions.
          </p>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="gradient-text font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Interactive Report Demo
            </h2>
            <p className="text-lg text-mediumGray mb-8">
              Click through a real (anonymized) inspection report to see the
              depth and quality firsthand
            </p>

            {/* Sample Report Viewer */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg shadow-xl p-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Report Header */}
                  <div className="bg-primaryBlue text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Sample Inspection Report
                    </h3>
                    <p>123 Example Street, Cedar Park, TX 78613</p>
                    <p className="text-sm opacity-90">
                      Inspection Date: January 15, 2024
                    </p>
                  </div>

                  {/* Report Sections Preview */}
                  <div className="p-6 space-y-4">
                    <ReportSection
                      title="Summary Page"
                      description="Color-coded overview highlighting major defects and safety issues at the top, allowing you and your agent to quickly identify potential negotiation points."
                      imageAlt="Summary Page with Color Coding"
                    />

                    <ReportSection
                      title="Detailed Findings"
                      description="Each finding includes clear photos, location details, and specific recommendations. We show you exactly what we found and what to do about it."
                      imageAlt="Sample Finding with Photo and Description"
                    />

                    <ReportSection
                      title="Photo Documentation"
                      description="100+ high-resolution photos document every significant finding. Visual evidence that supports your negotiations and helps contractors provide accurate quotes."
                      imageAlt="Photo Gallery of Findings"
                    />
                  </div>

                  {/* View Full Report CTA */}
                  <div className="bg-lightGray p-6 text-center">
                    <button className="bg-primaryBlue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      View Full Sample Report
                    </button>
                    <p className="text-sm text-mediumGray mt-3">
                      Opens in a new window • No email required
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="gradient-text font-serif text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
            Report Features That Make a Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <ReportFeature
              icon={<Smartphone className="w-8 h-8" />}
              title="Modern & Digital"
              description="Our reports are delivered in a modern HTML format, making them easy to navigate on any device—phone, tablet, or desktop."
            />

            <ReportFeature
              icon={<Camera className="w-8 h-8" />}
              title="High-Resolution Photos & Video"
              description="We don't just tell you about a defect, we show you. Every significant finding is documented with clear photos and, where necessary, video clips."
            />

            <ReportFeature
              icon={<AlertCircle className="w-8 h-8" />}
              title="Actionable Summaries"
              description="An easy-to-read summary page highlights the most significant issues needing attention, so you and your agent know exactly where to focus during negotiations."
            />

            <ReportFeature
              icon={<Clock className="w-8 h-8" />}
              title="Delivered Within 24 Hours"
              description="Time is critical in real estate transactions. We deliver your comprehensive report within 24 hours, giving you the information you need to move forward."
            />

            <ReportFeature
              icon={<Share2 className="w-8 h-8" />}
              title="Easy to Share"
              description="Share your report instantly with agents, contractors, or family members via a secure web link. No large email attachments needed."
            />

            <ReportFeature
              icon={<Download className="w-8 h-8" />}
              title="Lifetime Access"
              description="Your report remains accessible online indefinitely. Download it, print it, or reference it years later for maintenance planning."
            />
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="gradient-text font-serif text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Why Our Reports Stand Out
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accentBlue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-charcoal mb-2">
                    Written for Homeowners, Not Engineers
                  </h3>
                  <p className="text-mediumGray">
                    Our reports use clear, everyday language. We explain not
                    just what we found, but what it means for you and what you
                    should do about it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accentBlue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-charcoal mb-2">
                    Organized for Easy Navigation
                  </h3>
                  <p className="text-mediumGray">
                    Interactive table of contents, bookmarked sections, and a
                    logical flow make it simple to find exactly what you're
                    looking for.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accentBlue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-charcoal mb-2">
                    Repair Cost Guidance
                  </h3>
                  <p className="text-mediumGray">
                    While we don't quote exact prices, we help you understand
                    whether an issue is a $100 fix or a $10,000 project, helping
                    you budget and negotiate effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-charcoal mb-2">
                    Maintenance Recommendations
                  </h3>
                  <p className="text-mediumGray">
                    Beyond just problems, we provide a roadmap for maintaining
                    your home, helping you protect your investment for years to
                    come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primaryBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            See the Difference for Yourself
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Don't just take our word for it. Schedule your inspection today and
            receive a report that truly empowers you to make the best decision
            for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-white text-primaryBlue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Schedule Your Inspection
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primaryBlue transition-colors">
              Download Sample Report PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
