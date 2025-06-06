/** @jsxImportSource @emotion/react */

import type { IconProps } from "../model/type";

function SunIcon({
  color = "currentColor",
  size = 24,
  fill = "none",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0003 2.73726V1.97705M13.0003 24.0231V23.2629M23.2632 13.0001H24.0234M1.97729 13.0001H2.73751M20.2579 5.74327L20.7955 5.20572M5.20516 20.7945L5.74271 20.257M20.2579 20.2569L20.7955 20.7945M5.20516 5.20566L5.74271 5.74321M19.0672 12.9585C19.0672 16.3173 16.3443 19.0402 12.9855 19.0402C9.62667 19.0402 6.90381 16.3173 6.90381 12.9585C6.90381 9.5997 9.62667 6.87684 12.9855 6.87684C16.3443 6.87684 19.0672 9.5997 19.0672 12.9585Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SunIcon;
