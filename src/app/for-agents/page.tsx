/**
 * @fileoverview Real Estate Agent Portal page implementation.
 * @description This page positions Bluebonnet as a strategic partner for real estate agents,
 * addressing their specific needs and pain points per Phase 2.3 of the checklist.
 */

import { fetchAPI } from "@/lib/api";
import {
  Shield,
  Clock,
  // Phone,
  Key,
  FileCheck,
  Users,
  // TrendingUp,
  // Award,
  Download,
  Handshake,
} from "lucide-react";
import Link from "next/link";

/**
 * Agent benefit card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string} props.title - Benefit title
 * @param {string} props.description - Benefit description
 * @returns {JSX.Element} Benefit card component
 */
const AgentBenefit = ({
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
 * Agent testimonial component
 * @param {Object} props - Component props
 * @param {string} props.quote - Testimonial quote
 * @param {string} props.author - Agent name
 * @param {string} props.company - Real estate company
 * @returns {JSX.Element} Testimonial component
 */
const AgentTestimonial = ({
  quote,
  author,
  company,
}: {
  quote: string;
  author: string;
  company: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-start gap-3 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-500 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-mediumGray mb-4 italic">"{quote}"</p>
    <div>
      <p className="font-semibold text-charcoal">{author}</p>
      <p className="text-sm text-mediumGray">{company}</p>
    </div>
  </div>
);

const data = await fetchAPI("pages?slug=for-agents");
const page = data?.[0];
const forAgents = page?.acf || {};

export default function ForAgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primaryBlue to-accentBlue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {forAgents.smooth_transactions_title}
            </h1>
            <p className="text-xl mb-8 opacity-95">
              {forAgents.smooth_transactions_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={forAgents.schedule_for_your_client_btn_url}
                className="bg-white text-primaryBlue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                {forAgents.schedule_for_your_client_btn_title}
              </Link>
              <a
                href={forAgents.direct_line_btn_url}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primaryBlue transition-colors inline-block"
              >
                {forAgents.direct_line_btn_title}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Bluebonnet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="gradient-text font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {forAgents.agents_choose_title}
            </h2>
            <p className="text-lg text-mediumGray max-w-3xl mx-auto">
              {forAgents.agents_choose_description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AgentBenefit
              icon={<Shield className="w-8 h-8" />}
              title="We Protect Your Clients (and Your Reputation)"
              description="Our thorough, unbiased inspections provide your clients with a complete understanding of the property's condition, ensuring there are no costly surprises after closing. A happy client leads to future referrals for you."
            />

            <AgentBenefit
              icon={<FileCheck className="w-8 h-8" />}
              title="We Communicate, We Don't Alarm"
              description="We are experts at providing context. We calmly and clearly explain our findings, distinguishing between major structural investments and minor handyman repairs. Our goal is to inform, not to alarm, allowing your clients to make rational decisions without derailing the transaction."
            />

            <AgentBenefit
              icon={<Clock className="w-8 h-8" />}
              title="Fast, Modern Reports Your Clients Will Love"
              description="Our 24-hour, mobile-friendly reports are easy to read, understand, and share. This makes it simple for you and your clients to review findings, consult with contractors, and move forward with negotiations efficiently."
            />

            <AgentBenefit
              icon={<Key className="w-8 h-8" />}
              title="Easy Scheduling & Punctuality"
              description="We respect your time and your clients' demanding schedules. Our online scheduling system is available 24/7, we're equipped with Supra lockbox access, and we pride ourselves on our punctuality and professionalism at every appointment."
            />
          </div>
        </div>
      </section>

      {/* Our Promise to You */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="gradient-text font-serif text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              {forAgents.our_promise_title}
            </h2>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-charcoal mb-2">
                      To always act as a professional, courteous, and
                      knowledgeable extension of your team
                    </h3>
                    <p className="text-mediumGray">
                      We understand we're representing you. Every interaction
                      reflects on your professionalism.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-charcoal mb-2">
                      To provide clear, objective, and timely information that
                      empowers your clients
                    </h3>
                    <p className="text-mediumGray">
                      No surprises, no confusion. Just the facts your clients
                      need to make informed decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-charcoal mb-2">
                      To be readily available for you and your clients to answer
                      any questions after the inspection
                    </h3>
                    <p className="text-mediumGray">
                      Our service doesn't end with the report. We're here
                      through negotiations and closing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="gradient-text font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {forAgents.agent_resources_title}
            </h2>
            <p className="text-lg text-mediumGray">
              {forAgents.agent_resources_description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-lightGray rounded-lg p-6 text-center">
              <Download className="w-12 h-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="font-bold text-xl text-charcoal mb-2">
                Co-Branded Materials
              </h3>
              <p className="text-mediumGray mb-4">
                Professional handouts with your branding to share with clients
              </p>
              <button className="text-primaryBlue font-semibold hover:underline">
                Request Materials →
              </button>
            </div>

            <div className="bg-lightGray rounded-lg p-6 text-center">
              <FileCheck className="w-12 h-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="font-bold text-xl text-charcoal mb-2">
                "What to Expect" Guide
              </h3>
              <p className="text-mediumGray mb-4">
                Client handout explaining the inspection process
              </p>
              <button className="text-primaryBlue font-semibold hover:underline">
                Download PDF →
              </button>
            </div>

            <div className="bg-lightGray rounded-lg p-6 text-center">
              <Users className="w-12 h-12 text-primaryBlue mx-auto mb-4" />
              <h3 className="font-bold text-xl text-charcoal mb-2">
                Preferred Agent Portal
              </h3>
              <p className="text-mediumGray mb-4">
                Priority scheduling and special rates for your clients
              </p>
              <button className="text-primaryBlue font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Testimonials */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="gradient-text font-serif text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
            {forAgents.agents_are_saying_title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AgentTestimonial
              quote="Tim is my go-to inspector. He explains everything clearly to my clients without scaring them away from good homes. His reports are professional and delivered on time, every time."
              author="Sarah Johnson"
              company="Keller Williams Realty"
            />

            <AgentTestimonial
              quote="The best inspector I've worked with in 15 years. He understands the balance between being thorough and keeping deals together. My clients always feel informed and confident."
              author="Michael Chen"
              company="RE/MAX Central"
            />

            <AgentTestimonial
              quote="Bluebonnet makes me look good. Professional, punctual, and great at communicating with first-time buyers. The online scheduling is a game-changer for my busy clients."
              author="Jennifer Martinez"
              company="Coldwell Banker"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primaryBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {forAgents.build_a_partnership_title}
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            {forAgents.build_a_partnership_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={forAgents.schedule_an_inspection_btn_url}
              className="bg-white text-primaryBlue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              {forAgents.schedule_an_inspection_btn_title}
            </Link>
            <a
              href={forAgents.partner_with_us_btn_url}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primaryBlue transition-colors inline-block"
            >
              {forAgents.partner_with_us_btn_title}
            </a>
          </div>
          <p className="mt-6 text-sm opacity-90">
            {forAgents.direct_inspector_line_title}
          </p>
        </div>
      </section>
    </div>
  );
}
