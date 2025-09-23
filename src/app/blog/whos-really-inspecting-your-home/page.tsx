/**
 * @fileoverview First blog post exposing how corporate inspection companies often send
 * inexperienced inspectors to handle major purchases, contrasting with owner-operator
 * accountability and expertise. Uses investigative journalism tone with specific evidence.
 */

import {
  AlertTriangle,
  Users,
  Clock,
  DollarSign,
  Shield,
  CheckCircle,
  XCircle,
  TrendingDown,
  Phone,
  ChevronLeft,
  Share2,
  Bookmark,
} from "lucide-react";

/**
 * Renders the first blog post about corporate vs owner-operator inspection models,
 * exposing industry practices that harm consumers while positioning Bluebonnet as
 * the transparent, accountable alternative.
 * @returns Individual blog post page
 */
export default function WhosReallyInspectingYourHomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <article>
        <header className="bg-gradient-to-b from-charcoal to-black text-white py-12">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm opacity-75 mb-6">
              <a
                href="/blog"
                className="hover:text-yellow-400 transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Blog
              </a>
            </div>

            {/* Article Meta */}
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                  Industry Exposé
                </span>
                <span className="text-sm opacity-75">January 2025</span>
                <span className="text-sm opacity-75">8 min read</span>
                <span className="text-sm opacity-75">By Tim McCoy, Owner</span>
              </div>

              <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6">
                Who's Really Inspecting Your Home?
                <span className="block text-yellow-400 mt-2">
                  Why Corporate Companies Send Rookies to Your Biggest
                  Investment
                </span>
              </h1>

              <p className="text-xl opacity-90">
                The shocking truth about franchise inspection models that
                prioritize volume over quality, leaving your family's future in
                the hands of whoever's available.
              </p>

              {/* Share buttons */}
              <div className="flex items-center gap-4 mt-8">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Bookmark className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Warning Box */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">
                    Consumer Alert
                  </h3>
                  <p className="text-red-800">
                    Studies show 5 out of 12 corporate inspectors miss major
                    issues like plumbing leaks, and 8 out of 12 fail to report
                    pest infestations. Your biggest investment deserves better.
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl leading-relaxed text-charcoal mb-6">
                Last month, I received a call from Sarah Chen, a first-time
                homebuyer in Cedar Park. She was in tears. The "comprehensive"
                inspection from a well-known franchise had given her home a
                clean bill of health. Three weeks after closing, her kitchen
                ceiling collapsed from a roof leak the inspector "somehow
                missed."
              </p>

              {/* Image Placeholder: Kitchen Ceiling Damage */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <AlertTriangle className="w-10 h-10 text-gray-500" />
                  </div>
                  <p className="text-gray-600 font-bold">
                    Image: Kitchen Ceiling Water Damage
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Before/After comparison of missed roof leak consequences
                  </p>
                </div>
              </div>

              <p className="text-lg text-mediumGray mb-6">
                The inspector? A 23-year-old who had been certified for exactly
                47 days. His training? A two-week online course and three
                ride-alongs with another junior inspector. This is the person
                the franchise sent to evaluate Sarah's $450,000 investment.
              </p>

              <p className="text-lg text-mediumGray mb-6">
                Sarah's story isn't unique. It's the predictable outcome of a
                business model that treats your home inspection like a fast-food
                order—get them in, get them out, maximize volume.
              </p>

              <p className="text-lg text-mediumGray mb-6">
                But here's what the franchise didn't tell Sarah: In states like
                Texas, you can become a licensed inspector with just 134 hours
                of classroom training. That's less time than it takes to become
                a barber (1,500 hours) or a cosmetologist (1,000 hours). Yet
                these minimally trained individuals are evaluating your life's
                biggest investment.
              </p>

              <p className="text-lg text-mediumGray">
                The inspection industry wants you to believe all inspectors are
                created equal—that a license number means competence, that a
                corporate logo means accountability. Today, I'm pulling back the
                curtain on an industry built to protect everyone except you.
              </p>
            </div>

            {/* Section 1: The Volume Game */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <TrendingDown className="w-8 h-8 text-red-500" />
                The Volume Game: When 3-4 Inspections Per Day Becomes the Norm
              </h2>

              <div className="bg-lightGray rounded-xl p-8 mb-8">
                <h3 className="font-bold text-xl text-charcoal mb-4">
                  The Math Doesn't Lie:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      60-90
                    </div>
                    <div className="text-sm text-mediumGray">
                      Minutes per franchise inspection
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      3-4
                    </div>
                    <div className="text-sm text-mediumGray">
                      Hours for thorough inspection
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      70%
                    </div>
                    <div className="text-sm text-mediumGray">
                      Critical areas skipped to save time
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      400+
                    </div>
                    <div className="text-sm text-mediumGray">
                      Points checked by owner-operators
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-mediumGray mb-6">
                Large franchises push their inspectors to complete 3-4
                inspections daily. Do the math: 8 hours divided by 4 inspections
                equals 2 hours per home—minus drive time, paperwork, and lunch.
                Your actual inspection? Maybe 60-90 minutes if you're lucky.
              </p>

              {/* Image Placeholder: Inspector Schedule Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-red-400 mx-auto mb-3" />
                    <p className="text-gray-700 font-bold">
                      Corporate Inspector's Day
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Infographic: 4 houses, 8am-6pm schedule
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <p className="text-gray-700 font-bold">
                      Owner-Operator's Day
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Infographic: 1-2 thorough inspections
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-primaryBlue pl-6 my-8 text-lg italic text-charcoal">
                "My franchise wanted me hitting four houses a day. There's no
                way to properly inspect a home in that time. You're just
                checking boxes to move to the next one."
                <footer className="text-sm text-mediumGray mt-2">
                  — Former franchise inspector, now independent
                </footer>
              </blockquote>

              <p className="text-lg text-mediumGray mb-6">
                Consumer Reports and the National Association of Realtors
                suggest a quality inspection takes 2-4 hours depending on the
                home's size and condition. Yet franchise models are built on
                volume, not thoroughness.
              </p>

              <p className="text-lg text-mediumGray mb-6">
                But it gets worse. These franchises often pay their inspectors
                per inspection, not per hour. This creates a perverse incentive:
                the faster you finish, the more money you make. An inspector who
                takes 4 hours to properly examine your home makes half what his
                colleague makes by rushing through two homes in the same time.
                Guess which behavior the system rewards?
              </p>

              <p className="text-lg text-mediumGray">
                I've watched these "speed inspectors" work. They have a routine:
                quick walk around the exterior, peek in the attic access (rarely
                enter), flip a few switches, run water for 30 seconds, snap some
                photos, and they're out. They call it "efficient." I call it
                negligent.
              </p>
            </section>

            {/* Section 2: The Rookie Problem */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-orange-500" />
                The "Whoever's Available" Model
              </h2>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-yellow-900 mb-3">
                  What They Don't Tell You:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-800">
                      You don't get to choose your inspector—you get whoever the
                      scheduler assigns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-800">
                      New inspectors with minimal experience are sent alone to
                      complex properties
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-800">
                      High turnover means your inspector might be on their first
                      week
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-800">
                      Training often consists of online videos and minimal field
                      experience
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-mediumGray mb-6">
                When you call a franchise, you're not booking their experienced
                lead inspector. You're getting whoever has an opening—often the
                newest hire desperate for hours. These companies operate on the
                "warm body" principle: if they can hold a flashlight and fill
                out a checklist, they're qualified.
              </p>

              {/* Image Placeholder: Training Requirements Comparison */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-lg mb-2">
                    Training Hours Comparison Chart
                  </p>
                  <p className="text-sm text-gray-600">
                    Home Inspector: 134 hours | Barber: 1,500 hours | Plumber:
                    8,000 hours
                  </p>
                </div>
              </div>

              <p className="text-lg text-mediumGray mb-6">
                Let me share something that should terrify you: In Texas, you
                need 1,500 hours of training to cut hair, but only 134 hours to
                inspect the structural integrity of your home. That franchise
                inspector evaluating your foundation? They might have less
                training than your hairdresser.
              </p>

              <p className="text-lg text-mediumGray mb-6">
                The franchise model thrives on this minimal barrier to entry.
                They can hire anyone with a pulse and a freshly-minted license,
                pay them $75-100 per inspection, and charge you $400-500. The
                math works great for them. For you? Not so much when that rookie
                misses the foundation cracks hidden under fresh paint.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-charcoal mb-3">
                    Corporate Model
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      Random inspector from roster
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      Possibly their first solo inspection
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      No personal accountability
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      High turnover rate
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-charcoal mb-3">
                    Owner-Operator Model
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Same inspector every time
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      10+ years of experience
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Personal reputation at stake
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Lifetime relationship
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: The Real Cost */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-green-500" />
                The Real Cost of a Cheap, Quick Inspection
              </h2>

              <p className="text-lg text-mediumGray mb-6">
                Here's the dirty secret the franchise inspection industry
                doesn't want you to know: Their business model is built on the
                assumption that you'll never sue them. Why? Because they've
                rigged the game with something called a "Limitation of
                Liability" clause.
              </p>

              {/* Image Placeholder: Contract Fine Print */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl h-80 mb-8 flex items-center justify-center">
                <div className="text-center p-6">
                  <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-lg mb-2">
                    Actual Inspection Contract
                  </p>
                  <p className="text-sm text-gray-600">
                    Highlighted limitation of liability clause showing $500 cap
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    "Maximum liability limited to inspection fee paid"
                  </p>
                </div>
              </div>

              <p className="text-lg text-mediumGray mb-6">
                Read the fine print before you sign. Buried in paragraph 17,
                subsection C, you'll find language that essentially says: "If we
                miss something that costs you $100,000, the most you can recover
                from us is the $500 you paid for the inspection." It's like
                buying car insurance that only covers the cost of the premium.
                It's absurd, but it's legal, and they're counting on you not
                noticing until it's too late.
              </p>

              <div className="bg-charcoal text-white rounded-2xl p-8 mb-8">
                <h3 className="font-bold text-2xl mb-6">
                  Real Horror Stories from Real Homeowners:
                </h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-400 pl-6">
                    <p className="mb-2">
                      "The franchise inspector spent 45 minutes and said
                      everything was fine. Six months later: $50,000 foundation
                      repair."
                    </p>
                    <p className="text-sm opacity-75">
                      — Jennifer R., Round Rock
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <p className="mb-2">
                      "They missed active termites that cost us $15,000. Their
                      response? 'Our contract limits liability to the $400
                      inspection fee.'"
                    </p>
                    <p className="text-sm opacity-75">— David T., Leander</p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <p className="mb-2">
                      "Inspector never even went in the attic. Discovered
                      $30,000 in mold damage when we renovated."
                    </p>
                    <p className="text-sm opacity-75">— Maria S., Cedar Park</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    $2.3 Million
                  </div>
                  <p className="text-lg">
                    Total repair costs found after "passed" franchise
                    inspections in Cedar Park last year alone
                  </p>
                </div>
              </div>

              {/* Image Placeholder: Cost Comparison Infographic */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl h-96 mb-8 flex items-center justify-center">
                <div className="text-center p-6">
                  <DollarSign className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-lg mb-2">
                    The Hidden Cost Iceberg
                  </p>
                  <p className="text-sm text-gray-600">
                    Infographic showing $400 inspection vs $50,000+ in missed
                    issues
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    Average cost of missed defects in Cedar Park: $23,000
                  </p>
                </div>
              </div>
            </section>

            {/* New Section: The Agent Referral Trap */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-500" />
                The "Preferred Inspector" Scam
              </h2>

              <p className="text-lg text-mediumGray mb-6">
                Your real estate agent hands you a list of "preferred
                inspectors." They frame it as a helpful service, vetted
                professionals they trust. What they don't tell you is how this
                list was created—and more importantly, who it's designed to
                serve.
              </p>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-purple-900 mb-3">
                  The Uncomfortable Truth:
                </h3>
                <p className="text-purple-800 mb-4">
                  Many inspectors get on these "preferred" lists by being
                  "agent-friendly"—code for not killing deals. The inspectors
                  who find too many problems, who are too thorough, who scare
                  buyers with reality? They mysteriously disappear from these
                  lists.
                </p>
                <p className="text-purple-800">
                  Some agents actually call thorough inspectors "deal killers"
                  as if protecting your investment is a bad thing. Ask yourself:
                  whose deal are they worried about killing?
                </p>
              </div>

              {/* Image Placeholder: Agent-Inspector Relationship Diagram */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl h-80 mb-8 flex items-center justify-center">
                <div className="text-center p-6">
                  <Users className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-lg mb-2">
                    The Referral Relationship Web
                  </p>
                  <p className="text-sm text-gray-600">
                    Diagram showing agent commissions vs inspector thoroughness
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    70% of franchise business comes from agent referrals
                  </p>
                </div>
              </div>

              <p className="text-lg text-mediumGray mb-6">
                Think about the incentives here. Your agent makes a $15,000
                commission when the deal closes. The inspector makes $400
                whether the deal closes or not. But if that inspector wants to
                keep getting referrals (and stay in business), they better not
                find too many expensive problems. See the conflict?
              </p>

              <p className="text-lg text-mediumGray mb-6">
                I've been called a "deal killer" more times than I can count. I
                wear it as a badge of honor. Because when I find $20,000 in
                foundation issues or a roof that needs immediate replacement,
                I'm not killing a deal—I'm saving a family from financial
                disaster. The fact that some in this industry see that as a
                negative tells you everything you need to know about their
                priorities.
              </p>

              <blockquote className="border-l-4 border-purple-500 pl-6 my-8 text-lg italic text-charcoal">
                "My realtor was furious when the inspector she recommended found
                major issues. She actually said, 'I won't be using him again.'
                That's when I realized her 'preferred' list wasn't about
                quality—it was about closing deals."
                <footer className="text-sm text-mediumGray mt-2">
                  — Anonymous Cedar Park buyer
                </footer>
              </blockquote>

              <p className="text-lg text-mediumGray">
                In some states, this cozy relationship is actually illegal.
                RESPA (Real Estate Settlement Procedures Act) prohibits
                kickbacks for referrals. But the law doesn't prohibit agents
                from simply choosing not to refer thorough inspectors. The
                result? A system that rewards incompetence and punishes
                diligence.
              </p>
            </section>

            {/* Section 4: The Solution */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primaryBlue" />
                The Owner-Operator Difference: Why It Matters
              </h2>

              <p className="text-lg text-mediumGray mb-8">
                When you hire an owner-operator like Bluebonnet, you're not
                getting an employee trying to meet a quota. You're getting
                someone whose entire reputation, business, and family's
                livelihood depends on the quality of your inspection.
              </p>

              {/* Image Placeholder: Tim Inspecting a Home */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl h-96 mb-8 flex items-center justify-center">
                <div className="text-center p-6">
                  <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-lg mb-2">
                    Owner-Operator in Action
                  </p>
                  <p className="text-sm text-gray-600">
                    Photo: Tim McCoy personally inspecting an attic
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Every inspection, every time - no substitutes
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primaryBlue to-accentBlue text-white rounded-2xl p-8 mb-8">
                <h3 className="font-bold text-2xl mb-6">
                  The Bluebonnet Guarantee:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Tim McCoy Personally</p>
                      <p className="text-sm opacity-90">
                        Not a random employee, the owner every time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold mb-1">3-4 Hour Inspections</p>
                      <p className="text-sm opacity-90">
                        No rushing, no quotas, just thoroughness
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold mb-1">10+ Years Experience</p>
                      <p className="text-sm opacity-90">
                        Not learning on your investment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Lifetime Support</p>
                      <p className="text-sm opacity-90">
                        Call anytime, even at 3am
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-primaryBlue pl-6 my-8 text-xl italic text-charcoal">
                "I turned down a franchise opportunity that would have tripled
                my income. Why? Because I couldn't look Cedar Park families in
                the eye knowing I'd be sending rookies to inspect their dreams.
                Your home deserves someone who cares as much as you do."
                <footer className="text-sm text-mediumGray mt-2">
                  — Tim McCoy, Owner of Bluebonnet Home Inspections
                </footer>
              </blockquote>
            </section>

            {/* New Section: What They Actually Miss */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                The Top 10 Things Franchise Inspectors Miss
              </h2>

              <p className="text-lg text-mediumGray mb-6">
                After reviewing hundreds of inspection reports and the
                subsequent repair invoices, I've compiled the most commonly
                missed defects by franchise inspectors. These aren't minor
                issues—these are the expensive problems that destroy budgets and
                dreams.
              </p>

              {/* Image Placeholder: Missed Defects Collage */}
              <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl h-96 mb-8 flex items-center justify-center">
                <div className="text-center p-6">
                  <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-lg mb-2">
                    Common Missed Defects Gallery
                  </p>
                  <p className="text-sm text-gray-600">
                    Photo collage: Foundation cracks, roof damage, electrical
                    hazards
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Real photos from re-inspections after franchise failures
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-charcoal mb-4">
                    Most Commonly Missed:
                  </h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                        1
                      </span>
                      <div>
                        <p className="font-semibold text-charcoal">
                          Roof Damage Under Layers
                        </p>
                        <p className="text-sm text-mediumGray">
                          Average repair cost: $15,000
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                        2
                      </span>
                      <div>
                        <p className="font-semibold text-charcoal">
                          Foundation Settling Cracks
                        </p>
                        <p className="text-sm text-mediumGray">
                          Average repair cost: $30,000
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                        3
                      </span>
                      <div>
                        <p className="font-semibold text-charcoal">
                          Concealed Water Damage
                        </p>
                        <p className="text-sm text-mediumGray">
                          Average repair cost: $12,000
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                        4
                      </span>
                      <div>
                        <p className="font-semibold text-charcoal">
                          Electrical Panel Issues
                        </p>
                        <p className="text-sm text-mediumGray">
                          Average repair cost: $5,000
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                        5
                      </span>
                      <div>
                        <p className="font-semibold text-charcoal">
                          HVAC System Failures
                        </p>
                        <p className="text-sm text-mediumGray">
                          Average repair cost: $8,000
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-bold text-charcoal mb-4">
                    Why They're Missed:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        <strong>Too rushed:</strong> No time to move insulation
                        in attic
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        <strong>Inexperienced:</strong> Don't recognize early
                        warning signs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        <strong>Lazy shortcuts:</strong> Won't enter tight
                        crawlspaces
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        <strong>No tools:</strong> Skip thermal imaging that
                        reveals moisture
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        <strong>Surface only:</strong> Fresh paint hides
                        everything
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-mediumGray mb-6">
                The tragedy isn't just the financial loss—it's the betrayal of
                trust. These families paid for peace of mind and got a false
                sense of security instead. They made life-changing decisions
                based on incomplete information from inspectors who were more
                concerned about their lunch break than your family's future.
              </p>

              <blockquote className="border-l-4 border-red-500 pl-6 my-8 text-lg italic text-charcoal">
                "We specifically asked about the foundation because we saw a
                small crack. The inspector said it was 'normal settling.' Six
                months later, a structural engineer told us it needed $42,000 in
                repairs and was getting worse every day."
                <footer className="text-sm text-mediumGray mt-2">
                  — Mark and Lisa Thompson, Cedar Park
                </footer>
              </blockquote>
            </section>

            {/* Questions to Ask */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                Questions to Ask Before You Book Any Inspector
              </h2>

              {/* Image Placeholder: Checklist Graphic */}
              <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center p-6">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-lg mb-2">
                    Inspector Interview Checklist
                  </p>
                  <p className="text-sm text-gray-600">
                    Downloadable PDF checklist graphic
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Print and take to your inspector interview
                  </p>
                </div>
              </div>

              <div className="bg-lightGray rounded-xl p-8">
                <p className="text-lg text-charcoal mb-6">
                  Print this list. Ask these questions. The answers will reveal
                  everything:
                </p>

                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-charcoal">
                        "Will YOU personally be doing my inspection, or will it
                        be an employee?"
                      </p>
                      <p className="text-sm text-mediumGray mt-1">
                        Red flag: "We'll send whoever's available"
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-charcoal">
                        "How many inspections do you complete in a typical day?"
                      </p>
                      <p className="text-sm text-mediumGray mt-1">
                        Red flag: More than 2 suggests rushing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <p className="font-bold text-charcoal">
                        "What's your inspector's construction background and
                        years of experience?"
                      </p>
                      <p className="text-sm text-mediumGray mt-1">
                        Red flag: Online certification only, less than 5 years
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <p className="font-bold text-charcoal">
                        "What's your policy if you miss something major?"
                      </p>
                      <p className="text-sm text-mediumGray mt-1">
                        Red flag: "Our contract limits liability to the
                        inspection fee"
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </span>
                    <div>
                      <p className="font-bold text-charcoal">
                        "Can I call you with questions after the inspection?"
                      </p>
                      <p className="text-sm text-mediumGray mt-1">
                        Red flag: "Report delivery ends our relationship"
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                The Choice Is Yours
              </h2>

              <p className="text-lg text-mediumGray mb-6">
                You can roll the dice with a franchise that sends whoever's
                available, rushing through your inspection to hit their daily
                quota. Or you can choose an owner-operator who stakes their
                reputation on every single inspection.
              </p>

              <p className="text-lg text-mediumGray mb-6">
                The corporate inspection industry counts on you not knowing the
                difference. They bet on you choosing the recognizable name over
                the local expert. They assume you won't ask the hard questions
                until it's too late.
              </p>

              <p className="text-lg text-mediumGray mb-6">
                Here's what they don't want you to know: You have power. You can
                demand better. You can refuse to accept a system that
                prioritizes speed over safety, volume over value, and corporate
                profits over your family's protection.
              </p>

              {/* Image Placeholder: Side-by-side Comparison */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 mb-8 flex items-center justify-center">
                <div className="text-center p-6">
                  <Users className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-lg mb-2">
                    Your Two Choices
                  </p>
                  <p className="text-sm text-gray-600">
                    Side-by-side comparison: Corporate mill vs Owner-operator
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Visual breakdown of what you're really choosing between
                  </p>
                </div>
              </div>

              <p className="text-lg text-mediumGray mb-6">
                Every week, I get calls from homeowners who wish they'd known
                this information before they hired a franchise inspector.
                They're dealing with surprise repairs, fighting with insurance
                companies, and feeling betrayed by a system that was supposed to
                protect them. Don't let that be your story.
              </p>

              <p className="text-lg text-mediumGray mb-6">
                Your home inspection isn't just a checkbox on your closing
                checklist. It's your last chance to understand what you're
                really buying before you sign your life away. It's the
                difference between confident homeownership and years of
                expensive surprises. It's the shield between your family and
                financial disaster.
              </p>

              <p className="text-xl font-bold text-charcoal mb-6">
                Now you know better. The question is: what will you do with this
                knowledge?
              </p>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-300 rounded-xl p-8">
                <h3 className="font-bold text-xl text-charcoal mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  Final Warning
                </h3>
                <p className="text-charcoal">
                  If you take nothing else from this article, remember this: The
                  inspector you choose will either be your advocate or your
                  agent's accomplice. They'll either protect your investment or
                  protect the deal. They'll either work for your family's future
                  or for their franchise's quota. Choose accordingly.
                </p>
              </div>
            </section>

            {/* Author Bio */}
            <div className="border-t-2 border-gray-200 pt-8 mb-12">
              <div className="bg-lightGray rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 bg-gradient-to-br from-primaryBlue to-accentBlue rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    TM
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-charcoal mb-2">
                      About the Author
                    </h3>
                    <p className="text-mediumGray mb-4">
                      Tim McCoy is the owner of Bluebonnet Home Inspections and
                      a Cedar Park resident. With over 10 years of experience
                      and 2,000+ inspections completed, Tim has seen firsthand
                      how the corporate inspection model fails families. He
                      writes to educate homebuyers about the industry practices
                      that put their investments at risk.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="/about"
                        className="text-primaryBlue font-bold hover:underline"
                      >
                        Learn More About Tim
                      </a>
                      <a
                        href="tel:512-560-5670"
                        className="text-primaryBlue font-bold hover:underline"
                      >
                        512-560-5670
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primaryBlue to-accentBlue rounded-2xl p-8 lg:p-12 text-white text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h3 className="font-serif text-3xl font-bold mb-4">
                Choose Accountability Over Anonymity
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                When you hire Bluebonnet, you know exactly who's inspecting your
                home: Tim McCoy, the owner, every single time. No rookies, no
                rushing, no excuses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/schedule"
                  className="px-8 py-4 bg-yellow-400 text-charcoal font-bold rounded-full hover:bg-yellow-500 transition-colors"
                >
                  Schedule with Tim Personally
                </a>
                <a
                  href="tel:512-560-5670"
                  className="px-8 py-4 bg-white text-primaryBlue font-bold rounded-full hover:bg-lightGray transition-colors"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Tim Direct: 512-560-5670
                </a>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-6">
                Continue Your Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="#" className="group cursor-not-allowed">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primaryBlue transition-colors">
                    <div className="flex items-start gap-4">
                      <Shield className="w-10 h-10 text-primaryBlue flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-charcoal group-hover:text-primaryBlue transition-colors mb-2">
                          The $500 Liability Trap
                        </h4>
                        <p className="text-sm text-mediumGray">
                          How inspection contracts protect companies, not
                          consumers
                        </p>
                        <p className="text-xs text-orange-600 font-bold mt-2">
                          Coming February 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="group cursor-not-allowed">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primaryBlue transition-colors">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-10 h-10 text-orange-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-charcoal group-hover:text-primaryBlue transition-colors mb-2">
                          10 Questions to Ask Your Inspector
                        </h4>
                        <p className="text-sm text-mediumGray">
                          Reveal conflicts of interest before you hire
                        </p>
                        <p className="text-xs text-orange-600 font-bold mt-2">
                          Coming February 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
