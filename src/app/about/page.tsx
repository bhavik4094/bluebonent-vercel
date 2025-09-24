/**
 * @fileoverview Enhanced About Page that leverages psychological insights to build
 * deep trust and emotional connection with prospective clients, positioning Tim McCoy
 * as the only logical choice for home inspection in Cedar Park.
 */

import Image from "next/image";
import {
  Shield,
  Award,
  Users,
  Home,
  Heart,
  Phone,
  CheckCircle,
  Star,
  Clock,
  MapPin,
} from "lucide-react";
import { TrustBar } from "@/components/trust-bar";
import OwnerOperatorComparison from "@/components/owner-operator-comparison";
import FirstTimeBuyerStories from "@/components/first-time-buyer-stories";
import ThreeAMPromise from "@/components/three-am-promise";
import ThoroughInspectionProcess from "@/components/thorough-inspection-process";
import OurNonNegotiables from "@/components/our-non-negotiables";

/**
 * Renders the About page with powerful psychological anchors and trust-building elements
 * that address core buyer anxieties and position Bluebonnet as the premium choice.
 * @returns Complete About page with hero, story, comparisons, and promises
 */
export default function AboutPage() {
  return (
    <main>
      {/* Tim's Story - Emotional Connection */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative animate-fadeInUp">
                {/* Tim's family photo */}
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/fml.png"
                      alt="Tim McCoy and family in Cedar Park"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Credentials Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border-4 border-accentBlue">
                    <div className="text-center">
                      <Award className="w-10 h-10 text-primaryBlue mx-auto mb-2" />
                      <p className="font-bold text-charcoal">TREC #23059</p>
                      <p className="text-xs text-mediumGray">
                        Licensed Professional
                      </p>
                    </div>
                  </div>

                  {/* Years Badge */}
                  <div className="absolute -top-6 -left-6 bg-accentOrange text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-2xl">
                    <span className="text-2xl font-bold">10+</span>
                    <span className="text-xs">Years</span>
                  </div>
                </div>
              </div>

              {/* Story Side */}
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "200ms" }}
              >
                <h2 className="gradient-text font-serif text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                  Why Your Home Matters to Me
                  <span className="text-primaryBlue">.</span>
                </h2>

                <div className="space-y-4 text-mediumGray text-lg leading-relaxed">
                  <p>
                    <span className="font-bold text-charcoal">
                      As a father of seven and Cedar Park resident,
                    </span>{" "}
                    I understand the weight of your home-buying decision. Every
                    inspection I perform is conducted with the same care and
                    attention I'd give my own family's home.
                  </p>

                  <p>
                    After my third child was born, I made a decision that
                    changed everything. I realized I couldn't tell families
                    "this house is safe" while rushing through corporate quotas.
                    Every inspection is someone's dream—or potential nightmare.
                    That deserves my full attention, not a stopwatch.
                  </p>

                  <p>
                    My involvement with the local YMCA and church isn't just
                    community service—it's a reminder that behind every
                    inspection is a family counting on me to protect their
                    future.
                    <span className="font-bold text-charcoal">
                      {" "}
                      When you hire me, you're not customer #847. You're my
                      neighbor.
                    </span>
                  </p>

                  <p className="italic text-primaryBlue font-semibold">
                    "My wife knows that when a client calls, I answer. My kids
                    know that helping families make safe decisions about their
                    homes is what Dad does. This isn't just a business—it's my
                    family's contribution to our Cedar Park community."
                  </p>
                </div>

                {/* Local Connection */}
                <div className="mt-8 p-6 bg-lightGray rounded-xl">
                  <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accentOrange" />
                    Deep Local Knowledge
                  </h3>
                  <ul className="space-y-2 text-sm text-mediumGray">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accentBlue flex-shrink-0 mt-0.5" />
                      <span>
                        Cedar Park resident since 2008 - I know our soil,
                        weather, and builders
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accentBlue flex-shrink-0 mt-0.5" />
                      <span>
                        My kids attend local schools - I have skin in the game
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accentBlue flex-shrink-0 mt-0.5" />
                      <span>
                        Active in YMCA and local church - you'll see me around
                        town
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accentBlue flex-shrink-0 mt-0.5" />
                      <span>
                        I inspect for your neighbors - ask around about
                        Bluebonnet
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner-Operator Comparison - The Big Differentiator */}
      <OwnerOperatorComparison />

      {/* Thorough Inspection Process - What We Actually Do */}
      <ThoroughInspectionProcess />

      {/* First-Time Buyer Stories - Social Proof */}
      <FirstTimeBuyerStories />

      {/* Our Non-Negotiables - Quality Promises */}
      <OurNonNegotiables />

      {/* The 3AM Promise - Memorable Emotional Anchor */}
      <ThreeAMPromise />

      {/* Final CTA Section */}
      <section className="py-24  bg-gradient-to-r from-primaryBlue to-accentBlue  text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Don't settle for a corporate checklist when you can have a lifetime
            advocate who treats your home like his family's future depends on
            it.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-white" />
              <span className="font-bold">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-white" />
              <span className="font-bold">24hr Reports</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-white" />
              <span className="font-bold">200% Guarantee</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule"
              className="px-8 py-4 bg-white text-primaryBlue font-bold rounded-full shadow-2xl hover:bg-lightGray transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule Your Inspection with Tim
            </a>
            <a
              href="tel:512-560-5670"
              className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now: 512-560-5670
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
