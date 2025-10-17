/**
 * @fileoverview The Bluebonnet Process page implementation.
 * @description This page demystifies the inspection journey from scheduling to post-report support,
 * reducing client anxiety and setting professional expectations per Phase 2.1 of the checklist.
 */

import { fetchAPI } from "@/lib/api";
import { normalizeImage } from "@/lib/utils";
import {
  // Calendar,
  // Home,
  // FileText,
  // HeartHandshake,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Process step component for the visual timeline
 * @param {Object} props - Component props
 * @param {number} props.step - Step number
 * @param {string} props.title - Step title
 * @param {string} props.description - Step description
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string[]} props.details - Array of detail points
 * @returns {JSX.Element} Process step component
 */

const ProcessStep = ({
  step,
  title,
  description,
  icon,
  details,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}) => (
  <div className="relative flex gap-8 pb-12 last:pb-0">
    {/* Step number and line */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-primaryBlue text-white rounded-full flex items-center justify-center font-bold text-lg">
        {step}
      </div>
      <div className="w-0.5 h-full bg-gray-300 mt-2" />
    </div>

    {/* Content */}
    <div className="flex-1 pb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-primaryBlue">{icon}</div>
          <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
        </div>
        <p className="text-mediumGray mb-4">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-accentBlue mt-0.5 flex-shrink-0" />
              <span className="text-charcoal">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
const data = await fetchAPI("pages?slug=process");
const page = data?.[0];
const ourprocess = page?.acf || {};

type ProcessIcon = {
  bluebonnet_process_icon?: {
    url: string;
  };
};
const processIconImg = await Promise.all(
  (ourprocess.bluebonnet_process_repeater || []).map(
    async (m: ProcessIcon) => ({
      ...m,
      bluebonnet_process_icon:
        (await normalizeImage(m.bluebonnet_process_icon)) || "",
    })
  )
);

export default function ProcessPage() {
  return (
    <div className="bg-lightGray min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="gradient-text font-serif text-4xl md:text-5xl text-charcoal mb-4">
            {ourprocess?.bluebonnet_process_title}
          </h1>
          <p className="text-xl text-mediumGray max-w-3xl mx-auto">
            {ourprocess?.bluebonnet_process_description}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          {ourprocess?.bluebonnet_process_repeater?.map(
            (benefit: any, idx: any) => (
              <ProcessStep
                key={idx}
                step={idx + 1}
                title={benefit.bluebonnet_process_title}
                description={benefit.bluebonnet_process_description}
                icon={
                  processIconImg[idx].bluebonnet_process_icon ? (
                    <Image
                      src={processIconImg[idx].bluebonnet_process_icon}
                      alt={benefit.bluebonnet_process_title}
                      className="w-8 h-8 mx-auto"
                      width={32}
                      height={32}
                    />
                  ) : // <img
                  //   src={processIconImg[idx].bluebonnet_process_icon}
                  //   alt={benefit.bluebonnet_process_title}
                  //   className="w-8 h-8 mx-auto"
                  // />
                  null
                }
                details={
                  benefit.bluebonnet_process_points_repeater?.map(
                    (point: any) => point.bluebonnet_process_points_title
                  ) || []
                }
              />
            )
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-charcoal mb-4">
            {ourprocess?.ready_to_get_started_title}
          </h2>
          <p className="text-mediumGray mb-6">
            {ourprocess?.ready_to_get_started_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ourprocess?.schedule_your_inspection_button_url}
              className="bg-accentOrange text-primaryBlue border-2 border-primaryBlue px-8 py-3 rounded-full font-semibold hover:bg-primaryBlue hover:text-white transition-colors inline-block text-center"
            >
              {ourprocess?.schedule_your_inspection_button_text}
            </Link>
            <a
              href={ourprocess?.ready_to_button_call_url}
              className="bg-transparent border-2 border-primaryBlue text-primaryBlue px-8 py-3 rounded-full font-semibold hover:bg-primaryBlue hover:text-white transition-colors inline-block text-center"
            >
              {ourprocess?.ready_to_button_call_text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
