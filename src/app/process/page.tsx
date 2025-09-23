/**
 * @fileoverview The Bluebonnet Process page implementation.
 * @description This page demystifies the inspection journey from scheduling to post-report support,
 * reducing client anxiety and setting professional expectations per Phase 2.1 of the checklist.
 */

import { Calendar, Home, FileText, HeartHandshake, CheckCircle } from 'lucide-react';
import Link from 'next/link';

/**
 * Process step component for the visual timeline
 * @param {Object} props - Component props
 * @param {number} props.step - Step number
 * @param {string} props.title - Step title
 * @param {string} props.description - Step description
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string[]} props.details - Array of detail points
 * @returns {JSX.Element} Process step component
 */
const ProcessStep = ({
  step,
  title,
  description,
  icon,
  details
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}) => (
  <div className="relative flex gap-8 pb-12 last:pb-0">
    {/* Step number and line */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold text-lg">
        {step}
      </div>
      <div className="w-0.5 h-full bg-gray-300 mt-2" />
    </div>

    {/* Content */}
    <div className="flex-1 pb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-primaryBlue">{icon}</div>
          <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
        </div>
        <p className="text-mediumGray mb-4">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-charcoal">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function ProcessPage() {
  return (
    <div className="bg-lightGray min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            The Bluebonnet Process
          </h1>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            From your first call to post-inspection support, we're with you every step of the way.
            Here's exactly what to expect when you choose Bluebonnet Home Inspections.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <ProcessStep
            step={1}
            title="Easy Scheduling"
            description="Getting started is simple and convenient"
            icon={<Calendar className="w-8 h-8" />}
            details={[
              "Book online 24/7 or call us directly at 512-560-5670",
              "Confirmation within 1 hour during business hours",
              "Receive pre-inspection agreement and preparation checklist",
              "Choose from flexible scheduling including weekends"
            ]}
          />

          <ProcessStep
            step={2}
            title="Day of Inspection"
            description="Thorough examination of your future home"
            icon={<Home className="w-8 h-8" />}
            details={[
              "2-3 hours thorough examination of all accessible areas",
              "You're welcome to attend and ask questions throughout",
              "On-site summary of major findings at completion",
              "Tim personally performs every inspection - no junior inspectors"
            ]}
          />

          <ProcessStep
            step={3}
            title="Same-Day Report"
            description="Comprehensive documentation delivered promptly"
            icon={<FileText className="w-8 h-8" />}
            details={[
              "Detailed digital report within 24 hours of inspection",
              "100+ photos documenting all findings",
              "Clear, actionable recommendations for each issue",
              "Easy-to-read format accessible on any device"
            ]}
          />

          <ProcessStep
            step={4}
            title="Ongoing Support"
            description="We're here for you beyond the inspection"
            icon={<HeartHandshake className="w-8 h-8" />}
            details={[
              "Questions? Call Tim directly anytime",
              "Repair vendor recommendations available",
              "Re-inspection services for completed repairs",
              "Support through negotiations and closing"
            ]}
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-charcoal mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-mediumGray mb-6">
            Experience the Bluebonnet difference. Schedule your inspection today and move forward
            with confidence knowing your investment is protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-accentOrange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors inline-block text-center"
            >
              Schedule Your Inspection
            </Link>
            <a
              href="tel:512-560-5670"
              className="bg-transparent border-2 border-primaryBlue text-primaryBlue px-8 py-3 rounded-full font-semibold hover:bg-primaryBlue hover:text-white transition-colors inline-block text-center"
            >
              Call 512-560-5670
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
