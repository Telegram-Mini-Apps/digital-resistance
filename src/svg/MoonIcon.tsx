import { SVGProps } from 'react';

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path
                d='M9.24146 16.8142C8.39933 16.8142 7.62703 16.6703 6.92456 16.3826C6.22209 16.0948 5.61271 15.6928 5.09644 15.1765C4.58439 14.6602 4.1866 14.0572 3.90308 13.3674C3.62378 12.6777 3.48413 11.9286 3.48413 11.1204C3.48413 10.3079 3.63013 9.54403 3.92212 8.82886C4.21411 8.11369 4.61825 7.4895 5.13452 6.9563C5.6508 6.41886 6.25382 6.0105 6.9436 5.7312C7.11711 5.66349 7.26945 5.6381 7.40063 5.65503C7.53182 5.67196 7.6355 5.72485 7.71167 5.81372C7.86401 5.98722 7.86613 6.23055 7.71802 6.5437C7.61646 6.75529 7.53182 7.03882 7.46411 7.39429C7.40063 7.74552 7.3689 8.11157 7.3689 8.49243C7.3689 9.41073 7.55721 10.2084 7.93384 10.8855C8.3147 11.5583 8.85002 12.0789 9.53979 12.447C10.2338 12.8152 11.0527 12.9993 11.9963 12.9993C12.3476 12.9993 12.6713 12.9739 12.9675 12.9231C13.2638 12.8681 13.5325 12.7898 13.7737 12.6882C13.9091 12.6332 14.0361 12.6121 14.1545 12.6248C14.273 12.6332 14.3682 12.6734 14.4402 12.7454C14.5206 12.8215 14.5693 12.9252 14.5862 13.0564C14.6031 13.1833 14.5735 13.3315 14.4973 13.5007C14.2011 14.1905 13.7927 14.783 13.2722 15.2781C12.7517 15.7732 12.1487 16.1519 11.4631 16.4143C10.7776 16.6809 10.037 16.8142 9.24146 16.8142ZM9.25415 15.6082C9.74504 15.6082 10.2169 15.5426 10.6697 15.4114C11.1225 15.2844 11.5351 15.1003 11.9075 14.8591C12.2799 14.6137 12.5951 14.3238 12.8533 13.9895C12.739 14.0234 12.5782 14.0551 12.3708 14.0847C12.1677 14.1101 11.9456 14.1228 11.7043 14.1228C10.6125 14.1228 9.65617 13.9028 8.83521 13.4626C8.01424 13.0183 7.37524 12.3962 6.91821 11.5964C6.46541 10.7924 6.23901 9.85506 6.23901 8.78442C6.23901 8.51782 6.25594 8.25545 6.28979 7.99731C6.32365 7.73918 6.37443 7.51701 6.44214 7.33081C6.08244 7.6228 5.7714 7.96558 5.50903 8.35913C5.24666 8.74845 5.04354 9.17163 4.89966 9.62866C4.76001 10.0815 4.69019 10.5575 4.69019 11.0569C4.69019 11.7043 4.80021 12.3053 5.02026 12.8596C5.24455 13.414 5.55981 13.8964 5.96606 14.3069C6.37231 14.7174 6.85262 15.0369 7.40698 15.2654C7.96558 15.4939 8.5813 15.6082 9.25415 15.6082ZM14.0403 10.6824C13.9726 10.6824 13.9176 10.6612 13.8752 10.6189C13.8329 10.5766 13.8075 10.5237 13.7991 10.4602C13.7441 10.0413 13.6869 9.71541 13.6277 9.48267C13.5727 9.24569 13.4838 9.07007 13.3611 8.95581C13.2384 8.83732 13.0522 8.74422 12.8025 8.67651C12.557 8.60881 12.2143 8.53052 11.7742 8.44165C11.6303 8.41626 11.5583 8.33797 11.5583 8.20679C11.5583 8.14331 11.5774 8.09041 11.6155 8.0481C11.6578 8.00155 11.7107 7.97404 11.7742 7.96558C12.2143 7.90633 12.557 7.84709 12.8025 7.78784C13.0522 7.7286 13.2384 7.63761 13.3611 7.51489C13.4838 7.38794 13.5727 7.20386 13.6277 6.96265C13.6869 6.7172 13.7441 6.38289 13.7991 5.95972C13.816 5.80737 13.8964 5.7312 14.0403 5.7312C14.1799 5.7312 14.2603 5.80949 14.2815 5.96606C14.3323 6.38501 14.3852 6.71086 14.4402 6.9436C14.4994 7.17635 14.5904 7.35197 14.7131 7.47046C14.8401 7.58895 15.0284 7.67993 15.2781 7.74341C15.532 7.80688 15.8748 7.88094 16.3064 7.96558C16.446 7.9952 16.5159 8.0756 16.5159 8.20679C16.5159 8.3422 16.4355 8.42049 16.2747 8.44165C15.8472 8.51359 15.5108 8.5813 15.2654 8.64478C15.0242 8.70825 14.8401 8.79923 14.7131 8.91772C14.5904 9.03621 14.4994 9.21606 14.4402 9.45728C14.3852 9.69849 14.3323 10.0286 14.2815 10.4475C14.2603 10.6041 14.1799 10.6824 14.0403 10.6824ZM10.9934 6.30249C10.9088 6.30249 10.858 6.25806 10.8411 6.16919C10.7945 5.90682 10.7522 5.70369 10.7141 5.55981C10.676 5.4117 10.6189 5.29956 10.5427 5.22339C10.4708 5.14298 10.3586 5.08162 10.2063 5.03931C10.054 4.99699 9.84025 4.94832 9.56519 4.89331C9.47632 4.87215 9.43188 4.82137 9.43188 4.74097C9.43188 4.66056 9.47632 4.6119 9.56519 4.59497C9.84025 4.53996 10.0518 4.49129 10.2 4.44897C10.3523 4.40243 10.4644 4.34318 10.5364 4.27124C10.6125 4.19507 10.6697 4.08293 10.7078 3.93481C10.7458 3.78247 10.7903 3.57511 10.8411 3.31274C10.858 3.22811 10.9088 3.18579 10.9934 3.18579C11.0738 3.18579 11.1225 3.22811 11.1394 3.31274C11.1902 3.57511 11.2346 3.78035 11.2727 3.92847C11.3108 4.07658 11.3658 4.18872 11.4377 4.26489C11.5139 4.33683 11.6261 4.39608 11.7742 4.44263C11.9265 4.48918 12.1402 4.53996 12.4153 4.59497C12.5084 4.6119 12.5549 4.66056 12.5549 4.74097C12.5549 4.82137 12.5084 4.87215 12.4153 4.89331C12.1402 4.94409 11.9265 4.99064 11.7742 5.03296C11.6218 5.07528 11.5076 5.13452 11.4314 5.21069C11.3595 5.28687 11.3044 5.40112 11.2664 5.55347C11.2283 5.70158 11.186 5.90682 11.1394 6.16919C11.1225 6.25806 11.0738 6.30249 10.9934 6.30249Z'
                fill='currentColor'
            />
        </svg>
    );
}
