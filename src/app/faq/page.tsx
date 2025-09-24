/**
 * @fileoverview FAQ & Resources Hub page implementation.
 * @description This page provides comprehensive answers to common questions and downloadable resources,
 * establishing authority and reducing administrative workload per Phase 2.4 of the checklist.
 */

"use client";

import { useState } from "react";
import {
  ChevronDown,
  Download,
  FileText,
  Home,
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

/**
 * Accordion component for FAQ items
 * @param {Object} props - Component props
 * @param {string} props.question - The FAQ question
 * @param {string} props.answer - The FAQ answer
 * @returns {JSX.Element} Accordion component
 */
const FaqAccordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-2 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-lg text-charcoal pr-4">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-mediumGray flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-2 pb-4">
          <p className="text-mediumGray leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

/**
 * Resource card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string} props.title - Resource title
 * @param {string} props.description - Resource description
 * @param {string} props.buttonText - Download button text
 * @returns {JSX.Element} Resource card component
 */
const ResourceCard = ({
  icon,
  title,
  description,
  buttonText,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="text-primaryBlue mb-4">{icon}</div>
    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{title}</h3>
    <p className="text-mediumGray mb-4">{description}</p>
    <button className="inline-flex items-center gap-2 text-primaryBlue font-semibold hover:underline">
      <Download className="w-4 h-4" />
      {buttonText}
    </button>
  </div>
);

export default function FaqPage() {
  // FAQ data organized by category
  const firstTimeBuyerFaqs = [
    {
      question: "Should I attend the inspection?",
      answer:
        "Yes, absolutely! We highly recommend you attend, especially for the final walkthrough portion. This is a valuable opportunity to see any issues firsthand, ask questions, and learn about your future home's systems and maintenance needs. You'll gain insights that a report alone cannot provide.",
    },
    {
      question: "What if problems are found?",
      answer:
        "No house is perfect, not even new construction. Finding issues is actually the point of an inspection! The report becomes a powerful tool for negotiating repairs or price adjustments with the seller. Most findings are minor maintenance items, and we help you understand which issues are truly significant versus routine upkeep.",
    },
    {
      question: "How long does a home inspection take?",
      answer:
        "A typical inspection takes 2-3 hours, depending on the home's size, age, and condition. Larger homes or those with additional structures (guest houses, pools) may take longer. We recommend allowing at least 30-45 minutes at the end for the verbal summary and Q&A session.",
    },
    {
      question: "What's not included in a standard inspection?",
      answer:
        "A standard inspection is visual and non-invasive. We don't move furniture, look inside walls, or test every outlet. Specialized inspections like termite, mold, or sewer scopes are available as add-ons. We also don't inspect cosmetic issues unless they indicate a larger problem.",
    },
  ];

  const sellerFaqs = [
    {
      question: "Why get a pre-listing inspection?",
      answer:
        "A pre-listing inspection helps you identify and address issues on your own terms, before buyers discover them. This can lead to a faster sale, fewer negotiations, and often a higher final price. It also demonstrates transparency, making your home more attractive to serious buyers.",
    },
    {
      question: "Do I have to fix everything found in the inspection?",
      answer:
        "No, you're not obligated to fix everything. The inspection gives you options: fix major issues, adjust your price accordingly, or offer credits to buyers. The key is having no surprises during the buyer's inspection that could derail your sale.",
    },
    {
      question: "Will a pre-listing inspection hurt my sale?",
      answer:
        "Quite the opposite! Transparency builds trust with buyers. When you can show a professional inspection report upfront, buyers feel more confident making offers. It can actually speed up the sale process and reduce the likelihood of deals falling through.",
    },
  ];

  const processFaqs = [
    {
      question: "How much does a home inspection cost?",
      answer:
        "Inspection costs vary based on the property's square footage, age, and foundation type. Our base rates range from $350 for homes under 1,500 sq ft to $650+ for larger homes. Additional services like pool inspections or thermal imaging have separate fees. Contact us for a precise quote based on your specific property.",
    },
    {
      question: "When will I get the report?",
      answer:
        "You'll receive your comprehensive digital report within 24 hours of the inspection, often the same evening. The report includes 100+ photos, detailed findings, and clear recommendations. It's accessible on any device and can be easily shared with your agent or contractors.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Cedar Park, Round Rock, Leander, Georgetown, Austin, Pflugerville, and surrounding Central Texas communities. We're familiar with the local construction styles, common issues, and soil conditions specific to our area.",
    },
    {
      question: "Are you insured?",
      answer:
        "Yes, we carry comprehensive general liability insurance and errors & omissions (E&O) insurance. We're also fully licensed by the Texas Real Estate Commission (TREC License #23059) and certified by InterNACHI. Your protection is our priority.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Frequently Asked Questions & Resources
          </h1>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            Get answers to common questions about home inspections and download
            helpful resources to prepare for your inspection or understand your
            report.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* First-Time Buyer Questions */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-primaryBlue" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                  First-Time Buyer Questions
                </h2>
              </div>
              <div className="bg-lightGray rounded-lg p-1">
                {firstTimeBuyerFaqs.map((faq, index) => (
                  <FaqAccordion
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>

            {/* Seller Questions */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-primaryBlue" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                  Seller Questions
                </h2>
              </div>
              <div className="bg-lightGray rounded-lg p-1">
                {sellerFaqs.map((faq, index) => (
                  <FaqAccordion
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>

            {/* Process Questions */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-primaryBlue" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                  Process Questions
                </h2>
              </div>
              <div className="bg-lightGray rounded-lg p-1">
                {processFaqs.map((faq, index) => (
                  <FaqAccordion
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Downloadable Resources
            </h2>
            <p className="text-lg text-mediumGray max-w-3xl mx-auto">
              Free guides and checklists to help you prepare for your inspection
              and understand the process better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ResourceCard
              icon={<FileText className="w-12 h-12" />}
              title="Home Seller's Prep Checklist"
              description="Ensure a smooth inspection by preparing your home properly. This checklist covers everything from utilities to access points."
              buttonText="Download PDF Checklist"
            />

            <ResourceCard
              icon={<Shield className="w-12 h-12" />}
              title="First-Time Buyer's Guide"
              description="Everything you need to know about the inspection process, what to expect, and how to use your report effectively."
              buttonText="Download Buyer's Guide"
            />

            <ResourceCard
              icon={<Home className="w-12 h-12" />}
              title="Understanding Your Report"
              description="A glossary of common terms and guide to interpreting inspection findings, from minor issues to major concerns."
              buttonText="Download Report Guide"
            />

            <ResourceCard
              icon={<CheckCircle className="w-12 h-12" />}
              title="Common Issues in Texas Homes"
              description="Learn about foundation movement, HVAC demands, and other issues specific to Central Texas properties."
              buttonText="Download Texas Guide"
            />
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-primaryBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            We're here to help! Contact us directly for personalized answers
            about your specific situation or property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:512-560-5670"
              className="bg-white text-primaryBlue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Call 512-560-5670
            </a>
            <Link
              href="/schedule"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primaryBlue transition-colors inline-block"
            >
              Schedule Your Inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
