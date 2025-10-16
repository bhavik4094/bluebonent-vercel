/**
 * @fileoverview Trust bar component displaying credentials and guarantees
 * @description Shows key trust signals including licenses, certifications, and contact info
 */

/**
 * Trust bar with credentials and satisfaction guarantee
 * @returns {JSX.Element} The trust bar component
 *
 */
import Image from "next/image";
import React from "react";

type TrustItem = {
  trust_icon: string;
  trust_title: string;
  trust_feature: boolean;
};

export const TrustBar = ({
  trustbaritem,
}: {
  trustbaritem: Array<TrustItem>;
}) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      {trustbaritem.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-1.5 ${
            item.trust_feature ? "text-primaryBlue" : "text-mediumGray/60"
          }`}
        >
          <span
            className={
              item.trust_feature ? "text-primaryBlue" : "text-mediumGray/60"
            }
          >
            {item.trust_icon ? (
              <Image
                src={item.trust_icon}
                alt={item.trust_title}
                className="w-4 h-4"
              />
            ) : // <img
            //   src={item.trust_icon}
            //   alt={item.trust_title}
            //   className="w-4 h-4"
            // />
            null}
          </span>
          <span>{item.trust_title}</span>
          {index < trustbaritem.length - 1 && (
            <span className="ml-4 text-gray-300">•</span>
          )}
        </div>
      ))}

      <a
        href="tel:512-560-5670"
        className="flex items-center gap-1.5 font-bold text-primaryBlue hover:text-accentOrange transition-colors ml-auto"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        512-560-5670
      </a>
    </div>
  );
};
