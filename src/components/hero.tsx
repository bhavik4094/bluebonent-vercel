/**
 * @fileoverview Hero section component for the homepage
 * @description Primary landing section with call-to-action and trust indicators
 */

import Link from "next/link";
import Image from "next/image";
import { TrustBar } from "./trust-bar";

/**
 * Hero section with primary CTA and trust indicators
 * @returns {JSX.Element} The hero section component
 */
export const Hero = () => {
  return (
    <section className="relative  flex items-center bg-gradient-to-br from-white via-primaryBlue/5 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primaryBlue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accentOrange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primaryBlue/10 rounded-full">
              <span className="w-2 h-2 bg-primaryBlue rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-primaryBlue">
                Cedar Park's #1 Home Inspector
              </span>
            </div>

            <h1 className="gradient-text font-serif text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Your Home Inspection
              <span className="block text-primaryBlue">Expert</span>
            </h1>

            <p className="text-lg text-mediumGray leading-relaxed">
              Professional home inspections in Cedar Park, Round Rock, and
              Austin. Protect your investment with thorough, detailed reports
              you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 bg-primaryBlue text-white font-semibold rounded-lg hover:bg-white hover:text-primaryBlue hover:border-primaryBlue border-2 transition-colors shadow-lg hover:shadow-xl"
              >
                Schedule Inspection
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/sample-report"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primaryBlue font-semibold rounded-lg border-2 border-primaryBlue hover:bg-primaryBlue hover:text-white transition-colors"
              >
                View Sample Report
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-charcoal">
                  5.0 Rating
                </span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-charcoal">
                  InterNACHI Certified
                </span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-charcoal">
                  Same Day Reports
                </span>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            {/* <div className="aspect-[4/3] bg-gradient-to-br from-primaryBlue/20 to-accentOrange/20 rounded-2xl shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 text-primaryBlue/30 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <p className="mt-4 text-mediumGray font-medium">Professional Home Inspections</p>
                </div>
              </div>
            </div> */}
            <div className="relative aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/Frame1171275092.jpg"
                alt="Professional Home Inspections"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">1,500+</p>
                  <p className="text-sm text-mediumGray">
                    Inspections Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <TrustBar />
      </div>
    </section>
  );
};
