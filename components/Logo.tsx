import React from 'react';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  backgroundColor?: string;
  foregroundColor?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 48,
  height = 48,
  className = '',
  backgroundColor = '#3b82f6',
  foregroundColor = '#FFFFFF',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
      aria-label="Company Logo"
    >
      {/* Background shape - using rounded rectangle for professional feel */}
      <rect x="5" y="5" width="90" height="90" rx="15" fill={backgroundColor} />

      {/* Centered, single-color S shape */}
      <path
        d="M63 35c0-8-6.5-15-13-15s-13 6-13 13c0 7 5 11 13 13l6 1.5c8 2 13 6 13 12.5s-6.5 15-13 15-13-7-13-15"
        fill="none"
        stroke={foregroundColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
