/**
 * @fileoverview Real Estate Agent Portal page implementation.
 * @description This page positions Bluebonnet as a strategic partner for real estate agents,
 * addressing their specific needs and pain points per Phase 2.3 of the checklist.
 */

import { fetchAPI } from "@/lib/api";
import { normalizeImage } from "@/lib/utils";
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
        <img key={i} src="/star.png" alt="Star" className="w-5 h-5" />
      ))}
    </div>
    <p className="text-mediumGray mb-4 italic">{quote}</p>
    <div>
      <p className="font-semibold text-charcoal">{author}</p>
      <p className="text-sm text-mediumGray">{company}</p>
    </div>
  </div>
);

const data = await fetchAPI("pages?slug=for-agents");
const page = data?.[0];
const forAgents = page?.acf || {};
type coreServicesIcon = {
  agents_choose_card_icon?: {
    url: string;
  };
};
const agentsChooseIcons = await Promise.all(
  (forAgents.agents_choose_repeater || []).map(async (n: coreServicesIcon) => ({
    ...n,
    agents_choose_card_icon:
      (await normalizeImage(n.agents_choose_card_icon)) || "",
  }))
);
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
            {forAgents.agents_choose_repeater.map((benefit: any, idx: any) => (
              <AgentBenefit
                key={idx}
                icon={
                  <img
                    src={agentsChooseIcons[idx].agents_choose_card_icon}
                    alt={benefit.agents_choose_card_title}
                    className="w-8 h-8 object-contain"
                  />
                }
                title={benefit.agents_choose_card_title}
                description={benefit.agents_choose_card_description}
              />
            ))}
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
                {forAgents.our_promise_repeater?.map(
                  (benefit: any, idx: any) => (
                    <div className="flex items-start gap-4" key={idx}>
                      <div className="w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-charcoal mb-2">
                          {benefit.our_promise_title}
                        </h3>
                        <p className="text-mediumGray">
                          {benefit.agents_promise_description}
                        </p>
                      </div>
                    </div>
                  )
                )}
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
            {forAgents.agent_resources_repeater?.map(
              (benefit: any, idx: any) => (
                <div
                  className="bg-lightGray rounded-lg p-6 text-center"
                  key={idx}
                >
                  <Download className="w-12 h-12 text-primaryBlue mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-charcoal mb-2">
                    {benefit.agent_resources_card_title}
                  </h3>
                  <p className="text-mediumGray mb-4">
                    {benefit.agent_resources_card_description}
                  </p>
                  <button className="text-primaryBlue font-semibold hover:underline">
                    {benefit.agent_resources_btn_title} →
                  </button>
                </div>
              )
            )}
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
