/** @jsxImportSource @emotion/react */

import { useTheme, type Theme } from "@emotion/react";

type CommonButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  color?: string;
  padding?: string;
  backgroundColor?: string;
  margin?: string;
}

const buttonStyle = (theme: Theme) => ({
  border: "none",
  borderRadius: theme.radius.medium,
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.colors.background.hover,
  }
})

function CommonButton({
  onClick = () => {},
  children,
  color = "inherit",
  padding = "5px",
  backgroundColor = "inherit",
  margin = "0",
  ...rest
}: CommonButtonProps) {
  const theme = useTheme();

  return (
    <button
      css={{
        ...buttonStyle(theme), 
        color, 
        padding, 
        backgroundColor, 
        margin
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CommonButton;