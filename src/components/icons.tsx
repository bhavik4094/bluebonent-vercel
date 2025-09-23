/**
 * @fileoverview Professional SVG icons for the Bluebonnet Inspections website
 */

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const HomeIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.5L12 2L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const DollarIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 8.5C15 7.67157 14.3284 7 13.5 7H10.5C9.67157 7 9 7.67157 9 8.5C9 9.32843 9.67157 10 10.5 10H13.5C14.3284 10 15 10.6716 15 11.5C15 12.3284 14.3284 13 13.5 13H10.5C9.67157 13 9 13.6716 9 14.5C9 15.3284 9.67157 16 10.5 16H13.5C14.3284 16 15 15.3284 15 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const HammerIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3L7 7L3 3L7 7L11 11L15 7L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 11L11 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20.5 12.5L16.5 8.5M16.5 8.5L18 7C18.5523 6.44772 19.4477 6.44772 20 7C20.5523 7.55228 20.5523 8.44772 20 9L18.5 10.5M16.5 8.5L14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="12" width="6" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="8" width="6" height="13" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="15" y="3" width="6" height="18" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="18" cy="3" r="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const FamilyIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8.5V12M12 12C10 12 8 14 8 16V21M12 12C14 12 16 14 16 16V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 11V14C7 15 6 16 5 16V21M17 11V14C17 15 18 16 19 16V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="3" r="0.5" fill="currentColor"/>
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15.9999V18.9999C21 19.5499 20.55 19.9999 20 19.9999C10.61 19.9999 3 12.3899 3 2.99994C3 2.44994 3.45 1.99994 4 1.99994H7C7.55 1.99994 8 2.44994 8 2.99994C8 4.23994 8.21 5.42994 8.59 6.53994C8.69 6.82994 8.61 7.15994 8.38 7.37994L6.09 9.66994C7.66 12.7999 10.2 15.3399 13.33 16.9099L15.62 14.6199C15.84 14.3899 16.17 14.3099 16.46 14.4099C17.57 14.7899 18.76 14.9999 20 14.9999C20.55 14.9999 21 15.4499 21 15.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.3"/>
  </svg>
);

export const ThermalIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="8" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 16V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="19" r="1.5" fill="currentColor" opacity="0.3"/>
    <path d="M10 5H14M10 7H14M10 9H14" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
  </svg>
);

export const PipeIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2V6C7 7.10457 7.89543 8 9 8H15C16.1046 8 17 7.10457 17 6V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="9" y="8" width="6" height="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 18C9 20.2091 10.7909 22 13 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 18C15 20.2091 13.2091 22 11 22H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="13" r="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const PoolIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 12C3 12 5 14 7 14C9 14 10 12 12 12C14 12 15 14 17 14C19 14 21 12 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 16C3 16 5 18 7 18C9 18 10 16 12 16C14 16 15 18 17 18C19 18 21 16 21 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 6.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BugIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="14" rx="5" ry="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 7V2M8 3L10 5M16 3L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 10L3 8M17 10L21 8M7 14L3 14M17 14L21 14M7 18L3 20M17 18L21 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="12" r="0.5" fill="currentColor"/>
    <circle cx="14" cy="12" r="0.5" fill="currentColor"/>
    <path d="M12 14V18" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
  </svg>
);

export const BeakerIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2H15M9 2V9L5 18C4.5 19 5 20 6 20H18C19 20 19.5 19 19 18L15 9V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="17" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="13" cy="16" r="0.5" fill="currentColor" opacity="0.3"/>
    <circle cx="15" cy="18" r="0.8" fill="currentColor" opacity="0.3"/>
    <path d="M7 14L8 12M17 14L16 12" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
  </svg>
);

export const RadiationIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2C12 7 12 7 12 7C10.3431 7 9 8.34315 9 10C9 10.3506 9.06015 10.6872 9.17071 11H4.5C3 11 2 12 2 12C2 6 6 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8293 11C14.9398 10.6872 15 10.3506 15 10C15 8.34315 13.6569 7 12 7C12 7 12 7 12 2C18 2 22 6 22 12C22 12 21 11 19.5 11H14.8293Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.17071 13C9.58254 13.8376 10.2324 14.5399 11.0323 14.9932L8 22C8 22 5 20 3 17C2 15.5 1.5 14 2 12C2 12 3 13 4.5 13H9.17071Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9677 14.9932C13.7676 14.5399 14.4175 13.8376 14.8293 13H19.5C21 13 22 12 22 12C22.5 14 22 15.5 21 17C19 20 16 22 16 22L12.9677 14.9932Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);