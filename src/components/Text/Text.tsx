import { TextColors, TextComponent } from "./Text.types";

const mapTextColors: Record<TextColors, string> = {
  primary: "#212121",
  secondary: "#616161",
};

export const Text: TextComponent = ({
  children,
  color = "primary",
  ...styles
}) => (
  <span style={{ color: mapTextColors[color], ...styles }}>{children}</span>
);
