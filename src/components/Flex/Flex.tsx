import { FlexComponent } from "./Flex.types";

export const Flex: FlexComponent = ({ children, ...styles }) => (
  <div style={{ display: "flex", ...styles }}>{children}</div>
);
