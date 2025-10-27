/**
 * @fileoverview Services page showcasing all inspection services with trust signals and conversion optimization
 */

import { fetchAPI } from "@/lib/api";

import Link from "next/link";
import {
  HomeIcon,
  DollarIcon,
  HammerIcon,
  ChartIcon,
  // FamilyIcon,
  // ClipboardIcon,
  PhoneIcon,
  // ThermalIcon,
  // PipeIcon,
  // PoolIcon,
  // BugIcon,
  // BeakerIcon,
  // RadiationIcon,
  CheckIcon,
  StarIcon,
  ArrowRightIcon,
} from "@/components/icons";
import Image from "next/image";
import { normalizeImage } from "@/lib/utils";

// Core inspection services with detailed benefits
const coreServices = [
  {
    name: "Buyer's Inspections",
    href: "/services/buyers-inspection",
    icon: HomeIcon,
    tagline: "Don't Buy a Money Pit",
    description:
      "Protect your family's biggest investment with our thorough 400-point inspection",
    benefits: [
      "Uncover hidden issues before they become your problems",
      "Detailed report for negotiating repairs or price",
      "Peace of mind knowing the true condition",
    ],
    targetAudience: "Perfect for first-time homebuyers and families",
    cta: "Protect Your Investment",
    urgency: "Most popular service",
    price: "Starting at $350",
  },
  {
    name: "Pre-Listing Inspections",
    href: "/services/sellers-inspection",
    icon: DollarIcon,
    tagline: "Sell Faster, For More Money",
    description:
      "Eliminate deal-killing surprises and maximize your sale price",
    benefits: [
      "Fix issues on your terms before listing",
      "Homes with pre-inspections sell 23% faster",
      "Build buyer confidence with transparency",
    ],
    targetAudience: "Smart sellers who want smooth closings",
    cta: "Maximize Your Sale",
    urgency: "Avoid last-minute negotiations",
    price: "Starting at $350",
  },
  {
    name: "New Construction Inspections",
    href: "/services/new-construction-inspection",
    icon: HammerIcon,
    tagline: "New Doesn't Mean Perfect",
    description: "Catch builder mistakes before your warranty expires",
    benefits: [
      "Document issues while builder is responsible",
      "Verify quality and code compliance",
      "Phase inspections available",
    ],
    targetAudience: "New build buyers who want perfection",
    cta: "Verify Quality",
    urgency: "Before warranty expires",
    price: "Starting at $450",
  },
  {
    name: "Investment Property Inspections",
    href: "/services/investment-property-inspection",
    icon: ChartIcon,
    tagline: "Maximize Your ROI",
    description: "Get the data you need for smart investment decisions",
    benefits: [
      "Detailed repair cost estimates",
      "Priority-ranked issues for budgeting",
      "Fast same-day reports for quick decisions",
    ],
    targetAudience: "Real estate investors and landlords",
    cta: "Protect Your ROI",
    urgency: "Multiple property discounts",
    price: "Starting at $400",
  },
];

// Ancillary services that add value
// const ancillaryServices = [
//   {
//     name: "Thermal Imaging",
//     icon: ThermalIcon,
//     description: "Find hidden moisture and electrical issues",
//     price: "+$75",
//     value: "Can save thousands in water damage",
//   },
//   {
//     name: "Sewer Scope",
//     icon: PipeIcon,
//     description: "Avoid $10,000+ sewer line surprises",
//     price: "+$195",
//     value: "Essential for older homes",
//   },
//   {
//     name: "Pool & Spa",
//     icon: PoolIcon,
//     description: "Complete pool system inspection",
//     price: "+$125",
//     value: "Protect your backyard investment",
//   },
//   {
//     name: "Termite/WDO",
//     icon: BugIcon,
//     description: "Wood destroying organism inspection",
//     price: "+$75",
//     value: "Required by many lenders",
//   },
//   {
//     name: "Mold Testing",
//     icon: BeakerIcon,
//     description: "Air quality and mold assessment",
//     price: "Quote",
//     value: "Protect your family's health",
//   },
//   {
//     name: "Radon Testing",
//     icon: RadiationIcon,
//     description: "EPA-recommended radon levels check",
//     price: "+$125",
//     value: "Invisible danger detection",
//   },
// ];

// Testimonials specific to services
const serviceTestimonials = [
  {
    quote:
      "Tim's inspection saved us from buying a home with $50,000 in foundation issues. Worth every penny!",
    author: "Sarah M.",
    service: "Buyer's Inspection",
    rating: 5,
  },
  {
    quote:
      "The pre-listing inspection helped us fix minor issues and our home sold in 3 days!",
    author: "Michael & Jennifer R.",
    service: "Pre-Listing Inspection",
    rating: 5,
  },
  {
    quote:
      "Found 47 issues in our 'perfect' new build. Builder fixed everything thanks to Tim's detailed report.",
    author: "David L.",
    service: "New Construction",
    rating: 5,
  },
];

const data = await fetchAPI("pages?slug=services");
const page = data?.[0];
const acf = page?.acf || {};
const inspectionsitems = acf?.enhanced_trust_repeater || [];
const familiesTrustItems = acf?.families_trust_repeater || [];
const coreServicesData = acf?.choose_inspection_repeater || [];
const ancillaryServicesData = acf?.add_on_card_repeater || [];

type familiestrustcardicon = {
  families_trust_card_icon?: {
    url: string;
  };
};
type coreServicesIcon = {
  choose_inspection_card_icon?: {
    url: string;
  };
};
type ancillaryServicesIcon = {
  add_on_card_icon?: {
    url: string;
  };
};
const familiestrustcard = await Promise.all(
  (acf.families_trust_repeater || []).map(async (m: familiestrustcardicon) => ({
    ...m,
    families_trust_card_icon:
      (await normalizeImage(m.families_trust_card_icon)) || "",
  }))
);

const coreServicesIcons = await Promise.all(
  (acf.choose_inspection_repeater || []).map(async (n: coreServicesIcon) => ({
    ...n,
    choose_inspection_card_icon:
      (await normalizeImage(n.choose_inspection_card_icon)) || "",
  }))
);
const ancillaryIcon = await Promise.all(
  (acf.add_on_card_repeater || []).map(async (o: ancillaryServicesIcon) => ({
    ...o,
    add_on_card_icon: (await normalizeImage(o.add_on_card_icon)) || "",
  }))
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Trust Signals */}
      <section className="relative bg-gradient-to-r from-primaryBlue to-accentBlue text-white py-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              {acf?.services_hero_title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              {acf?.services_hero_description}
            </p>

            {/* Enhanced Trust Bar */}

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-flex flex-wrap justify-center gap-8 text-sm md:text-base">
              {Array.isArray(inspectionsitems) &&
                inspectionsitems.map((item, index) => (
                  <span className="flex items-center gap-2" key={index}>
                    <CheckIcon className="text-white" size={20} />
                    {item?.enhanced_trust_title}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="gradient-text font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {acf?.families_trust_title}
            </h2>
            <p className="text-lg text-mediumGray mb-12 max-w-2xl mx-auto">
              {acf?.families_trust_description}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {Array.isArray(familiesTrustItems) &&
                familiesTrustItems.map((item, index) => (
                  <div
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    key={index}
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center text-primaryBlue">
                      {/* <FamilyIcon size={40} /> */}
                      <Image
                        src={familiestrustcard[index]?.families_trust_card_icon}
                        alt={item?.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-charcoal">
                      {item?.families_trust_card_title}
                    </h3>
                    <p className="text-mediumGray leading-relaxed">
                      {item?.families_trust_card_description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 relative bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230052FF' fill-opacity='0.3'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="gradient-text font-serif text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">
            {acf?.choose_inspection_text}
          </h2>
          <p className="text-center text-mediumGray text-lg mb-16 max-w-2xl mx-auto">
            {acf?.choose_inspection_description}
          </p>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {Array.isArray(coreServicesData) &&
              coreServicesData.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start">
                        <div className="mr-4 group-hover:scale-110 transition-transform text-primaryBlue">
                          {/* <service.icon size={48} /> */}

                          <Image
                            src={
                              coreServicesIcons[index]
                                ?.choose_inspection_card_icon
                            }
                            alt={service.name}
                            width={48}
                            height={48}
                          />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-charcoal mb-1">
                            {service.choose_inspection_card_title}
                          </h3>
                          <span className="inline-block text-xs  bg-gradient-to-r from-primaryBlue to-accentBlue text-white px-3 py-1 rounded-full font-medium">
                            {service.choose_inspection_card_subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xl font-bold bg-gradient-to-r from-primaryBlue to-accentBlue bg-clip-text text-transparent mb-4">
                      {service.choose_inspection_card_tagline}
                    </p>

                    <p className="text-mediumGray mb-6 leading-relaxed">
                      {service.choose_inspection_card_description}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl p-4 mb-6">
                      <ul className="space-y-3">
                        {service.choose_inspection_points_repeater.map(
                          (benefit: any, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <CheckIcon
                                className="text-accentBlue mr-3 mt-0.5 flex-shrink-0"
                                size={18}
                              />
                              <span className="text-sm text-charcoal leading-relaxed">
                                {benefit.choose_inspection_points_title}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <p className="text-sm text-mediumGray italic mb-6 border-l-4 border-blue-200 pl-4">
                      {service.targetaudience_title}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-charcoal">
                          {service.choose_inspection_card_price}
                        </span>
                        <span className="text-xs text-mediumGray block">
                          Plus applicable fees
                        </span>
                      </div>
                      <a
                        href={service.choose_inspection_card_btn_url}
                        className="bg-gradient-to-r from-primaryBlue to-accentBlue text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all group-hover:scale-105"
                      >
                        {service.choose_inspection_card_btn_title}
                        <ArrowRightIcon
                          className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                          size={16}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Ancillary Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="gradient-text font-serif text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">
            {acf?.add_on_services_text}
          </h2>
          <p className="text-center text-mediumGray text-lg mb-16 max-w-2xl mx-auto">
            {acf?.add_on_services_description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Array.isArray(ancillaryServicesData) &&
              ancillaryServicesData.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primaryBlue">
                    {/* <service.icon size={32} /> */}
                    <Image
                      src={ancillaryIcon[index].add_on_card_icon}
                      alt={service.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-charcoal mb-3">
                    {service.add_on_card_title}
                  </h3>
                  <p className="text-sm text-mediumGray mb-4 leading-relaxed">
                    {service.add_on_card_description}
                  </p>
                  <div className="bg-blue-50 rounded-lg px-3 py-2 mb-4">
                    <p className="text-xs text-accentBlue font-medium">
                      {service.add_on_card_highlight}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="font-bold text-xl text-primaryBlue">
                      {service.add_on_card_price}
                    </span>
                    <button className="text-sm text-primaryBlue hover:text-blue-700 font-medium group">
                      {service.add_on_learn_more_title}
                      <ArrowRightIcon
                        className="inline-block ml-1 group-hover:translate-x-1 transition-transform"
                        size={14}
                      />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="gradient-text font-serif text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">
            {acf?.cedar_park_families_text}
          </h2>
          <p className="text-center text-mediumGray text-lg mb-16 max-w-2xl mx-auto">
            {acf?.cedar_park_families_description}
          </p>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {serviceTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="text-yellow-400" size={20} />
                  ))}
                </div>
                <blockquote className="text-charcoal mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-charcoal mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-mediumGray">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="gradient-text font-serif text-4xl font-bold text-center text-charcoal mb-12">
            {acf?.common_service_questions_text}
          </h2>

          <div className="space-y-6">
            {acf.common_service_questions_repeater?.map(
              (faq: any, idx: any) => (
                <details key={idx} className="border-b border-gray-200 pb-6">
                  <summary className="font-bold text-lg text-charcoal cursor-pointer hover:text-primaryBlue">
                    {faq.common_service_questions_title}
                  </summary>
                  <p className="mt-4 text-mediumGray">
                    {faq.common_service_ans_title}
                  </p>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-primaryBlue to-accentBlue text-white overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, white 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, white 0%, transparent 50%),
                            radial-gradient(circle at 40% 40%, white 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {acf?.ready_to_protect_title}
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-50 leading-relaxed">
            {acf?.ready_to_protect_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href={acf?.schedule_your_inspection_button_url}
              className="group bg-white text-primaryBlue px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              {acf?.schedule_your_inspection_button_title}
              <ArrowRightIcon
                className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <a
              href={acf?.call_tim_url}
              className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primaryBlue transition-all hover:scale-105 flex items-center justify-center"
            >
              <PhoneIcon className="mr-2" size={20} />
              {acf?.call_tim_title}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
