import { SVGProps } from 'react';

export const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="8"
      viewBox="0 0 18 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_6696_61551)">
        <path
          d="M14 1.5L9 6.5L4 1.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6696_61551">
          <rect width="7" height="12" fill="currentColor" transform="matrix(0 1 -1 0 15 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  );
};
