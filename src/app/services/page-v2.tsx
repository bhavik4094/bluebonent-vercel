/**
 * @fileoverview Services page v2 - Clean, modern style inspired by Better Than Clean design
 */

import {
  HomeIcon,
  DollarIcon,
  HammerIcon,
  ChartIcon,
  CheckIcon,
  StarIcon,
} from "@/components/icons";

export default function ServicesPageV2() {
  return (
    <main className="min-h-screen bg-white">
      {/* Clean Hero Section - Better Than Clean Style */}
      <section className="relative bg-gradient-to-b from-mint-50/40 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-mint-600 mb-3 tracking-[0.2em] uppercase">
              Professional Inspection Program
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-[1.1]">
              Made for the Most
              <br />
              <span className="text-mint-500">Sensitive</span>
            </h1>
            <p className="text-base text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed font-light">
              Every home inspection handled with exceptional care for your
              family's safety. Safe even for babies, pets, and those with
              allergies. Zero compromises.
            </p>
            <button className="bg-gray-900 text-white text-xs font-semibold tracking-widest px-7 py-3.5 rounded-full hover:bg-gray-800 transition-all uppercase">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories - Better Than Clean Grid Style */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Start Inspecting Your Home Cleanly
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Family Starter Pack */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-b from-mint-50/50 to-white aspect-square flex items-center justify-center border border-mint-100 hover:shadow-lg transition-shadow">
                <div className="absolute top-3 right-3">
                  <span className="bg-mint-100 text-mint-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </span>
                </div>
                <div className="p-8">
                  <HomeIcon size={64} className="text-mint-500" />
                </div>
              </div>
              <h3 className="font-semibold text-base mb-1.5">
                Family Starter Pack
              </h3>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed px-2">
                Complete 400-point inspection for families and first-time buyers
              </p>
              <button className="bg-gray-900 text-white text-[11px] font-semibold tracking-wider px-5 py-2 rounded-full hover:bg-gray-800 transition-all uppercase">
                Shop Now
              </button>
            </div>

            {/* Cleaner Starter Pack */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50/50 to-white aspect-square flex items-center justify-center border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <DollarIcon size={64} className="text-blue-500" />
                </div>
              </div>
              <h3 className="font-semibold text-base mb-1.5">
                Cleaner Starter Packs
              </h3>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed px-2">
                Pre-listing inspection to sell faster and for more money
              </p>
              <button className="bg-gray-900 text-white text-[11px] font-semibold tracking-wider px-5 py-2 rounded-full hover:bg-gray-800 transition-all uppercase">
                Shop Now
              </button>
            </div>

            {/* Concentrate Refills */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-b from-purple-50/50 to-white aspect-square flex items-center justify-center border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <HammerIcon size={64} className="text-purple-500" />
                </div>
              </div>
              <h3 className="font-semibold text-base mb-1.5">
                Concentrate Refills
              </h3>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed px-2">
                New construction verification and phase inspections
              </p>
              <button className="bg-gray-900 text-white text-[11px] font-semibold tracking-wider px-5 py-2 rounded-full hover:bg-gray-800 transition-all uppercase">
                Shop Now
              </button>
            </div>

            {/* 2PK Dish Soap */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-b from-orange-50/50 to-white aspect-square flex items-center justify-center border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <ChartIcon size={64} className="text-orange-500" />
                </div>
              </div>
              <h3 className="font-semibold text-base mb-1.5">2PK Dish Soap</h3>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed px-2">
                Investment property analysis with ROI projections
              </p>
              <button className="bg-gray-900 text-white text-[11px] font-semibold tracking-wider px-5 py-2 rounded-full hover:bg-gray-800 transition-all uppercase">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section - Better Than Clean Style */}
      <section className="py-16 bg-mint-50/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            How We Compare
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
            We set the bar for inspection excellence. Superior service for less.
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left p-5 font-medium text-gray-700"></th>
                  <th className="text-center p-5">
                    <div className="inline-block">
                      <p className="font-bold text-base text-mint-600">
                        100% Tim-
                        <br />
                        Based
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Bluebonnet</p>
                    </div>
                  </th>
                  <th className="text-center p-5">
                    <div className="inline-block">
                      <p className="font-bold text-base text-gray-600">
                        Competitor
                        <br />
                        2020
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Chain Inspectors
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-5 text-gray-600">
                    Owner Performs Every Inspection
                  </td>
                  <td className="text-center p-5">
                    <CheckIcon className="inline text-mint-500" size={20} />
                  </td>
                  <td className="text-center p-5">
                    <span className="text-red-400 text-xl font-light">×</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-5 text-gray-600">400+ Point Inspection</td>
                  <td className="text-center p-5">
                    <CheckIcon className="inline text-mint-500" size={20} />
                  </td>
                  <td className="text-center p-5">
                    <span className="text-red-400 text-xl font-light">×</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-5 text-gray-600">
                    Same-Day Digital Reports
                  </td>
                  <td className="text-center p-5">
                    <CheckIcon className="inline text-mint-500" size={20} />
                  </td>
                  <td className="text-center p-5">
                    <span className="text-red-400 text-xl font-light">×</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-5 text-gray-600">
                    Direct Cell Phone Access
                  </td>
                  <td className="text-center p-5">
                    <CheckIcon className="inline text-mint-500" size={20} />
                  </td>
                  <td className="text-center p-5">
                    <span className="text-red-400 text-xl font-light">×</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-5 text-gray-600">
                    Free Thermal Imaging Included
                  </td>
                  <td className="text-center p-5">
                    <CheckIcon className="inline text-mint-500" size={20} />
                  </td>
                  <td className="text-center p-5">
                    <span className="text-red-400 text-xl font-light">×</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-5 text-gray-600">
                    200% Satisfaction Guarantee
                  </td>
                  <td className="text-center p-5">
                    <CheckIcon className="inline text-mint-500" size={20} />
                  </td>
                  <td className="text-center p-5">
                    <span className="text-red-400 text-xl font-light">×</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-5 text-center bg-gray-50/50">
              <button className="bg-gray-900 text-white text-[11px] font-semibold tracking-wider px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all uppercase">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* We Decided to Do It the Right Way Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
              We Decided to Do It the Right Way
            </h2>
            <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
              Years ago, Tim decided to bring a new standard to home inspections
              - one that puts families first. Every inspection personally
              performed, every detail carefully documented, every client
              personally cared for.
            </p>

            {/* The result section */}
            <div className="bg-mint-50/30 rounded-xl p-8 mb-10">
              <h3 className="font-bold text-lg mb-4">The result?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A home inspection service that families trust completely. With
                1,500+ inspections performed, a perfect 5-star rating, and zero
                compromises on quality, we've proven that doing things right
                matters. Every inspection gets Tim's personal attention, from
                the initial phone call to the final report and beyond.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center py-3">
                  <p className="text-3xl font-bold text-mint-600">1,500+</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Inspections Completed
                  </p>
                </div>
                <div className="text-center py-3">
                  <p className="text-3xl font-bold text-mint-600">100%</p>
                  <p className="text-xs text-gray-500 mt-1">Owner Performed</p>
                </div>
                <div className="text-center py-3">
                  <p className="text-3xl font-bold text-mint-600">5.0</p>
                  <p className="text-xs text-gray-500 mt-1">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You'll Love It Section */}
      <section className="py-16 bg-gradient-to-b from-mint-50/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Why You'll Love It
          </h2>

          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A better way to inspect - for families and investors. Every detail
              matters when protecting your biggest investment. That's why Tim
              personally performs every inspection, provides direct cell phone
              access, and stands behind every report.
            </p>
          </div>

          {/* Testimonial Cards - Better Than Clean Style */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                "Tim's inspection saved us from a $50,000 foundation problem.
                Worth every penny!"
              </p>
              <p className="font-semibold text-sm">Sarah M.</p>
              <p className="text-xs text-gray-400">First-time Buyer</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                "100% thorough service - tough on problems, gentle with clients.
                Highly recommend!"
              </p>
              <p className="font-semibold text-sm">Michael R.</p>
              <p className="text-xs text-gray-400">Home Seller</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                "Tim treated our home like it was his own. Found 47 issues in
                our 'perfect' new build."
              </p>
              <p className="font-semibold text-sm">David L.</p>
              <p className="text-xs text-gray-400">New Construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Starter Pack CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Starter Pack
          </h2>
          <p className="text-base text-gray-300 mb-6 max-w-xl mx-auto">
            Ready for the most thorough inspection? Book with Tim today.
          </p>
          <p className="text-2xl font-bold text-white mb-6">Starting at $350</p>
          <button className="bg-white text-gray-900 text-xs font-semibold tracking-widest px-7 py-3.5 rounded-full hover:bg-gray-100 transition-all uppercase mb-3">
            Shop Now
          </button>
          <p className="text-xs text-gray-400">
            or call{" "}
            <a href="tel:512-560-5670" className="text-white underline">
              512-560-5670
            </a>
          </p>
        </div>
      </section>

      {/* Our Science Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our Science
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We bring cutting-edge technology and proven methods to every
            inspection
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-mint-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-mint-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">
                Safe Surfactants
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed px-4">
                Non-invasive inspection methods protect your property
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">
                Careful Processing
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed px-4">
                Every report reviewed for accuracy before delivery
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">
                Exceptional Hygiene
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed px-4">
                Professional service with attention to detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Ingredients Section */}
      <section className="py-16 bg-mint-50/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our Key Ingredients
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
                  <circle
                    cx="40"
                    cy="40"
                    r="38"
                    stroke="#86efac"
                    strokeWidth="2"
                  />
                  <path
                    d="M40 15v25M40 40l15 15"
                    stroke="#22c55e"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">
                Water
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Transparent reporting - clear as water
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
                  <rect
                    x="20"
                    y="20"
                    width="40"
                    height="40"
                    rx="8"
                    stroke="#a5b4fc"
                    strokeWidth="2"
                  />
                  <circle cx="40" cy="40" r="8" fill="#6366f1" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">
                Alkyl Glycosides
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Advanced technology for thorough inspections
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
                  <path
                    d="M40 10l10 20 20 3-15 14 4 20L40 55 21 67l4-20L10 33l20-3z"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    fill="#fef3c7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">
                Ethanol
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Pure expertise, no shortcuts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Formulas Section */}
      <section className="py-16 bg-gradient-to-b from-white to-mint-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Pure formulas.
                <br />
                No harsh chemicals.
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Our inspection process is completely non-invasive and safe for
                your property. Using advanced technology like thermal imaging
                and proven inspection methods, we deliver thorough evaluations
                without any damage.
              </p>
              <button className="bg-gray-900 text-white text-xs font-semibold tracking-widest px-7 py-3.5 rounded-full hover:bg-gray-800 transition-all uppercase">
                Shop Now
              </button>
            </div>
            <div className="relative">
              <div className="bg-mint-50 rounded-2xl p-8 text-center">
                <p className="text-6xl mb-4">🏠</p>
                <h3 className="font-bold text-lg mb-2">Safe for Your Home</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Non-invasive methods mean zero damage to your property. Every
                  inspection uses the same care we'd give our own home.
                </p>
                <div className="mt-6 flex justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-mint-400 rounded-full"></span>
                  <span className="inline-block w-2 h-2 bg-mint-300 rounded-full"></span>
                  <span className="inline-block w-2 h-2 bg-mint-200 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
