import { SVGProps } from 'react';

export const Done = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.75 6L4.75 9.5L10.25 1.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
