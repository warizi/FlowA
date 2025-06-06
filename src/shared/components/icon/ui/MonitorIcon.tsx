/** @jsxImportSource @emotion/react */

import type { IconProps } from "../model/type";

function MonitorIcon({
  color = "currentColor",
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${24} ${24}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 17H11V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V17Z"
        fill={color}
      />
      <path
        d="M7.8 17C6.11984 17 5.27976 17 4.63803 16.673C4.07354 16.3854 3.6146 15.9265 3.32698 15.362C3 14.7202 3 13.8802 3 12.2L3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3L16.2 3C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V12.2C21 13.8802 21 14.7202 20.673 15.362C20.3854 15.9265 19.9265 16.3854 19.362 16.673C18.7202 17 17.8802 17 16.2 17H7.8Z"
        fill={color}
      />
    </svg>
  );
}

export default MonitorIcon;
