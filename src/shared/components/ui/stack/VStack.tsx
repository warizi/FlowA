/** @jsxImportSource @emotion/react */

import type { Interpolation, Theme } from "@emotion/react";
import type { ReactNode } from "react";

type VStackProps = {
  gap?: number | string;
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  align?: "start" | "center" | "end" | "stretch";
  customCss?: Interpolation<Theme>;
  children?: ReactNode;
}


function VStack({
  gap = "0",
  justify = "start",
  align = "start",
  customCss,
  children,
  ...rest
}: VStackProps) {
  return (
    <div
      css={[
        {
          display: "flex",
          flexDirection: "row",
          gap: typeof gap === "number" ? `${gap}px` : gap,
          justifyContent: justify,
          alignItems: align,
        },
        customCss,
      ]}
      {...rest}
    >
      {children}
    </div>
  );
};

export default VStack;