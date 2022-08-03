import { CSSProperties, FC, PropsWithChildren } from "react";

export type FlexProps = Pick<
  CSSProperties,
  | "alignItems"
  | "justifyContent"
  | "gap"
  | "flexDirection"
  | "flexGrow"
  | "flexShrink"
>;

export type FlexComponent = FC<PropsWithChildren<FlexProps>>;
