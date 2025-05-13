/** @jsxImportSource @emotion/react */
import type { Interpolation, Theme } from "@emotion/react";
import type { ReactNode } from "react";

type HStackProps = {
  gap?: number | string;
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  align?: "start" | "center" | "end" | "stretch";
  customCss?: Interpolation<Theme>;
  children?: ReactNode;
}

function HStack({
  gap = "0",
  justify = "start",
  align = "start",
  customCss,
  children,
  ...rest
}: HStackProps) {
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

export default HStack;