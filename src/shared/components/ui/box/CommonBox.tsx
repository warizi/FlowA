/** @jsxImportSource @emotion/react */

import type { Interpolation, Theme } from "@emotion/react";

type CommonBoxProps = {
  children?: React.ReactNode;
  customCss?: Interpolation<Theme>;
};

const boxStyle = (theme: Theme) => ({
  borderRadius: theme.radius.medium,
  backgroundColor: theme.colors.background.deep,
});

function CommonBox({ children, customCss, ...rest }: CommonBoxProps) {
  return (
    <div css={[boxStyle, customCss]} {...rest}>
      {children}
    </div>
  );
}

export default CommonBox;
