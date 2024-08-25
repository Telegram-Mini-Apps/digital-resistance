import { SVGProps } from 'react';

export const Diamond = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd" clipRule="evenodd"
        d="M3.82536 1.06899e-06H10.1739C10.7729 -2.09847e-05 11.2837 -3.98792e-05 11.6885 0.0370994C12.0983 0.0746909 12.5485 0.159535 12.9326 0.438164C13.4596 0.820374 13.7999 1.40799 13.8692 2.05527C13.9197 2.52714 13.7692 2.95985 13.5979 3.33399C13.4286 3.70363 13.1744 4.14669 12.8763 4.66623L7.78024 13.5479C7.61979 13.8276 7.32201 14 6.99961 14C6.6772 14 6.37943 13.8276 6.21898 13.5479L1.12293 4.66621C0.824808 4.14668 0.57058 3.70363 0.401314 3.33399C0.229986 2.95985 0.0795302 2.52714 0.130025 2.05527C0.19929 1.40799 0.539606 0.820374 1.06657 0.438164C1.45072 0.159535 1.90092 0.0746909 2.3107 0.0370994C2.71555 -3.98792e-05 3.22636 -2.09847e-05 3.82536 1.06899e-06ZM2.12136 1.89674C2.00865 1.97936 1.93565 2.1054 1.92008 2.24429C1.92039 2.25311 1.92585 2.3399 2.03788 2.58456C2.16855 2.86991 2.38032 3.24081 2.70511 3.80688L6.09961 9.72301V1.80001L3.86739 1.8C3.21476 1.8 2.78767 1.8009 2.47513 1.82957C2.20717 1.85415 2.12917 1.89261 2.12136 1.89674ZM7.89961 1.80001V9.72301L11.2941 3.80688C11.6189 3.24081 11.8307 2.86991 11.9613 2.58456C12.0734 2.33993 12.0788 2.25313 12.0791 2.24429C12.0636 2.1054 11.9906 1.97936 11.8778 1.89674C11.87 1.89261 11.792 1.85415 11.5241 1.82957C11.2115 1.8009 10.7845 1.8 10.1318 1.8L7.89961 1.80001Z"
        fill="currentColor"
      />
    </svg>
  );
};
