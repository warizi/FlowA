/** @jsxImportSource @emotion/react */

import type { IconProps } from "../model/type";

function NoteIcon({
  color = "currentColor",
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.40033 7.1999H15.6003M8.40033 10.7999H15.6003M8.40033 14.3999H12.0003M6.60004 2.3999H17.4003C18.7258 2.3999 19.8003 3.47445 19.8003 4.79995L19.8 19.2C19.8 20.5254 18.7254 21.5999 17.4 21.5999L6.59994 21.5998C5.27446 21.5998 4.19994 20.5253 4.19995 19.1998L4.20004 4.79989C4.20005 3.47441 5.27457 2.3999 6.60004 2.3999Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NoteIcon;
