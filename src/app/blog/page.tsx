/**
 * @fileoverview Blog listing page showcasing educational content that positions Bluebonnet
 * as the consumer advocate and industry whistleblower, driving trust through transparency
 * about common inspection industry problems.
 */

import {
  Calendar,
  Clock,
  ChevronRight,
  TrendingUp,
  Shield,
  AlertTriangle,
  Users,
  FileQuestion,
} from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  featured: boolean;
  icon: React.ElementType;
  gradient: string;
  comingSoon?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: "whos-really-inspecting-your-home",
    title:
      "Who's Really Inspecting Your Home? Why Corporate Companies Send Rookies to Your Biggest Investment",
    excerpt:
      'Reveals how franchise business models often result in inexperienced inspectors handling major purchases. Contrasts corporate "whoever\'s available" approach with owner-operator accountability and expertise.',
    category: "Industry Expose",
    readTime: "8 min read",
    publishDate: "January 2025",
    featured: true,
    icon: AlertTriangle,
    gradient: "bg-gradient-to-r from-primaryBlue to-accentBlue",
    comingSoon: false,
  },
  {
    slug: "the-500-dollar-liability-trap",
    title:
      "The $500 Liability Trap: How Corporate Inspectors Escape Responsibility for $50,000 Mistakes",
    excerpt:
      "Exposes the fine print in inspection contracts that limits liability to just the inspection fee, leaving homebuyers with virtually no recourse when catastrophic issues are missed.",
    category: "Buyer Protection",
    readTime: "6 min read",
    publishDate: "February 2025",
    featured: false,
    icon: Shield,
    gradient: " bg-gradient-to-r from-primaryBlue to-accentBlue",
    comingSoon: true,
  },
  {
    slug: "ten-questions-to-ask-your-inspector",
    title:
      "10 Questions That Will Reveal if Your Inspector Works for You or Your Realtor",
    excerpt:
      "A tactical guide with specific questions designed to expose conflicts of interest, lack of experience, and liability dodging before you hire an inspector.",
    category: "Buyer's Guide",
    readTime: "5 min read",
    publishDate: "February 2025",
    featured: false,
    icon: FileQuestion,
    gradient: " bg-gradient-to-r from-primaryBlue to-accentBlue",
    comingSoon: true,
  },
  {
    slug: "deal-killer-badge-of-honor",
    title: "Why Being Called a 'Deal Killer' is My Badge of Honor",
    excerpt:
      "Tim's personal story about choosing integrity over easy referrals, and why thorough inspections that protect buyers are more important than keeping agents happy.",
    category: "Personal Story",
    readTime: "4 min read",
    publishDate: "March 2025",
    featured: false,
    icon: Users,
    gradient: " bg-gradient-to-r from-primaryBlue to-accentBlue",
    comingSoon: true,
  },
  {
    slug: "representative-sample-loophole",
    title: "The 'Representative Sample' Loophole That Could Cost You Thousands",
    excerpt:
      "How standard inspection practices allow testing only a fraction of outlets and windows, potentially missing serious defects that remain 'compliant' with industry standards.",
    category: "Industry Secrets",
    readTime: "7 min read",
    publishDate: "March 2025",
    featured: false,
    icon: AlertTriangle,
    gradient: " bg-gradient-to-r from-primaryBlue to-accentBlue",
    comingSoon: true,
  },
  {
    slug: "visual-only-inspection-myth",
    title:
      "What 'Visual Only' Really Means (And What's Hiding Behind Your Walls)",
    excerpt:
      "Explains the shocking limitations of standard inspections and why specialized testing for mold, asbestos, and sewer lines isn't just optional—it's essential.",
    category: "Education",
    readTime: "6 min read",
    publishDate: "April 2025",
    featured: false,
    icon: Shield,
    gradient: " bg-gradient-to-r from-primaryBlue to-accentBlue",
    comingSoon: true,
  },
];

/**
 * Renders the blog listing page with cards for all blog posts, highlighting
 * consumer education content that builds trust through transparency.
 * @returns Blog listing page component
 */
export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-lightGray">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal to-black text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accentBlue text-white font-bold text-sm rounded-full mb-6">
              INDUSTRY TRUTH-TELLER
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6">
              The Blog Big Inspection
              <span className="text-accentBlue"> Doesn't Want You to Read</span>
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Exposing industry secrets, protecting Cedar Park families, and
              teaching you what corporate inspectors hope you never learn about
              your biggest investment.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Consumer Advocate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>500+ Families Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>$2M+ in Repairs Found</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-charcoal">
                Featured Investigation
              </h2>
            </div>
            <a
              href={
                featuredPost.comingSoon ? "#" : `/blog/${featuredPost.slug}`
              }
              className={`block group ${featuredPost.comingSoon ? "cursor-not-allowed" : ""}`}
            >
              <div className="bg-gradient-to-br from-white to-lightGray rounded-2xl shadow-elegant hover:shadow-3d-hover transition-all duration-500 overflow-hidden">
                <div
                  className={`h-3 bg-gradient-to-r ${featuredPost.gradient}`}
                />
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Icon Section */}
                    <div className="flex justify-center lg:justify-start">
                      <div
                        className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                      >
                        <featuredPost.icon className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-accentBlue text-sm font-bold rounded-full">
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-mediumGray">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-mediumGray">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.publishDate}
                        </span>
                        {featuredPost.comingSoon && (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-bold rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mb-4 group-hover:text-primaryBlue transition-colors">
                        {featuredPost.title}
                      </h3>

                      <p className="text-lg text-mediumGray mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      {!featuredPost.comingSoon && (
                        <div className="flex items-center gap-2 text-primaryBlue font-bold group-hover:gap-4 transition-all">
                          Read Full Investigation
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* Other Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="gradient-text font-serif text-4xl font-bold text-charcoal mb-4">
              More Industry Exposés & Buyer Guides
            </h2>
            <p className="text-lg text-mediumGray max-w-3xl mx-auto">
              Every article arms you with knowledge the inspection industry
              doesn't want you to have. Because an educated buyer is a protected
              buyer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <a
                  key={post.slug}
                  href={post.comingSoon ? "#" : `/blog/${post.slug}`}
                  className={`group animate-fadeInUp ${post.comingSoon ? "cursor-not-allowed" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white rounded-xl shadow-elegant hover:shadow-3d-hover transition-all duration-500 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />

                    <div className="p-6">
                      {/* Header with Icon */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${post.gradient} bg-opacity-10`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs font-bold text-primaryBlue">
                              {post.category}
                            </span>
                            {post.comingSoon && (
                              <span className="text-xs px-2 py-0.5  bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-bold rounded-full">
                                Soon
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-lg text-charcoal group-hover:text-primaryBlue transition-colors line-clamp-3">
                            {post.title}
                          </h3>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <p className="text-sm text-mediumGray mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-3 text-xs text-mediumGray">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.publishDate}
                          </span>
                        </div>
                        {!post.comingSoon && (
                          <ChevronRight className="w-5 h-5 text-primaryBlue group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Email Signup CTA */}
      <section className="py-20 bg-gradient-to-r from-primaryBlue ">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Shield className="w-16 h-16 mx-auto mb-6 text-accentBlue" />
            <h2 className="font-serif text-4xl font-bold mb-4">
              Don't Let Big Inspection Fool You
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get industry exposés, buyer protection tips, and inspection
              insights delivered to your inbox. Knowledge is your best defense
              against a bad inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              {/* <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-charcoal flex-1"
                disabled
              /> */}
              <button
                className="px-8 py-3  bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-bold rounded-full hover:bg-blue-500 transition-colors"
                disabled
              >
                Coming Soon
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Just truth. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
