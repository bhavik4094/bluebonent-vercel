/**
 * @fileoverview The 3AM Promise component - a powerful emotional security promise
 * that creates a memorable commitment to lifetime support, addressing the fear of
 * being ghosted after the inspection.
 */

import { Moon, Phone, Clock, Heart } from "lucide-react";

/**
 * Renders the 3AM Promise - a memorable emotional anchor that promises
 * lifetime support and direct access, differentiating from corporate call centers.
 * @returns 3AM Promise component with strong psychological impact
 */
export default function ThreeAMPromise() {
  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-black text-white relative overflow-hidden">
      {/* Starry night effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Moon Icon */}
          <div className="mb-8 animate-float">
            <div className="inline-block p-6 bg-gradient-to-r from-primaryBlue to-accentBlue rounded-full">
              <Moon className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Main Promise */}
          <h2 className="font-serif text-5xl lg:text-7xl font-bold mb-8 animate-fadeInUp">
            The <span className="text-accentBlue">3AM</span> Promise
          </h2>

          <div
            className="max-w-3xl mx-auto mb-12 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <p className="text-2xl lg:text-3xl leading-relaxed font-light mb-8">
              "If you wake up at 3am worried about something in your inspection
              report, you won't reach a call center.{" "}
              <span className="font-bold text-accentBlue">
                You'll reach me - Tim.
              </span>
            </p>

            <p className="text-xl opacity-90">
              Because when you trust someone with your family's biggest
              investment, that relationship doesn't end when the inspection
              does."
            </p>
          </div>

          {/* Support Features */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fadeInUp"
            style={{ animationDelay: "400ms" }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-10 h-10 text-accentBlue mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Direct Cell Access</h3>
              <p className="text-sm opacity-80">
                My personal number, not a corporate hotline
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-10 h-10 text-accentBlue mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Lifetime Support</h3>
              <p className="text-sm opacity-80">
                Questions answered for as long as you own the home
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Heart className="w-10 h-10 text-accentBlue mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Real Relationship</h3>
              <p className="text-sm opacity-80">
                I remember your home and your family's needs
              </p>
            </div>
          </div>

          {/* Comparison Statement */}
          <div
            className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-300/20 mb-12 animate-fadeInUp"
            style={{ animationDelay: "600ms" }}
          >
            <h3 className="font-serif text-2xl font-bold mb-4">
              The Corporate Alternative?
            </h3>
            <p className="text-lg opacity-90 mb-4">
              "Your call is important to us. Please leave a message and an
              available representative will return your call within 2-3 business
              days..."
            </p>
            <p className="text-sm opacity-70 italic">
              - Every franchise inspection company ever
            </p>
          </div>

          {/* Personal Statement */}
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fadeInUp"
            style={{ animationDelay: "800ms" }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primaryBlue to-accentBlue rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold">TM</span>
            </div>
            <div className="text-left max-w-xl">
              <p className="text-lg mb-2 font-light italic">
                "My wife knows that when a client calls, I answer. My kids know
                that helping families make safe decisions about their homes is
                what Dad does. This isn't just a business - it's my family's
                contribution to our Cedar Park community."
              </p>
              <p className="font-bold text-accentBlue">- Tim McCoy, Owner</p>
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-12 animate-fadeInUp"
            style={{ animationDelay: "1000ms" }}
          >
            <p className="text-lg mb-6 opacity-90">
              Don't settle for a corporate checklist when you can have a
              lifetime advocate
            </p>
            <a
              href="tel:512-560-5670"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br  from-primaryBlue to-accentBlue text-white font-bold rounded-full shadow-2xl hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Save Tim's Direct Number: 512-560-5670
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
